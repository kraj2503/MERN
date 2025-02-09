import path from "path";
import * as grpc from "@grpc/grpc-js";
import { GrpcObject, ServiceClientConstructor } from "@grpc/grpc-js";
import * as protoloader from "@grpc/proto-loader";
import { ProtoGrpcType } from "./generated/a";
import { AddressBookServiceHandlers } from "./generated/AddressBookService";
import { Status } from "@grpc/grpc-js/build/src/constants";

const packageDefination = protoloader.loadSync(
  path.join(__dirname, "./a.proto")
);
console.log(packageDefination);
const personProto = grpc.loadPackageDefinition(
  packageDefination
) as unknown as ProtoGrpcType;

const PERSON: any[] = [];

const handlers: AddressBookServiceHandlers = {
  AddPerson: (call, callback) => {
    console.log(call);
    let person = {
      name: call.request.name,
      age: call.request.age,
    };

    PERSON.push(person);
    callback(null, person);
  },
  GetPersonByName: (call, callback) => {
    let person = PERSON.find((x) => x.name === call.request.name);
    if (person) {
      callback(null, person);
    } else {
      callback(
        {
          code: Status.NOT_FOUND,
          details: "Not Found",
        },
        null
      );
    }
  },
};

const server = new grpc.Server();
server.addService(personProto.AddressBookService.service, handlers);

server.bindAsync(
  "0.0.0.0:9090",
  grpc.ServerCredentials.createInsecure(),
  () => {
    server.start();
  }
);

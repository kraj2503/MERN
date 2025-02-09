import path from 'path';
import * as grpc from '@grpc/grpc-js'
import { GrpcObject, ServiceClientConstructor } from '@grpc/grpc-js';
import * as protoloader from '@grpc/proto-loader'

const packageDefination = protoloader.loadSync(path.join(__dirname,'./a.proto'))
console.log(packageDefination)
const personProto = grpc.loadPackageDefinition(packageDefination)

const PERSON = []
//@ts-ignore
function addPerson(call,callback){
        console.log(call)
        let person = {
                name:call.request.name,
                age: call.request.age
        }

        PERSON.push(person)
        callback(null,person)

}

const server = new grpc.Server();
server.addService((personProto.AddressBookService as ServiceClientConstructor).service, {addPerson:addPerson})

server.bindAsync('0.0.0.0:9090', grpc.ServerCredentials.createInsecure(),()=>{
        server.start()
})
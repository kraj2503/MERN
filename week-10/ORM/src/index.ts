import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.user.create({
    data: {
      email: username,
      password,
      firstname: firstName,
      lastname: lastName,
    },
  });
  console.log(res);
}

interface UpdateParams {
  firstName: string;
  lastName: string;
}

async function updateUser(
  username: string,
  { firstName, lastName }: UpdateParams
) {
  const res = await prisma.user.update({
    where: {
      email: username,
    },
    data: {
      firstname: firstName,
      lastname: lastName,
    },
    select: {
      id:true,
      password:true
    },
  });
  console.log(res);
}

async function getUser(username:string){
    const res = await prisma.user.findUnique({
        where:{
            // email:username
            email:username
        },
        select:{
            email:true,
            lastname:true
        }
    })
    console.log(res);
}


async function deleteuser(email:string) {
const res = await prisma.user.delete({
    where:{
        email:email
    }
})
console.log(res);
    
}


// insertUser("kshti@gmail.com", "12323", "kz", "raj1");
// updateUser("kshitiz@gmail.com", {
//   firstName: "Anmol",
//   lastName: "Raj",
// });
// getUser("kz");
deleteuser("kshti@gmail.com")

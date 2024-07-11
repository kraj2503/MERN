//pick
interface User {
  id: number;
  name: string;
  age: number;
  password: string;
}

type updateProps = Pick<User, "age" | "name" | "password">;
// partial
type updatePropsOptional = Partial<updateProps>

function updateUser(userData:updatePropsOptional){
    // 
}


const displayProfile = (user: updateProps) => {
  console.log(`Name ${user.name} age: ${user.age}`);
};
const data = [
  { id: 1, name: "Kz", age: 21, password: "QWE" },
  { id: 1, name: "an", age: 11, password: "QWE" },
];
for (let i = 0; i < 2; i++) {
  displayProfile(data[i]);
}

// interface User {
//   name: string;
//   age: number;
// }

// function sumOfAges(user1: User, user2: User): number {
//   return user1.age + user2.age;
// }

// const res = sumOfAges(
//   {
//     name: "kshitiz",
//     age: 21,
//   },
//   {
//     name: "Anmol",
//     age: 19,
//   }
// );
// console.log(res);

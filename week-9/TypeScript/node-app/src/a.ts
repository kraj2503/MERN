// // // // function greets(firstName:string, age:number){
// // // //     console.log("Hello "+ firstName , age);
// // // // }

// // // // greets("Kshitiz", 21)\

// // // // sum function
// // // //type inference
// // // function sum(a: number, b: number):number {
// // //   return a + b;
// // // }

// // // const value = sum(10, 8);
// // // console.log(value);

// // // function userAge(age:number):boolean{
// // //   return (age>18?true:false)
// // // }

// // // const age = userAge(16)
// // // console.log(age);

// // function Hello(a: string) {
// //   console.log("hello", a);
// // }

// // function runAfter1s(callback: () => void) {
// //   setTimeout(callback, 3000);
// // }

// // runAfter1s(function () {
// //   console.log("hello world");
// // });

// // interface User {
// //   firstName: string;
// //   lastname: string;
// //   age: number;
// //   email?:string
// // }

// // function isLegal(user:User) {
// //   if (user.age > 18) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }

// // isLegal({
// //   firstName: "kshitiz",
// //   lastname: "raj",
// //   age: 21,
// // });

// interface Person {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }

// class Employee implements Person {
//   name: string;
//   age: number;

//   constructor(n: string, a: number) {
//     this.name = n;
//     this.age = a;
//   }

//   greet(phrase: string) {
//     console.log(`${phrase} ${this.name}`);
//   }
// }

// const e = new Employee("ksh", 21);
// e.greet("hii")


// //Types
// type User = {
//   firstName: string;
//   lastName: string;
//   age: number;
// };

// type StringOrNumber = string | number;

// function printId(id: StringOrNumber) {
//   console.log(`ID: ${id}`);
// }

// printId(101);     // ID: 101
// printId("202");   // ID: 202

// //intersection
// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type Manager = {
//   name: string;
//   department: string;
// };

// type TeamLead = Employee & Manager;

// const teamLead: TeamLead = {
//   name: "harkirat",
//   startDate: new Date(),
//   department: "Software Developer"
// };

// arrays

// // Enums
// enum Direction {
//   Up=5,
//   Down,
//   Left,
//   Right
// }
// // enum Direction {
// //   Up,
// //   Down,
// //   Left,
// //   Right
// // }

// function doSomething(keyPressed: Direction) {
// // do something.
// console.log(keyPressed);
// }
// console.log(Direction.Down);

// doSomething(Direction.Up)


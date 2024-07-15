//zod
import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});
type FinalUserSchema  = z.infer<typeof userProfileSchema>

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody:FinalUserSchema = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);



// //Exclude
// type EventType = 'click' | 'scroll' | 'mousemove';
// type ExcludeEvent = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'

// const handleEvent = (event: ExcludeEvent) => {
//   console.log(`Handling event: ${event}`);
// };

// handleEvent('click'); // OK


// // // Its a JS thing
// // interface User {
// //     id: string;
// //     name: string;
// //   }
  
// //   // Initialize an empty Map
// //   const usersMap = new Map<string, User>();
  
// //   // Add users to the map using .set
// //   usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
// //   usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
  
// //   // Accessing a value using .get
// //   console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }




// // //pick
// // interface UserId {
// //   id: number;
// //   name: string;
// //   age: number;
// //   password: string;
// // }

// // type updateProps = Pick<UserId, "age" | "name" | "password">;
// // // partial
// // type updatePropsOptional = Partial<updateProps>;

// // function updateUser(userData: updatePropsOptional) {
// //   //
// // }

// // const displayProfile = (user: updateProps) => {
// //   console.log(`Name ${user.name} age: ${user.age}`);
// // };
// // const data = [
// //   { id: 1, name: "Kz", age: 21, password: "QWE" },
// //   { id: 1, name: "an", age: 11, password: "QWE" },
// // ];
// // for (let i = 0; i < 2; i++) {
// //   displayProfile(data[i]);
// // }

// // interface User {
// //   name: string;
// //   age: number;
// // }

// // function sumOfAges(user1: User, user2: User): number {
// //   return user1.age + user2.age;
// // }

// // const res = sumOfAges(
// //   {
// //     name: "kshitiz",
// //     age: 21,
// //   },
// //   {
// //     name: "Anmol",
// //     age: 19,
// //   }
// // );
// // console.log(res);

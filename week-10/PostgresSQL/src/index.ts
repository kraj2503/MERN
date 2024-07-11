import { Client } from "pg";

const client = new Client({
  connectionString:
""
});

// async function createUsersTable() {
//   await client.connect();
//   const result = await client.query(`
//     CREATE TABLE users (
//         id SERIAL PRIMARY KEY,
//         username VARCHAR(50) UNIQUE NOT NULL,
//         email VARCHAR(255) UNIQUE NOT NULL,
//         password VARCHAR(255) NOT NULL,
//         created_at TIMESTAMP WITH (id)FAULT CURRENT_TIMESTAMP
//         );
//         `);
//   console.log(result);
// }
// createUsersTable();

// async function insertData() {
//   await client.connect();
//   const query =
//     "INSERT INTO users (username , email, password) VALUES ('username5' ,'username45@gmail.com' , '12345678')";

//     const res = await client.query(query);
//     console.log("Insertion done",res);
// }

// insertData();
// async function deleteUsersTable() {
//     try {
//       const result = await client.query(`DROP TABLE IF EXISTS users;`);
//       console.log("Table deleted:", result);
//     } catch (err) {
//       console.error("Error deleting table:", err);
//     }
//   }

//   deleteUsersTable()




// // Async function to fetch user data from the database given an email
// async function getUser(email: string) {

//   try {
//     await client.connect(); // Ensure client connection is established
//     const query = 'SELECT * FROM users WHERE email = $1';
//     const values = [email];
//     const result = await client.query(query, values);
    
//     if (result.rows.length > 0) {
//       console.log('User found:', result.rows[0]); // Output user data
//       return result.rows[0]; // Return the user data
//     } else {
//       console.log('No user found with the given email.');
//       return null; // Return null if no user was found
//     }
//   } catch (err) {
//     console.error('Error during fetching user:', err);
//     throw err; // Rethrow or handle error appropriately
//   } finally {
//     await client.end(); // Close the client connection
//   }
// }

// // Example usage
// getUser('username45@gmail.com').catch(console.error);


// Async function to fetch user data and their address together
// async function getUserDetailsWithAddress(userId: string) {
//     // const client = new Client({
//     //     host: 'localhost',
//     //     port: 5432,
//     //     database: 'postgres',
//     //     user: 'postgres',
//     //     password: 'mysecretpassword',
//     // });

//     try {
//         await client.connect();
//         const query = `
//             SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
//             FROM users u
//             JOIN addresses a ON u.id = a.user_id
//             WHERE u.id = $1
//         `;
//         const result = await client.query(query, [userId]);

//         if (result.rows.length > 0) {
//             console.log('User and address found:', result.rows[0]);
//             return result.rows[0];
//         } else {
//             console.log('No user or address found with the given ID.');
//             return null;
//         }
//     } catch (err) {
//         console.error('Error during fetching user and address:', err);
//         throw err;
//     } finally {
//         await client.end();
//     }
// }
// getUserDetailsWithAddress("1");
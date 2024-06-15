// // axios

// function main(){
//     fetch("https://sum-server.100xdevs.com/todos")
//     .then(async response =>{
//         const json = await response.json();
//         console.log(json.todos.length);

//     })
// }
// //same as above

// //post req
async function main() {
    const response = await fetch("https://httpdump.app/dumps/269fb43f-7a05-4d04-845a-317d7c1094ae", {
        method: "POST", //PUT //DELETE
        body: {
            username: "Kshitz",
            password: "12345678"
        }, headers: {
            "Authorization": "Bearer 123"
        }
    });
    const json = await response.json();
    console.log(json);

}

// main();


//axios

// const axios = require("axios");

// async function main() {
//     const response = await axios.post("https://httpdump.app/dumps/269fb43f-7a05-4d04-845a-317d7c1094ae", {
//         username: "kshitiz",
//         password: "12345678"
//     }, {
//         headers: {
//             "Authorization": "Bearer 123"
//         }
//     })
//     console.log(response.data);
// }
main()
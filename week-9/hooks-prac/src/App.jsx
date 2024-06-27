import React, { useEffect, useState } from 'react';
// import useDebounce from './useDebounce';

function useDebounce(callback,delay){

  const [debounce,setDeboundedValue] = useState(callback);


  useEffect(()=>{
   const id =  setTimeout(()=>{
    setDeboundedValue(callback)
   },delay)
   return ()=>{
     clearTimeout(id)
   }
  },[callback,delay])
return debounce
}

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
  );
};

function App(){
return(
  <SearchBar/>
)
}
export default App;
// import { useState, useEffect } from"react"


// function useInterval(callback,delay){
// useEffect(()=>{
// const id = setInterval(callback,delay)
// // console.log("2");
// return ()=>{
//   clearInterval(id)
// }
// },[callback,delay])

// }


// function App(){

// const [count,setCount] = useState(0);

// useInterval(()=>{
//   setCount(c=>c+1);
// },1000)
// // console.log("1");
//   return (
//     <>
//     Timer is at {count}
//     </>
//   )
// }
// export default App;






// import { useEffect, useState } from "react";

// function useMousePointer() {
//  const [mousePos, setPosition] = useState({x:0,y:0});

//  const handleMouseMove = (e) => {
//   setPosition({ x: e.clientX, y: e.clientY });
// };
// useEffect(() => {
//   window.addEventListener('mousemove', handleMouseMove);
//   return () => {
//     window.removeEventListener('mousemove', handleMouseMove);
//   };
// }, []);

// return mousePos;

// };

// function App() {
//   const mousePointer   = useMousePointer();

//   return (
//     <>
//       Mouse position is {mousePointer.x} & {mousePointer.y}
//     </>
//   )
// }

// export default App;
// import { useEffect, useState } from "react";

// function useIsonline() {
//   const [onlineStatus, setOnlineStatus] = useState(window.navigator.onLine);

//   useEffect(() => {
//     window.addEventListener("online", () => setOnlineStatus(true));
//     window.addEventListener("offline", () => setOnlineStatus(false));
    

//     return ()=>{
//       window.removeEventListener("online", () => setOnlineStatus(true));
//       window.removeEventListener("offline", () => setOnlineStatus(false));
//       console.log("unmounted");
//     }
//   }, []);
  

//   return onlineStatus;
// }

// function App() {
//   const online = useIsonline();
//   console.log(online);
//   if (online) {
//     return <div>("Online");</div>;
//   } else {

//     return <div>Offline</div>;
//   }
//   return <></>;
// }

// export default App;
// import { useEffect, useState } from 'react'
// import axios from 'axios'

// function App() {
//   const [todos, setTodos] = useState([])

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//       })
//   }, [])

//   return (
//     <>
//       {todos.map(todo => <Track key = {todo.title} todo={todo} />)}
//     </>
//   )
// }

// function Track({ todo }) {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
// }

// export default App
// import { useEffect, useState } from 'react'
// import axios from 'axios'

// function useTodos(n) {

//   const [todos, setTodos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {

//     const value = setInterval(() => {
// console.log("here");
//       axios.get("https://sum-server.100xdevs.com/todos")
//         .then(res => {
//           setTodos(res.data.todos);
//           setLoading(false)
//         })

//     }, n * 1000)
// console.log("1");
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//         setLoading(false)
//       })
//     return () => {
//       clearInterval(value)
//     }
//   }, [n])

//   return { todos, loading };
// }

// function App() {

//   const { todos, loading } = useTodos(5);
//   if (loading) {
//     return (
//       <div>Loading...</div>
//     )
//   }

//   return (
//     <>
//       {todos.map(todo => <Track todo={todo} />)}
//     </>
//   )
// }

// function Track({ todo }) {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
// }

// export default App
// // import { useEffect, useState } from 'react'
// // import axios from 'axios'

// // function App() {
// //   const [todos, setTodos] = useState([])

// //   useEffect(() => {
// //     axios.get("https://sum-server.100xdevs.com/todos")
// //       .then(res => {
// //         setTodos(res.data.todos);
// //       })
// //   }, [])

// //   return (
// //     <>
// //       {todos.map(todo => <Track key = {todo.title} todo={todo} />)}
// //     </>
// //   )
// // }

// // function Track({ todo }) {
// //   return <div>
// //     {todo.title}
// //     <br />
// //     {todo.description}
// //   </div>
// // }

// // export default App
// import useSWR from 'swr'

// // const fetcher = (url) => fetch(url).then((res) => res.json());
// const fetcher = async function(url) {
//   const data = await fetch(url);
//   const json = await data.json();
//   return json;
// };

// function Profile() {
//   const { data, error, isLoading } = useSWR('https://sum-server.100xdevs.com/todos', fetcher,{refreshInterval:1000})

//   if (error) return <div>failed to load</div>
//   if (isLoading) return <div>loading...</div>
//   return <div>hello, you have {data.todos.length} todos!</div>
// }

// function App() {

//   return (
//     <>
// <Profile/>
//       {/* {todos.map(todo => <Track todo={todo} />)} */}
//     </>
//   )
// }

// function Track({ todo }) {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
// }

// export default App
// import { useEffect, useState } from 'react'
// import axios from 'axios'

// function App() {
//   const [todos, setTodos] = useState([])

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//       })
//   }, [])

//   return (
//     <>
//       {todos.map(todo => <Track key = {todo.title} todo={todo} />)}
//     </>
//   )
// }

// function Track({ todo }) {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
// }

// export default App
// // import { useEffect, useState } from 'react'
// // import axios from 'axios'

// // function useTodos(n) {

// //   const [todos, setTodos] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {

// //     const value = setInterval(() => {
// // console.log("here");
// //       axios.get("https://sum-server.100xdevs.com/todos")
// //         .then(res => {
// //           setTodos(res.data.todos);
// //           setLoading(false)
// //         })

// //     }, n * 1000)
// // console.log("1");
// //     axios.get("https://sum-server.100xdevs.com/todos")
// //       .then(res => {
// //         setTodos(res.data.todos);
// //         setLoading(false)
// //       })
// //     return () => {
// //       clearInterval(value)
// //     }
// //   }, [n])

// //   return { todos, loading };
// // }

// // function App() {

// //   const { todos, loading } = useTodos(5);
// //   if (loading) {
// //     return (
// //       <div>Loading...</div>
// //     )
// //   }

// //   return (
// //     <>
// //       {todos.map(todo => <Track todo={todo} />)}
// //     </>
// //   )
// // }

// // function Track({ todo }) {
// //   return <div>
// //     {todo.title}
// //     <br />
// //     {todo.description}
// //   </div>
// // }

// // export default App
// // // import { useEffect, useState } from 'react'
// // // import axios from 'axios'

// // // function App() {
// // //   const [todos, setTodos] = useState([])

// // //   useEffect(() => {
// // //     axios.get("https://sum-server.100xdevs.com/todos")
// // //       .then(res => {
// // //         setTodos(res.data.todos);
// // //       })
// // //   }, [])

// // //   return (
// // //     <>
// // //       {todos.map(todo => <Track key = {todo.title} todo={todo} />)}
// // //     </>
// // //   )
// // // }

// // // function Track({ todo }) {
// // //   return <div>
// // //     {todo.title}
// // //     <br />
// // //     {todo.description}
// // //   </div>
// // // }

// // // export default App

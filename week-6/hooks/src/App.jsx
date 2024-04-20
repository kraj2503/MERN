import { useState, useEffect, useMemo,memo, useCallback } from 'react'
import axios from 'axios'


function App() {

  const [count,setCount] = useState(0);
  
 const inputFunction = useCallback(()=>{
    console.log("hi there");
  },[])

    


  return (
    <div>
    <ButtonComponent inputFunction={inputFunction}/>

      <button onClick={()=>{
        setCount(count+1);

      }}>Click me</button>

      
    </div>
  )

}

const ButtonComponent = memo(({inputFunction})=>{
  console.log("child render")

  return <div> 
    <button>Button clicked</button>
    </div>

})
export default App
// function App() {

// const [counter, setCounter] = useState(0);
// const [inputValue, setInputValue] = useState(1);

// // let count =0;


// //   for (let i = 1;i<=inputValue;i++){
// //     count =  count+ i;
// //     console.log(count)
// //   }

// let count  = useMemo(()=>{
//   let finalCount  = 0 ;
//   for (let i = 0;i<= inputValue;i++){
//     finalCount = finalCount+i;
  
// }

// return finalCount
// },[inputValue])


//   return (
//     <div>
//       <input onChange={function(e) {
//       setInputValue(e.target.value);
//       }} placeholder = {"Find sum from 1 to n"}/>
    
//     Sum from 1 to {inputValue} is {count}
//     <br />
//     <br />
//     <button onClick={()=>{
//       setCounter(counter+1);
//     }}>Counter {counter}</button>
     

      
//     </div>
//   )

// }


// export default App
// function App() {

// const [buttonid, setbuttonid] = useState(1);
//   return (
//     <div>
//       <button onClick={()=>setbuttonid(1)}>1</button>
//       <button onClick={()=>setbuttonid(2)}>2</button>
//       <button onClick={()=>setbuttonid(3)}>3</button>

//       <Todo id={buttonid} />
//     </div>
//   )
// }

// function Todo({ id }) {
//   const [todos, setTodos] = useState([])

//   useEffect(() => {
//     axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      
//         .then(function (response) {
//           setTodos(response.data.todo)
//   })
//   }, [id])

//   return (
//     <div>
//       {todos.title}<br></br>
//       {todos.description}
//     </div>
//   )
// }

// export default App
// function App() {


//   return (
//     <div>
//       <Todo id={1} />
//     </div>
//   )
// }

// function Todo({ id }) {
//   const [todos, setTodos] = useState([])

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
      
//         .then(function (response) {
//           setTodos(response.data.todo)
//   })
//   }, [])

//   return (
//     <div>
//       {todos.title}<br></br>
//       {todos.description}
//     </div>
//   )
// }

// export default App
// import { useState, useEffect } from 'react'
// import axios from 'axios'


// function App() {
//   const [todos, setTodos] = useState([])

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todos/")
//       .then(function (response) {
//         setTodos(response.data.todos)
//       })
//   }, [])
//   return (
//     <>
//       {todos.map(todo => <Todo key = {todo.id} title={todo.title} description={todo.description} />)}
//     </>
//   )
// }

// function Todo({ title, description }) {
//   return (
//     <div>
//       {title}<br></br>
//       {description}
//     </div>
//   )
// }

// export default App

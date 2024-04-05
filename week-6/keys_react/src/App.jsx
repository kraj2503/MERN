// import { useState } from 'react'
// import './App.css'
// let counter =4;
// function App() {
//   const [todos,setTodos] = useState([
//     {
//       id:1,
//       title:"Goto Gym",
//       description: "Jim jaao"
//     },{
//       id:2,
//       title: "Study react",
//       description: "Study from harkirat"
//     },
//     {
//       id:3,
//       title:"Sleep",
//       description: "Complete your sleep"
//     }
//   ])

// function addTodo(){
//   setTodos([...todos,{
//     id:counter++,
//     title:Math.random(),
//     description:Math.random()
//   }])

// }

//   return (
//     <>
//     <button onClick={addTodo}>Add a todo</button>
//     {todos.map(todo=><Todo key = {todo.id} title =  {todo.title} description={todo.description}/>)}
//     </>
//   )
// }

// function Todo({ title, description }) {
//   return (
//     <>
//       <h2>{title}</h2>
//       <h4>{description}</h4>

//     </>
//   )
// }
// export default App


// Wrapper 

function App() {

  return <div>

    <CardWrapper innerComponent={<TextComponent/>} />
  </div>

  function TextComponent() {
    return <>
      hi There</>
  }

  function CardWrapper({innerComponent}) {

    return <div style={{ border: "2px solid Black" }}>
      {innerComponent}

    </div>
  }

}
export default App

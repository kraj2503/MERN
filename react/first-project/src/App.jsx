// import { useState } from "react";


// function App() { //component

//   const [count, setCount] = useState(0);


//   return (


//     <div>
//       <CustomButton count={count} setCount={setCount}></CustomButton>
//     </div>


//   )
// }

// function CustomButton(props) {
//   function onClickhandler() {
//     props.setCount(props.count + 1);
//   }
//   return <button onClick={onClickhandler}>
//       Counter {props.count}
//     </button>
// }

// export default App

import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([{
    title: "Study",
    description: "Learn react from 12 to 4am"

  }]);

  return (
    <div>
      
    {todos.map(function (todo) {
      return <Todo title={todo.title} description={todo.description} />
    })}
    <button onClick={()=>{
        setTodos([...todos,{
          title:"Title",
          description:"Description"
        }])
      }}>Add items</button>
    
    </div>
  )

}

function Todo(props) {

  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
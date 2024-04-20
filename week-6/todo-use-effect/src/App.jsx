import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos/")
        .then(async function (res) {
          const json = await res.json();
          setTodos(json.todos);
        });
    }, 1000);
    

    return () => {
      console.log(intervalId);
      clearInterval(intervalId); // Cleanup function to clear the interval
    };
  }, []);


    return (
      <>


        {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}

      </>
    )
  }

function Todo({ title, description }) {
      return (
        <>
          <h2>{title}</h2>
          <h4>{description}</h4>

        </>
      )
    }



export default App


function App() {

  return (
    <>
      <Todo
        title="todo-1"
        description="This is Todo 1 from react with tsx"
        isDone={true}
      />
    </>
  );
}

interface todoProp {
  title: string;
  description: string;
  isDone: boolean;
}

function Todo(todo: todoProp) {
  return (
    <>
      <h1>{todo.title}</h1>
      {todo.description}
      {todo.isDone}
    </>
  );
}
export default App;

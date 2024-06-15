
import './App.css'
import { RecoilRoot, useRecoilState, useSetRecoilState } from 'recoil';
import { todosAtomFamily } from './atoms';
import { TODOS } from './todos';
import { useEffect } from 'react';

function App() {
  return <RecoilRoot>
    <UpdateAtomFaM />
    <Todo id={1} />
    <Todo id={2} />
  </RecoilRoot>
}

function UpdateAtomFaM() {

  const updateTodo = useSetRecoilState(todosAtomFamily(2));
  useEffect(() => {

    setTimeout(() => {
      updateTodo({
        id: "2",
        title: "new one",
        description: "new todo"
      })
    }, 5000)
  })

  return <></>
}
function Todo({ id }) {
  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

  return (
    <>
      {todo.title}<br/>
      {todo.description}
      <br />
    </>
  )
}

export default App

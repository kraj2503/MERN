import React, { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {





  return (
    <Fragment>
      <HeaderWithButton></HeaderWithButton>
      <Header title="Kshitiz2" />


    </Fragment>
  )
}

function HeaderWithButton() {
  const [title, setTitle] = useState("Kshitiz1");


  function updateTitle() {
    setTitle("My Name is " + Math.random());
  }
  return (<>
    <button onClick={updateTitle}>Update the Title</button>
    <Header title={title} />
  </>
  )
}

// function Header({ title }) {

//   return <div>
//     {title}
//   </div>
// }
const Header  = React.memo(function Header({title}) {

  return <div>
    {title}
  </div>
})

export default App


import axios from 'axios'
import './App.css'
import { Turnstile } from '@marsidev/react-turnstile'
import { useState } from 'react'
function App() {
  const [token, setToken] = useState<string>("")

  return (
    <>
    <div>

      <input placeholder = "This is box 1 " type="text" />
    </div>
      <input placeholder = "This is box 2 " type="text" />

      <Turnstile onSuccess={(token) => {
        setToken(token)
      }} siteKey='0x4AAAAAAA4Vf9HT5g7rdwth' />

      <button onClick={()=>{
        axios.post("http://localhost:3000/reset-password",{
          email:"khati@gmail.com",
          otp:"123123",
          token:token
        })
      }}>Update password</button>
    </>
  )
}

export default App

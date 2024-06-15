import { useState } from 'react'
import './App.css'
import { YT } from './components/YT'
import { VideoGrid } from './components/videoGrid'
import { Appbar } from './components/Appbar'
function App() {


  return (
    <div>
      <Appbar />
      <VideoGrid />
    </div>
  )
}

export default App

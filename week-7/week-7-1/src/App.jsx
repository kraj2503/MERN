import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { Suspense, lazy } from 'react'
// import { Landing } from './Components/landing'
const Landing = lazy(() => import('./Components/landing'));
const Dashboard = lazy(() => import('./Components/Dashboard'));

function App() {
  return (

    <div>
      {/* // <div>
    //   <div style= {{background:"lightblue"}}>
    //     This is the Top bar
    //   </div> */}

      <BrowserRouter>
        <Appbar />
        <Routes>

          <Route path="/dashboard" element={<Suspense fallback={"Loading..."}><Dashboard /></Suspense>} />
          <Route path='/' element={<Suspense fallback={"Loading..."}><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar() {
  const navigate = useNavigate();
  return <div>
    <button onClick={() => {
      navigate("/");
    }}>Landing Page</button>
    <button onClick={() => {
      navigate("/dashboard")
    }}>Dashboard</button>
  </div>

}
export default App
import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"
import { Toaster } from "react-hot-toast"


function App() {

  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Toaster></Toaster>
    </>
  )
}

export default App

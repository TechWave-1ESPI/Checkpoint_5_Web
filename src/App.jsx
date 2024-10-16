import { Outlet } from "react-router-dom"

import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'

import './index.css'


function App() {

  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App


import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SideBar from './components/SideBar'

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  function toggleSideBar() {
    setIsSideBarOpen(prev => !prev);
  }

  return (
    <>
      <Header toggleSideBar={toggleSideBar}></Header>
      <SideBar isSideBarOpen={isSideBarOpen}></SideBar>
    </>
  )
}

export default App

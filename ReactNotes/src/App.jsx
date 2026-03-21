
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SideBar from './components/SideBar'
import { Outlet } from 'react-router-dom';

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  function toggleSideBar() {
    setIsSideBarOpen(prev => !prev);
  }

  return (
    <>
      <Header toggleSideBar={toggleSideBar}></Header>
      <SideBar isSideBarOpen={isSideBarOpen}></SideBar>
      <div className='outlet'>
        <Outlet></Outlet>

      </div>
    </>
  )
}

export default App


import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SideBar from './components/SideBar'
import { Outlet } from 'react-router-dom';

function App() {

  const [myView, setMyview] = useState(true); // true => grid view ans false => list view
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  function toggleSideBar() {
    setIsSideBarOpen(prev => !prev);
  }

  return (
    <>
      <Header toggleSideBar={toggleSideBar} myView={myView} setMyview={setMyview}></Header>
      <SideBar isSideBarOpen={isSideBarOpen}></SideBar>
      <div className='outlet'>
        <Outlet context={{ myView }}></Outlet>

      </div>
    </>
  )
}

export default App


import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SideBar from './components/SideBar'
import { Outlet } from 'react-router-dom';

function App() {

  const [myView, setMyview] = useState(true); // true => grid view ans false => list view
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  const [searchQuery, setSearchQuery] = useState("")

  const [takeInputData, setTakeInputData] = useState([
    {
      title: "Reactjs",
      description: "My ReactNotes App",
      isPinned: false,
      id: Date.now() + Math.random()
    },
    {
      title: "javaScript",
      description: "this is js notes",
      isPinned: false,
      id: Date.now() + Math.random()
    },
    {
      title: "Html",
      description: "html stands for hyper text markup language",
      isPinned: false,
      id: Date.now() + Math.random()
    },
    {
      title: "CSS",
      description: "css stands for cascading style sheet",
      isPinned: false,
      id: Date.now() + Math.random()
    },
  ]);
  const [deletedNotesArr, setDeletedNotesArr] = useState([]);
  const [archivedNotes, setArchivedNotes] = useState([]);


  function toggleSideBar() {
    setIsSideBarOpen(prev => !prev);
  }

  return (
    <>
      <Header
        toggleSideBar={toggleSideBar}
        myView={myView}
        setMyview={setMyview}
        setSearchQuery={setSearchQuery}
      ></Header>
      <SideBar isSideBarOpen={isSideBarOpen}></SideBar>
      <div className='outlet'>
        <Outlet context={{
          myView,
          deletedNotesArr,
          setDeletedNotesArr,
          takeInputData,
          setTakeInputData,
          archivedNotes,
          setArchivedNotes,
          searchQuery
        }}></Outlet>

      </div>
    </>
  )
}

export default App

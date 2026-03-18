import { MdOutlineLightbulb } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

import NoteSection from "./NoteSection";
import "../styles/SideBar.css"
import { useState } from "react";

function SideBar({ isSideBarOpen }) {

  const [isActive, setIsActive] = useState("Note");

  const noteSectionData = [
    {
      icon: <MdOutlineLightbulb />,
      title: "Note",
      path: "/"
    },
    {
      icon: <FaPen />,
      title: "Edit Labels",
      path: "EditLabels"
    },
    {
      icon: <RiDeleteBin6Line />,
      title: "Bin",
      path: "Bin"
    },
  ]

  return (
    <>
      <div className={`slideBarWrapper ${isSideBarOpen ? "sideBarIsOpen" : "sideBarIsClose"}`}>
        {
          noteSectionData.map((noteSecItem, index) => (
            <NoteSection
              key={index}
              noteSectionData={noteSecItem}
              isSideBarOpen={isSideBarOpen}
              isActive={isActive}
              setIsActive={setIsActive}
            ></NoteSection>
          ))
        }

      </div>
    </>
  )
}
export default SideBar;
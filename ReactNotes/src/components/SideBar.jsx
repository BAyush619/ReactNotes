import { MdOutlineLightbulb } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

import NoteSection from "./NoteSection";
import "../styles/SideBar.css"

function SideBar() {

  const noteSectionData = [
    {
      icon: <MdOutlineLightbulb />,
      title: "Note"
    },
    {
      icon: <FaPen />,
      title: "Edit Labels"
    },
    {
      icon: <RiDeleteBin6Line />,
      title: "Bin"
    },
  ]

  return (
    <>
      <div className="slideBarWrapper">
        {
          noteSectionData.map(noteSecItem => (
            <NoteSection noteSectionData={noteSecItem}></NoteSection>
          ))
        }

      </div>
    </>
  )
}
export default SideBar;
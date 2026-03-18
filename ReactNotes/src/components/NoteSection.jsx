import { Link } from "react-router-dom";
import "../styles/NoteSection.css";
function NoteSection({ noteSectionData, isSideBarOpen, setIsActive, isActive }) {

  return (
    <>
      <Link to={noteSectionData.path} style={{ textDecoration: "none", color: "inherit" }}>

        <div className={`noteSecItemWrapper ${isActive === noteSectionData.title ? `activeSectionBar` : ""}`}>

          <div className={`noteSecIcons `} onClick={() => setIsActive(noteSectionData.title)}>
            {
              noteSectionData.icon
            }
          </div>

          <div className={`noteSectitle ${isSideBarOpen ? `openSideBar` : `closeSideBar`}`} onClick={() => setIsActive(noteSectionData.title)}>
            {
              noteSectionData.title
            }
          </div>
        </div>
      </Link>
    </>
  )
}
export default NoteSection;
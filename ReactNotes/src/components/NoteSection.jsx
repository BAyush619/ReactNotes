import "../styles/NoteSection.css";
function NoteSection({ noteSectionData, isSideBarOpen, setIsActive, isActive }) {

  console.log(isSideBarOpen)
  return (
    <>

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
    </>
  )
}
export default NoteSection;
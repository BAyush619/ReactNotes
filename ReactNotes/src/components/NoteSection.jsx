import "../styles/NoteSection.css";
function NoteSection({ noteSectionData, isSideBarOpen }) {

  console.log(isSideBarOpen)
  return (
    <>

      <div className="noteSecItemWrapper">

        <div className="noteSecIcons">
          {
            noteSectionData.icon
          }
        </div>

        <div className={`noteSectitle ${isSideBarOpen ? `openSideBar` : `closeSideBar`}`}>
          {
            noteSectionData.title
          }
        </div>
      </div>
    </>
  )
}
export default NoteSection;
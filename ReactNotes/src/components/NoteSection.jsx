import "../styles/NoteSection.css";
function NoteSection({ noteSectionData }) {
  return (
    <>

      <div className="noteSecItemWrapper">

        <div className="noteSecIcons">
          {
            noteSectionData.icon
          }
        </div>

        <div className="noteSectitle">
          {
            noteSectionData.title
          }
        </div>
      </div>
    </>
  )
}
export default NoteSection;
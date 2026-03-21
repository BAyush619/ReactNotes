import "../styles/DisplayNoteCard.css";

function DisplayNoteCard({ noteItem }) {
  return (
    <>
      <div className="DisplayNoteCardWrapper">
        <div className="MyNoteTitle">
          {noteItem.title}
        </div>
        <div className="NoteDiscription">
          {noteItem.description}
        </div>

        ascsdvs
      </div>
    </>
  )
}
export default DisplayNoteCard;
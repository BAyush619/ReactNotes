import "../styles/DisplayNoteCard.css";
import { RiPushpin2Line } from "react-icons/ri";
import { MdArchive } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

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
        <div className="cardPinWrapper">
          <RiPushpin2Line />
        </div>
        <div className="cardActionWrapper">
          <div className="cardArchiveWrapper">
            <MdArchive />
          </div>
          <div className="cardDeleteWrapper">
            <MdDeleteForever />
          </div>
        </div>
      </div>
    </>
  )
}
export default DisplayNoteCard;
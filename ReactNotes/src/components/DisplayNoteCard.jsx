import "../styles/DisplayNoteCard.css";
import { RiPushpin2Line } from "react-icons/ri";
import { MdArchive } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";


function DisplayNoteCard({ noteItem, setTakeInputData, index, takeInputData, setPinned }) {

  const [deletedNotesArr, setDeletedNotesArr] = useState([]);


  function handleNotesDeleteButton() {
    setDeletedNotesArr((prev) => [...prev, noteItem])
    setTakeInputData((prevNotes => (

      prevNotes.filter((_, i) => i !== index)

    )))
  }
  // console.log(deletedNotesArr) <= this is deleted notes array for my bin page

  function handlePinButton() {
    setTakeInputData(takeInputData.filter((_, i) => i !== index))
    setPinned((prev) => [...prev, noteItem])

  }
  return (
    <>
      <div className="DisplayNoteCardWrapper">
        <div className="MyNoteTitle">
          {noteItem.title}
        </div>
        <div className="NoteDiscription">
          {noteItem.description}
        </div>
        <div className="cardPinWrapper" onClick={() => handlePinButton()}>
          <RiPushpin2Line />
        </div>
        <div className="cardActionWrapper">
          <div className="cardArchiveWrapper" onClick={() => handleNotesArchivedButton()}>
            <MdArchive />
          </div>
          <div className="cardDeleteWrapper" onClick={() => {
            handleNotesDeleteButton()
          }}>
            <MdDeleteForever />
            {/* delete option */}
          </div>
        </div>
      </div>
    </>
  )
}
export default DisplayNoteCard;
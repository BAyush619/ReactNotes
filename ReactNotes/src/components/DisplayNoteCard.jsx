import "../styles/DisplayNoteCard.css";
import { RiPushpin2Line } from "react-icons/ri";
import { MdArchive } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";


function DisplayNoteCard({ noteItem, setTakeInputData, takeInputData, setDeletedNotesArr }) {



  function handleNotesDeleteButton() {
    setDeletedNotesArr((prev) => [...prev, noteItem])
    setTakeInputData((prevNotes => (

      prevNotes.filter((note) => note.id !== noteItem.id)

    )))
  }

  function handlePinButton() {
    const updatedNotes = takeInputData.map((note) => {
      if (note.id === noteItem.id) {
        return { ...note, isPinned: !note.isPinned };
      }
      return note;
    })
    setTakeInputData(updatedNotes);
  }

  return (
    <>
      <div className={`DisplayNoteCardWrapper ${!noteItem.isPinned ? "DisplaypinnedNotesWrapper" : ""}`}>
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
          <div className="cardArchiveWrapper">
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
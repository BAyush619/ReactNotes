import "../styles/DisplayNoteCard.css";
import { RiPushpin2Line } from "react-icons/ri";
import { MdArchive } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";


function DisplayNoteCard({ noteItem, setTakeInputData, takeInputData, setDeletedNotesArr, archivedNotes, setArchivedNotes }) {



  function handleNotesDeleteButton() {
    setDeletedNotesArr((prev) => [...prev, noteItem])
    setTakeInputData((prevNotes => (

      prevNotes.filter((note) => note.id !== noteItem.id)

    )))
  }
  function handleArchiveNotes() {
    //remove from setInputData and add to setArchived notes
    setTakeInputData(takeInputData.filter((note) => note.id != noteItem.id));
    setArchivedNotes((prev) => [...prev, noteItem]);
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
          <div className="cardArchiveWrapper" onClick={() => handleArchiveNotes()}>
            <MdArchive />
            <span className="archive-tool-tip">Archive</span>
          </div>
          <div className="cardDeleteWrapper" onClick={() => {
            handleNotesDeleteButton()
          }}>
            <MdDeleteForever />
            <span className="delete-tool-tip">Delete</span>
          </div>
        </div>
      </div>
    </>
  )
}
export default DisplayNoteCard;
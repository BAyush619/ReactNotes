
import { useState } from 'react';
import DisplayNoteCard from '../components/DisplayNoteCard';
import NotesAccordian from "../components/NotesAccordian";
import "../styles/pagesStyle/Notes.css"
import { useOutletContext } from "react-router-dom";

function Notes() {
  const { setDeletedNotesArr, myView, takeInputData, setTakeInputData } = useOutletContext();




  const pinnedNotes = takeInputData.filter(note => note.isPinned);
  const unPinnedNotes = takeInputData.filter(note => !note.isPinned);

  return (
    <>
      <div className="NotesWrapper" >
        <NotesAccordian setTakeInputData={setTakeInputData}></NotesAccordian>

      </div>
      <div className="cardWrapper">
        <div className={`${pinnedNotes.length > 0 ? "DisplaypinnedNotesWrapper" : ""}`} style={{ marginBottom: "50px" }}>
          {
            pinnedNotes.length > 0 && (
              <div className="DisplaypinnedNotesWrapper">
                <div className="sectionTitle">Pinned</div>

                <div className={`displayMethodOfNotes ${myView ? "gridView" : "listView"}`}>
                  {pinnedNotes.map((noteItem) => (
                    <DisplayNoteCard
                      key={noteItem.id}
                      noteItem={noteItem}
                      setTakeInputData={setTakeInputData}
                      takeInputData={takeInputData}
                      setDeletedNotesArr={setDeletedNotesArr}
                    />
                  ))}
                </div>
              </div>
            )
          }
        </div>
        <div className={`displayMethodOfNotes ${myView ? "gridView" : "listView"}`}>

          {
            unPinnedNotes.map((noteItem, index) => {

              return <DisplayNoteCard
                key={noteItem.id}
                noteItem={noteItem}
                setTakeInputData={setTakeInputData}
                takeInputData={takeInputData}
                setDeletedNotesArr={setDeletedNotesArr}
              ></DisplayNoteCard>
            })
          }
        </div>

      </div>


    </>
  )
}

export default Notes;
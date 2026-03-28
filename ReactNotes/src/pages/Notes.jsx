
import { useState } from 'react';
import DisplayNoteCard from '../components/DisplayNoteCard';
import NotesAccordian from "../components/NotesAccordian";
import { BiBulb } from "react-icons/bi";
import "../styles/pagesStyle/Notes.css"
import { useOutletContext } from "react-router-dom";

function Notes() {
  const { setDeletedNotesArr, myView, takeInputData, setTakeInputData, archivedNotes, setArchivedNotes, searchQuery } = useOutletContext();


  const filteredNotes = takeInputData.filter((note) => note.title.toLowerCase().includes(searchQuery.toLowerCase()) || note.description.toLowerCase().includes(searchQuery.toLowerCase()));


  const pinnedNotes = filteredNotes.filter(note => note.isPinned);
  const unPinnedNotes = filteredNotes.filter(note => !note.isPinned);

  return (
    <>
      {
        pinnedNotes.length === 0 && unPinnedNotes.length === 0
        &&
        <div className="showEmptyNotesWrapper">
          <div className="notesLogoContainer">
            <BiBulb />
          </div>
          <div className="notesmessageContainer">
            Notes that you add appear here
          </div>
        </div>
      }
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
                      archivedNotes={archivedNotes}
                      setArchivedNotes={setArchivedNotes}

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
                archivedNotes={archivedNotes}
                setArchivedNotes={setArchivedNotes}
              ></DisplayNoteCard>
            })
          }
        </div>

      </div>


    </>
  )
}

export default Notes;

import { useState } from 'react';
import DisplayNoteCard from '../components/DisplayNoteCard';
import NotesAccordian from "../components/NotesAccordian";
import "../styles/pagesStyle/Notes.css"
import { useOutletContext } from "react-router-dom";

function Notes() {

  const MyNotesList = [
    {
      title: "Reactjs",
      description: "My ReactNotes App",
      isPinned: false
    },
    {
      title: "javaScript",
      description: "this is js notes",
      isPinned: false
    },
    {
      title: "Html",
      description: "html stands for hyper text markup language",
      isPinned: false
    },
    {
      title: "CSS",
      description: "css stands for cascading style sheet",
      isPinned: false
    },
  ]

  const [takeInputData, setTakeInputData] = useState(MyNotesList);


  const { myView } = useOutletContext();

  const pinnedNotes = takeInputData.filter(note => note.isPinned);
  const unPinnedNotes = takeInputData.filter(note => !note.isPinned);

  console.log(pinnedNotes)
  return (
    <>
      <div className="NotesWrapper" >
        <NotesAccordian setTakeInputData={setTakeInputData}></NotesAccordian>

      </div>
      <div className="cardWrapper">
        {/* <div className="DisplaypinnedNotesWrapper">
          <div>Pinned</div>
         
          {
            pinned.length > 0 && pinned.map((noteItem, index) => {
              return <DisplayNoteCard
                noteItem={noteItem}
                setTakeInputData={setTakeInputData}
                takeInputData={takeInputData}
                index={index}
                setPinned={setPinned}
              ></DisplayNoteCard>
            })
          }
        </div> */}
        <div className={`displayMethodOfNotes ${myView ? "gridView" : "listView"}`}>

          {
            unPinnedNotes.map((noteItem, index) => {

              return <DisplayNoteCard
                key={index}
                index={index} //fopr deleting which notes
                noteItem={noteItem}
                setTakeInputData={setTakeInputData}
                takeInputData={takeInputData}
              ></DisplayNoteCard>
            })
          }
        </div>

      </div>


    </>
  )
}

export default Notes;

import { useState } from 'react';
import DisplayNoteCard from '../components/DisplayNoteCard';
import NotesAccordian from "../components/NotesAccordian";
import "../styles/pagesStyle/Notes.css"

function Notes() {

  const MyNotesList = [
    {
      title: "Reactjs",
      description: "My ReactNotes App",
    },
    {
      title: "javaScript",
      description: "this is js notes",
    },
    {
      title: "Html",
      description: "html stands for hyper text markup language",
    },
    {
      title: "CSS",
      description: "css stands for cascading style sheet",
    },
  ]

  const [takeInputData, setTakeInputData] = useState(MyNotesList);
  console.log();

  return (
    <>
      <div className="NotesWrapper" >
        <NotesAccordian setTakeInputData={setTakeInputData}></NotesAccordian>

      </div>
      <div className="cardWrapper">
        <div className='displayMethodOfNotes'>

          {
            takeInputData.map((noteItem, index) => {

              return <DisplayNoteCard key={index} noteItem={noteItem}></DisplayNoteCard>
            })

          }
        </div>

      </div>


    </>
  )
}

export default Notes;
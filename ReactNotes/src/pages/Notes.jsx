import { useState } from "react";
import "../styles/pagesStyle/Notes.css"

function Notes() {
  const [openAccordian, setOpenAccordian] = useState(false);
  return (
    <>
      <div className="NotesWrapper">
        <div className="InputAccordian" onClick={() => setOpenAccordian(true)}>
          Take a note....
          <br />
          <div>
            {
              openAccordian &&
              <input type="text" placeholder="enter notes here" />
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Notes;
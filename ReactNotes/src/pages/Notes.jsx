import { useEffect, useRef, useState } from "react";
import "../styles/pagesStyle/Notes.css"
import { BsPin } from "react-icons/bs";

function Notes() {
  const [openAccordian, setOpenAccordian] = useState(false);
  const accordionRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (accordionRef.current &&
        !accordionRef.current.contains(event.target)) {
        setOpenAccordian(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }

  }, [])

  return (
    <>
      <div className="NotesWrapper">
        <div className={`InputAccordian ${openAccordian ? "opneAccordian" : ""}`}
          ref={accordionRef}
          onClick={() => setOpenAccordian(true)}>
          {
            openAccordian ?
              <div className="tile-inputWrapper">
                <div>
                  <input type="text" className="NotesTitle" placeholder="Title" />
                </div>
                <div className="pin-wrpper">
                  <BsPin />
                  <span className="tooltip-pin">Pin note</span>
                </div>
              </div>
              :
              <div className="accordian-body">
                Take a note....
              </div>
          }


          <br />
          <div>
            {
              openAccordian &&
              <input type="text" className="WritingNoteSection" placeholder="Take a note...." />
              // make text are instead of input
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Notes;
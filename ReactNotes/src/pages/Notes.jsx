import { useEffect, useRef, useState } from "react";
import "../styles/pagesStyle/Notes.css"
import { BsPin } from "react-icons/bs";
import { MdFormatColorText } from "react-icons/md";
import { IoMdColorPalette } from "react-icons/io";
import { BiUndo } from "react-icons/bi";
import { BiRedo } from "react-icons/bi";

function Notes() {
  const [openAccordian, setOpenAccordian] = useState(false);
  const accordionRef = useRef(null);
  const textareaRef = useRef(null);

  const handleInput = () => {
    const ele = textareaRef.current;
    ele.style.height = "auto";                   // reset
    ele.style.height = ele.scrollHeight + "px"; // grow
  }

  // handles accordian open close state if click outside closes accordian
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


  // this directly focuses to textarea so when click on Take a note... accordian opens and text cursor is at textArea
  useEffect(() => {
    if (openAccordian && accordionRef.current) {
      textareaRef.current.focus();
    }
  }, [openAccordian])

  // handle open close of accordian
  function handleInputCloseButton() {
    setOpenAccordian(false);
  }


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

          <div>
            {
              openAccordian &&
              <textarea
                placeholder="Take a note...."
                ref={textareaRef}
                onInput={handleInput}
                className="WritingNoteSection">

              </textarea>
            }
          </div>
          <div >
            {
              openAccordian &&
              <div className="NotesToolBarWrapper" >
                <div className="NotesToolBar">
                  <div className="tb tb1">
                    <MdFormatColorText />
                    <span className="tooltip-formateoption">
                      Formatting Options
                    </span>
                  </div>

                  <div className="tb tb2">
                    <IoMdColorPalette />
                    <span className="tooltip-backgroundoption">
                      Background Options
                    </span>
                  </div>

                  <div className="tb tb3">
                    <BiUndo />
                    <span className="tooltip-undoOption">
                      Undo
                    </span>
                  </div>

                  <div className="tb tb4">
                    <BiRedo />
                    <span className="tooltip-redoOption">
                      Redo
                    </span>
                  </div>

                </div>
                <div className="MyNotesToolBarBtnWrapper" >
                  <button className="NotesToolBarBtn" onClick={(e) => {
                    e.stopPropagation();
                    handleInputCloseButton();
                  }}>close</button>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Notes;
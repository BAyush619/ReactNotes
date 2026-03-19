import { useEffect, useRef, useState } from "react";
import "../styles/pagesStyle/Notes.css"
import { BsPin } from "react-icons/bs";
import { MdFormatColorText } from "react-icons/md";
import { IoMdColorPalette } from "react-icons/io";
import { BiUndo } from "react-icons/bi";
import { BiRedo } from "react-icons/bi";
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { FaUnderline } from "react-icons/fa";
import { MdOutlineFormatClear } from "react-icons/md";
import { BsTypeH1 } from "react-icons/bs";
import { BsTypeH2 } from "react-icons/bs";
import { IoText } from "react-icons/io5";

function Notes() {
  const [openAccordian, setOpenAccordian] = useState(true);
  const [openFormattingOptions, setOpenFormattingOptions] = useState(true);
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
        setOpenFormattingOptions(false)
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
    setOpenFormattingOptions(false)
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
          <div>
            {
              openFormattingOptions &&
              <div className="formatoptionsMenyWrapper">
                <div className="formatOptionTextStyles">
                  <div className="Heading1">
                    <BsTypeH1 />
                    <span className="tooltip-heading1">Heading 1</span>
                  </div>
                  <div className="Heading2">
                    <BsTypeH2 />
                    <span className="tooltip-heading2">Heading 2</span>
                  </div>
                  <div className="normalText">
                    <IoText />
                    <span className="tooltip-Normal">Normal</span>
                  </div>
                </div>
                <div className="formatoptionsTextFormatting">
                  <div className="Bold">
                    <FaBold />
                    <span className="tooltip-bold">Bold</span>
                  </div>
                  <div className="Ittlaic">
                    <FaItalic />
                    <span className="tooltip-itlaic">Italic</span>
                  </div>
                  <div className="underline">
                    <FaUnderline />
                    <span className="tooltip-underline">Underline</span>
                  </div>
                  <div className="clearFormatting">
                    <MdOutlineFormatClear />
                    <span className="tooltip-clearFormat">Clear formatting</span>
                  </div>
                </div>
              </div>

            }
          </div>
          <div>
            {
              openAccordian &&
              <div className="NotesToolBarWrapper" >
                <div className="NotesToolBar">
                  <div className="tb tb1" onClick={() => setOpenFormattingOptions(!openFormattingOptions)}>
                    <MdFormatColorText />
                    <span className="tooltip-formateoption" >
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
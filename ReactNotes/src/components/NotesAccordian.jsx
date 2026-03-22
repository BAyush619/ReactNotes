import "../styles/NotesAccordian.css";
import { useEffect, useRef, useState } from "react";
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
import NotesAccordianBackGround from "../components/NotesAccordianBackGround";

function NotesAccordian({ setTakeInputData }) {

  const [openAccordian, setOpenAccordian] = useState(false);
  const [openFormattingOptions, setOpenFormattingOptions] = useState(false);
  const [openBackgroundOption, setOpenBackgroundOption] = useState(false);
  const [txtsize, setTxtSize] = useState("normal");
  const [txtBold, setTxtBold] = useState(false);
  const [txtItalic, setTxtItalic] = useState(false);
  const [txtUnderline, setTxtUnderline] = useState(false);
  const [selectBackgroundColor, setSelectBackgroundColor] = useState("default");
  const accordionRef = useRef(null);
  const backgroundRef = useRef(null);
  const textareaRef = useRef(null);



  const handleInput = () => {
    const ele = textareaRef.current;
    ele.style.height = "auto";                   // reset
    ele.style.height = ele.scrollHeight + "px"; // grow
  }

  // handles accordian open close state if click outside closes accordian
  useEffect(() => {
    function handleClickOutside(event) {
      const clickedoutsideAccordian = !accordionRef.current?.contains(event.target);
      const clickedoutsideBackground = !backgroundRef.current?.contains(event.target);
      if (clickedoutsideAccordian && clickedoutsideBackground) {
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
    setOpenFormattingOptions(false);
  }


  // function to apply H1
  function applyH1() {
    document.execCommand("formatBlock", false, "h1");
    setTxtSize("h1")
  }
  // function to apply H2
  function applyH2() {
    document.execCommand("formatBlock", false, "h2");
    setTxtSize("h2")
  }

  // function to apply Normal
  function applyNormal() {
    document.execCommand("formatBlock", false, "p");
    setTxtSize("normal")
  }

  // function to apply bold
  function applyBold() {
    document.execCommand("bold");
    setTxtBold(!txtBold);
  }

  // function to apply Italic
  function applyItalic() {
    document.execCommand("italic");
    setTxtItalic(!txtItalic);
  }
  // function to apply underline
  function applyunderline() {
    document.execCommand("underline");
    setTxtUnderline(!txtUnderline);
  }

  // function remove formate
  function applyRemoveFormat() {
    document.execCommand("removeFormat");
    document.execCommand("formatBlock", false, "p");
    textareaRef.current.focus();
  }

  const [inputNotesEntry, setInputNotesEntry] = useState("");

  const handleSettingTheNotesValue = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setTakeInputData(prev => [
        ...prev,
        {
          title: inputNotesEntry,
          description: textareaRef.current.innerHTML,
        }
      ]);
      setInputNotesEntry("");
      textareaRef.current.innerHTML = "";
    }

  }

  return (
    <>
      <div className={`InputAccordian ${openAccordian ? "opneAccordian" : ""}`}
        style={{ backgroundColor: `${selectBackgroundColor}` }}
        ref={accordionRef}
        onKeyDown={handleSettingTheNotesValue}
        onClick={() => setOpenAccordian(true)}>
        {
          openAccordian ?
            <div className="tile-inputWrapper" >
              <div>



                <input
                  value={inputNotesEntry}
                  onChange={(event) => setInputNotesEntry(event.target.value)}
                  type="text" className="NotesTitle" placeholder="Title" style={{ backgroundColor: `${selectBackgroundColor}` }} />



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
            // openAccordian &&
            // <textarea
            //   placeholder="Take a note...."
            //   ref={textareaRef}
            //   onInput={handleInput}
            //   className="WritingNoteSection">

            // </textarea>

            openAccordian &&
            <div
              ref={textareaRef}
              onInput={handleInput}
              contentEditable={true}
              className="WritingNoteSection editable"
              data-placeholder="Take a note....."
              style={{ backgroundColor: `${selectBackgroundColor}` }}
            >

            </div>

          }
        </div>
        <div>
          {
            openFormattingOptions &&
            <div className="formatoptionsMenyWrapper">
              <div className="formatOptionTextStyles" >
                <div className={`Heading1 ${txtsize === "h1" && "activateH1"}`} onMouseDown={(e) => {
                  e.preventDefault();
                  applyH1();
                }}>
                  <BsTypeH1 />
                  <span className="tooltip-heading1">Heading 1</span>
                </div>
                <div className={`Heading2 ${txtsize === "h2" && "activateH2"}`} onMouseDown={(e) => {
                  e.preventDefault();
                  applyH2();
                }}>
                  <BsTypeH2 />
                  <span className="tooltip-heading2">Heading 2</span>
                </div>
                <div className={`normalText ${txtsize === "normal" && "activateNormal"}`} onMouseDown={(e) => {
                  e.preventDefault();
                  applyNormal();
                }}>
                  <IoText />
                  <span className="tooltip-Normal" >Normal</span>
                </div>
              </div>
              <div className="formatoptionsTextFormatting">
                <div className={`Bold ${txtBold && "activateBold"}`} onMouseDown={(e) => {
                  e.preventDefault();
                  applyBold();
                }}>
                  <FaBold />
                  <span className="tooltip-bold">
                    Bold
                  </span>
                </div>
                <div className={`Ittlaic ${txtItalic && "activateItalic"}`} onMouseDown={(e) => {
                  e.preventDefault();
                  applyItalic();
                }}>
                  <FaItalic />
                  <span className="tooltip-itlaic">Italic</span>
                </div>
                <div className={`underline ${txtUnderline && "activateUnderline"}`} onMouseDown={(e) => {
                  e.preventDefault();
                  applyunderline();
                }}>
                  <FaUnderline />
                  <span className="tooltip-underline">Underline</span>
                </div>
                <div className="clearFormatting" onMouseDown={(e) => {
                  e.preventDefault()
                  applyRemoveFormat();
                }}>
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

                <div className="tb tb2" onClick={() => {
                  setOpenBackgroundOption(!openBackgroundOption);
                }}>
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
                }}
                  style={{ backgroundColor: `${selectBackgroundColor}` }}
                >close</button>
              </div>
            </div>
          }

        </div>
      </div>
      <div>
        {
          openAccordian && openBackgroundOption &&
          <div ref={backgroundRef}>
            <NotesAccordianBackGround setSelectBackgroundColor={setSelectBackgroundColor}></NotesAccordianBackGround>
          </div>
        }
      </div>
    </>
  )
}
export default NotesAccordian;
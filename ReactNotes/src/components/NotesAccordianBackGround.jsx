import { useEffect, useState } from "react";
import "../styles/NotesAccordianBackGround.css"
import { PiDropSlash } from "react-icons/pi";

function NotesAccordianBackGround({ setSelectBackgroundColor }) {
  const [currentSelectedColor, setCurrentSelectedColor] = useState("default");
  const [currentMode, setCurrentMode] = useState(localStorage.getItem("theme"));
  return (
    <>
      <div className="BackGroundColorOptionWrapper">
        <div className={`${currentSelectedColor === "default" && "activateThisColor"}`}
          onClick={() => {
            setCurrentSelectedColor("default");
            setSelectBackgroundColor(currentMode === "dark" ? "#202124" : "white");
          }}
        >
          <button>
            <PiDropSlash className="defaultBackgroundlogo" />
          </button>
        </div>

        <div className={`${currentSelectedColor === "coral" && "activateThisColor"}`}
          onClick={() => {
            setCurrentSelectedColor("coral");
            setSelectBackgroundColor("rgb(119 23 46)");
          }}
        >
          <button style={{ backgroundColor: "rgb(119 23 46)" }}>
            {/* coral */}
          </button>
        </div>

        <div className={`${currentSelectedColor === "peach" && "activateThisColor"}`}
          onClick={() => {
            setCurrentSelectedColor("peach");
            setSelectBackgroundColor("rgb(105 43 23)");
          }}
        >
          <button style={{ backgroundColor: "rgb(105 43 23)" }}>
            {/* peach */}
          </button>
        </div>

        <div className={`${currentSelectedColor === "sand" && "activateThisColor"}`}
          onClick={() => {
            setCurrentSelectedColor("sand");
            setSelectBackgroundColor("rgb(124 74 3)");
          }}
        >
          <button style={{ backgroundColor: "rgb(124 74 3)" }}>
            {/* sand */}
          </button>
        </div>

        <div className={`${currentSelectedColor === "mint" && "activateThisColor"}`}
          onClick={() => {
            setCurrentSelectedColor("mint");
            setSelectBackgroundColor("rgb(38 77 59)");
          }}
        >
          <button style={{ backgroundColor: "rgb(38 77 59)" }}>
            {/* mint */}
          </button>
        </div>

        <div className={`${currentSelectedColor === "sage" && "activateThisColor"}`}
          onClick={() => {
            setCurrentSelectedColor("sage");
            setSelectBackgroundColor("rgb(12 98 93)");
          }}
        >
          <button style={{ backgroundColor: "rgb(12 98 93)" }}>
            {/* sage */}
          </button>
        </div>

        <div className={`${currentSelectedColor === "fog" && "activateThisColor"}`}
          onClick={() => {
            setCurrentSelectedColor("fog");
            setSelectBackgroundColor("rgb(37 99 119)");
          }}
        >
          <button style={{ backgroundColor: "rgb(37 99 119)" }}>
            {/* fog */}
          </button>
        </div>

        <div className={`${currentSelectedColor === "strom" && "activateThisColor"}`}
          onClick={() => {
            setCurrentSelectedColor("strom");
            setSelectBackgroundColor("rgb(40 66 85)");
          }}
        >
          <button style={{ backgroundColor: "rgb(40 66 85)" }}>
            {/* storm */}
          </button>
        </div>

        <div className={`${currentSelectedColor === "dusk" && "activateThisColor"}`}
          onClick={() => {
            setCurrentSelectedColor("dusk");
            setSelectBackgroundColor("rgb(71 46 91)");
          }}
        >
          <button style={{ backgroundColor: "rgb(71 46 91)" }}>
            {/* dusk */}
          </button>
        </div>

        <div className={`${currentSelectedColor === "blossom" && "activateThisColor"}`}
          onClick={() => {
            setCurrentSelectedColor("blossom");
            setSelectBackgroundColor("rgb(108 57 79)");
          }}
        >
          <button style={{ backgroundColor: "rgb(108 57 79)" }}>
            {/* blossom */}
          </button>
        </div>

        <div className={`${currentSelectedColor === "clay" && "activateThisColor"}`}
          onClick={() => {
            setCurrentSelectedColor("clay");
            setSelectBackgroundColor("rgb(75 68 58)");
          }}>
          <button style={{ backgroundColor: "rgb(75 68 58)" }}>
            {/* clay */}
          </button>
        </div>

        <div className={`${currentSelectedColor === "chalk" && "activateThisColor"}`}
          onClick={() => {
            setCurrentSelectedColor("chalk");
            setSelectBackgroundColor("rgb(35 36 39)");
          }
          }>
          <button style={{ backgroundColor: "rgb(35 36 39)" }}>
            {/* chalk */}
          </button>
        </div>

      </div>
    </>
  )
}
export default NotesAccordianBackGround;
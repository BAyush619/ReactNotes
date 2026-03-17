import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegNoteSticky } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { CiGrid2H } from "react-icons/ci";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";

import "../styles/Header.css"
import useTheme from "../customHook/UseTheme";


function Header({ toggleSideBar }) {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div className="headerWrapper">
        <div className="leftbarWrapper">
          <div className="hamburger" onClick={() => toggleSideBar()}>
            <RxHamburgerMenu style={{ fontSize: "1.5rem", cursor: "pointer" }} />
            <span className="tooltip">Main Menu</span>
          </div>

          <div className="brand">
            <FaRegNoteSticky style={{ cursor: "pointer", marginRight: "10px", fontSize: "2.5rem" }} />
            <span className="tooltip-ReactNotes">React Notes</span>
            <div className="brandHeading">ReactNotes</div>
          </div>
        </div>

        <div className="search-bar">
          <div className="search-BarWrapper">
            <div className="searchIcon">
              <FaSearch className="MysearchIcon" />
            </div>

            <input type="text" className="inputBar" placeholder="Search" />
          </div>
        </div>
        <div className="action-bar">
          <div className="view">
            <CiGrid2H className="gridIcon" />
            <span className="tooltip-ListView">List View</span>
          </div>
          <div className="darklightview" onClick={toggleTheme}>

            {
              theme === "light" ? <FiSun className="modeIcon" /> : <FiMoon className="modeIcon" />
            }
            <span className="tooltip-mode">Mode</span>

          </div>
        </div>
      </div>
    </>
  )
}
export default Header;
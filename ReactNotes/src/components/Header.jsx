import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegNoteSticky } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { CiGrid2H } from "react-icons/ci";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";

import "../styles/Header.css"


function Header() {
  return (
    <>
      <div className="headerWrapper">
        <div className="leftbarWrapper">
          <div className="hamburger"><RxHamburgerMenu style={{ fontSize: "2.5rem", marginLeft: "15px", cursor: "pointer" }} /></div>

          <div className="brand">
            <FaRegNoteSticky style={{ marginRight: "10px", fontSize: "2.5rem", color: "yellow" }} />
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
          </div>
          <div className="darklightview">
            <FiMoon className="modeIcon" />
            {/* <FiSun className="modeIcon" /> */}

          </div>
        </div>
      </div>
    </>
  )
}
export default Header;
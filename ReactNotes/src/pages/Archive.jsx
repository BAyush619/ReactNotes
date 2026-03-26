import { useOutletContext } from "react-router-dom";
import ArchiveNotesCard from "../components/ArchiveNotesCard";
import { IoArchiveOutline } from "react-icons/io5";
import "../styles/pagesStyle/Archive.css"

function Archive() {
  const { archivedNotes, setArchivedNotes, setTakeInputData } = useOutletContext();
  return (
    <>
      {
        archivedNotes.length === 0
        &&
        <div className="showEmptyArchiveWrapper">
          <div className="archiveLogoContainer">
            <IoArchiveOutline />
          </div>
          <div className="messageContainer">
            Your archived notes appear here
          </div>
        </div>
      }
      <div>
        {

          archivedNotes.map((archiveItem) => (
            <ArchiveNotesCard archiveItem={archiveItem}
              setArchivedNotes={setArchivedNotes}
              archivedNotes={archivedNotes}
              setTakeInputData={setTakeInputData}
            ></ArchiveNotesCard>
          ))
        }
      </div>
    </>
  )
}
export default Archive;
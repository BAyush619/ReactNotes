import "../styles/ArchiveNotesCard.css"
import { LuArchiveRestore } from "react-icons/lu";

function ArchiveNotesCard({ archiveItem, setArchivedNotes, archivedNotes, setTakeInputData }) {

  function handleUnArchiveNotes() {
    setArchivedNotes(archivedNotes.filter((note) => note.id !== archiveItem.id))
    setTakeInputData((prev) => [...prev, archiveItem])
  }

  return (
    <>
      <div className="archiveNotesWrapper">
        <div className="archiveNotesTitle">
          {archiveItem.title}
        </div>
        <div className="archiveNotesDescription">
          {archiveItem.description}
        </div>

        <div className="archiveActionWrapper">
          <div className="unarchive" onClick={() => handleUnArchiveNotes()}>
            <LuArchiveRestore />
            <span className="unarchiveTool-tip">Unarchive</span>
          </div>
        </div>

      </div>
    </>
  )
}
export default ArchiveNotesCard;
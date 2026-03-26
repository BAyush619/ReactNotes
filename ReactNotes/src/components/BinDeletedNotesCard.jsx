import "../styles/BinDeletedNotesCard.css"
import { MdDeleteForever } from "react-icons/md";
import { FaTrashRestore } from "react-icons/fa";

function BinDeletedNotesCard({ deletedNotesArrItem, setDeletedNotesArr, deletedNotesArr, takeInputData, setTakeInputData }) {
  function handleRemoveForever() {
    setDeletedNotesArr(deletedNotesArr.filter((note) => note.id !== deletedNotesArrItem.id))
  }

  function handleRestreNote() {
    setTakeInputData((prev) => [...prev, deletedNotesArrItem])
    setDeletedNotesArr(deletedNotesArr.filter((note) => note.id !== deletedNotesArrItem.id))
  }

  return (
    <>
      <div className="deletedNotesWrapper">
        <div className="deletedNotesTitle">
          {deletedNotesArrItem.title}
        </div>
        <div className="deletedNotesDescription">
          {deletedNotesArrItem.description}
        </div>

        <div className="BinActionWrapper">
          <div className="deleteForever" onClick={() => handleRemoveForever()}>
            <MdDeleteForever />

            <span className="deleteforever-tool-tip">Delete forever</span>
          </div>
          <div className="restoreNotes" onClick={() => handleRestreNote()}>
            <FaTrashRestore />

            <span className="restore-tool-tip">Restore</span>
          </div>
        </div>

      </div>
    </>
  )
}
export default BinDeletedNotesCard;
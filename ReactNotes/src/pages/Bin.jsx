import { useOutletContext } from "react-router-dom";
import BinDeletedNotesCard from "../components/BinDeletedNotesCard";
import { RiDeleteBin5Line } from "react-icons/ri";
import "../styles/pagesStyle/Bin.css"

function Bin() {
  const { deletedNotesArr, setDeletedNotesArr, takeInputData, setTakeInputData } = useOutletContext();



  return (
    <>
      {
        deletedNotesArr.length === 0 &&
        <div className="showEmptyBinWrapper">
          <div className="binLogoContainer">
            <RiDeleteBin5Line />
          </div>
          <div className="binMessageContainer">
            No notes in Recycle Bin
          </div>
        </div>
      }
      <div className="BinWrapper">
        {
          deletedNotesArr.map((deletedNotesArrItem) => (
            <BinDeletedNotesCard
              deletedNotesArrItem={deletedNotesArrItem}
              deletedNotesArr={deletedNotesArr}
              setDeletedNotesArr={setDeletedNotesArr}
              takeInputData={takeInputData}
              setTakeInputData={setTakeInputData}
            ></BinDeletedNotesCard>
          ))
        }

      </div>
    </>
  )
}
export default Bin;
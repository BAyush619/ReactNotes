import { useOutletContext } from "react-router-dom";
import BinDeletedNotesCard from "../components/BinDeletedNotesCard";
import "../styles/pagesStyle/Bin.css"
function Bin() {
  const { deletedNotesArr, setDeletedNotesArr, takeInputData, setTakeInputData } = useOutletContext();



  return (
    <>
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
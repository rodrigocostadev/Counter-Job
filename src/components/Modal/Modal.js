import { useContext } from "react"
import ListLaps from "../ListLaps"
import "./Modal.css"
import AppContext from "../../Context/AppContext"

function Modal(){

    const {setModalOpen} = useContext(AppContext)

    const closeProject = () => {
        setModalOpen(false)
    }

    console.log("clicou")
    return(
        <div className="Modal" >
            <ListLaps></ListLaps>
            {/* <p>ola</p> */}
            <button onClick={closeProject} className="close" >close</button>
        </div>
    )
}

export default Modal
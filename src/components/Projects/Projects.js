import React, {useContext, useState} from "react";
// import ListLaps from "../ListLaps";
import "./Projects.css"
import AppContext from "../../Context/AppContext";
// import { RiDeleteBin5Line } from 'react-icons/ri'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Modal from "../Modal/Modal";


function Projects (){

    // const {datePlay,secondsResult} = useContext(AppContext)

    const {componentProject, 
        setComponentProject, 
        modalOpen, setModalOpen, 
        totalSeconds,
        displaySeconds,
        seconds,
        displayMinutes,
        minutes,
        displayHours,
        hours, } = useContext(AppContext)


    const openProject = () => {
        setModalOpen(true)
    }
    

    let indice = 0
    // let indice2 = 0
    // let indiceClass = 0

    // let maiorValor = Math.max.apply(null, secondsResult );
    // let indiceMaiorValor = secondsResult.indexOf(maiorValor)   

    // let menorValor = Math.min.apply(null, secondsResult );
    // let indiceMenorValor = secondsResult.indexOf(menorValor)

    // function openProject(){

    //     console.log("clicou")
    //     return(
    //         <div className="openProject" >
    //             <ListLaps></ListLaps>
    //         </div>
    //     )
    // }

    function handleRemoveProject(){
        const updateProjects = componentProject.filter((item) => (item.legth + 1) != item.id )

        setComponentProject(updateProjects)
        
    }

    // function handleRemoveProject(idToRemove) {
    //     const updatedProjects = componentProject.filter((item) => item.id !== idToRemove);
    //     setComponentProject(updatedProjects);
    //   }

    return(
        
        <div>
        <ul>

            {componentProject.length > 0? (componentProject.map( item =>
                <li key={item.id++} id= {indice++} className={ "darkred" } >
                    <input type="radio" name="projeto"></input>
                    <div onClick={openProject} className="infos" >  
                        <div className="infos2"  >
                            <p>{item.client}</p>
                            <p>{item.project} </p>                         
                        </div>                    
                        <div className="infos3">
                            {/* <p> horas: 20:00:00 </p> <p> Custo : R$ 5000,00</p> */}
                            {/* <input type="radio" name= "opção"></input> */}
                            <p> horas: {displayHours}{hours} : {displayMinutes}{minutes} : {displaySeconds}{seconds}   </p> 
                            <p> Valor Hora : R$ {item.hourlyRate}</p>                            
                        </div>
                        <div className="infos4">
                            <p> Custo Atual: R$ {((item.hourlyRate / 3600) * totalSeconds).toFixed(2)}  </p>
                            <p> total: {totalSeconds}</p>
                            {/* <p> Custo Atual: R$ {((item.hourlyRate / 3600) * totalSeconds[item.id]).toFixed(2)}  </p>
                            <p> total: {totalSeconds[item.id]}</p> */}
                        </div>
                    </div>                    
                    <button onClick={handleRemoveProject} type="button"  className="delete-button "> <AiOutlineCloseCircle /> </button>
                </li>
                )) : ( <li>
                    lista de datas vazia
                </li>)
            }
            
        </ul>

        {/* o componente Modal só será renderizado se isModalOpen for true */}
        {modalOpen && <Modal />}

        </div>
        
    )
}

export default Projects






    // reutilizar posteriormente
    // return(
        
    //     <ul>

    //         {datePlay.length > 0? (datePlay.map( item =>
    //             <li key={item.id} id= {indice++} className={ (indiceClass = indice - 1) === indiceMaiorValor? "red" : indiceClass === indiceMenorValor? "green" : "darkred" } >
    //                 {indice} ---  {item} <button  className="delete">del</button>
    //             </li>
    //             )) : ( <li>
    //                 lista de datas vazia
    //             </li>)
    //         }
            
    //     </ul>
        
    // )
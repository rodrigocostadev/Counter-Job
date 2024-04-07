import React, { useState, useContext } from "react";
import "./Box.css"
import AppContext from "../../Context/AppContext";

function Box (){

    // const [ projectName, setProjectName ] = useState("")
    // const [ projectClient, setProjectClient ] = useState("")
    // const [ hourlyRate, setHourlyRate ] = useState("")

    // const objectHandleSubmit = {
    //     project: projectName,
    //     client: projectClient,
    //     hourlyrate: hourlyRate,
    //     id: 0
    // }

    const { componentProject, 
        setComponentProject, 
        objectHandleSubmit, 
        projectName, 
        setProjectName ,
        projectClient, 
        setProjectClient,
        hourlyRate,
        setHourlyRate,
        setTotalSeconds
        
        } = useContext(AppContext)

    function handleSubmit(event){

        event.preventDefault()

        // const objectHandleSubmit = {
        //     project: projectName,
        //     client: projectClient,
        //     hourlyrate: hourlyRate
        // }

        setComponentProject([ ... componentProject, objectHandleSubmit])
        // setComponentProject("ola")
        // setComponentProject((prevComponentProject) => [...prevComponentProject, objectHandleSubmit])
        setProjectName("")
        setProjectClient("")
        setHourlyRate("")
        // setTotalSeconds(0)
        

        console.log(objectHandleSubmit)
        console.log(componentProject)
    }

    // return(
    //     <div>
    //         <p>Digite o nome do projeto, nome do cliente ou empresa e valor hora a ser cobrado </p>
    //         <input placeholder="Projeto" value={projectName} ></input>
    //         <input placeholder="Cliente" value={projectClient}></input>
    //         <input type="number" placeholder="Valor Hora" value={hourlyRate}></input>
    //         <button type="submit" className="submit" >Adicionar</button>
    //     </div>
        
    // )

    return(
        <form onSubmit={handleSubmit}>
            <p>Digite o nome do projeto, nome do cliente ou empresa e valor hora a ser cobrado </p>

            <input 
                type="text" 
                placeholder="Cliente" 
                value={projectClient}
                onChange = { ({target}) => setProjectClient(target.value)}></input>
                
            <input 
                type="text" 
                placeholder="Projeto" 
                value={projectName} 
                onChange = { ({target}) => setProjectName(target.value)}></input>                
            
            <input 
                type="number" 
                placeholder="R$ Valor Hora" 
                value={hourlyRate}
                onChange = { ({target}) => setHourlyRate(target.value)}></input>
            <button 
                type="submit" 
                className="submit" >Adicionar</button>
        </form >
        
    )
}

export default Box
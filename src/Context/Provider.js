import React, { useState } from "react";
import AppContext from "./AppContext";
import propTypes from "prop-types";

function Provider ({children}){

    const [displaySeconds, setDisplaySeconds] = useState(0)
    const [seconds, setSeconds] = useState(0)

    const [displayMinutes, setDisplayMinutes] = useState(0)
    const [minutes, setMinutes] = useState(0)

    const [displayHours, setDisplayHours] = useState(0)
    const [hours, setHours] = useState(0)

    const [countLapF2, setCountLapF2] = useState([])
    const [ secondsResult, setSecondsResult] = useState([])
    const [ datePlay, setDatePlay] = useState([])
    const [componentProject, setComponentProject] = useState([])
    const [modalOpen, setModalOpen] = useState(false)
    const [ projectName, setProjectName ] = useState("")
    const [ projectClient, setProjectClient ] = useState("")
    const [ hourlyRate, setHourlyRate ] = useState("")
    const [totalSeconds, setTotalSeconds] = useState(0)
    // const [totalSeconds, setTotalSeconds] = useState({})

    const objectHandleSubmit = {
        project: projectName,
        client: projectClient,
        hourlyRate: hourlyRate,
        id: 0,
        // soma: 0,
        soma: totalSeconds,
        // soma: somaTeste,
    }

    const value = {
        displaySeconds,
        setDisplaySeconds,
        seconds,
        setSeconds,
        displayMinutes,
        setDisplayMinutes,
        minutes,
        setMinutes,
        displayHours,
        setDisplayHours,
        hours,
        setHours,
        countLapF2,
        setCountLapF2,
        secondsResult,
        setSecondsResult,
        datePlay,
        setDatePlay,
        componentProject,
        setComponentProject,
        modalOpen,
        setModalOpen,
        projectName,
        setProjectName,
        projectClient,
        setProjectClient,
        hourlyRate,
        setHourlyRate,
        totalSeconds,
        setTotalSeconds,
        objectHandleSubmit,        
    }    

    // console.log(componentProject)

    return(
        <AppContext.Provider value = {value} >
            {children}
        </AppContext.Provider>
    )
}

export default Provider

Provider.propTypes = {
    children: propTypes.any
}.isRequired






    // const valueObject = {
    //     componentProject,
    //     setComponentProject
    // }

    // return(
    //     <AppContext.Provider value = {value} valueObject = {valueObject} >
    //         {children}
    //     </AppContext.Provider>
    // )


import React, { useContext, useEffect, useState } from "react";
// import ListLaps from "../ListLaps";
import "./Counter.css"
import AppContext from "../../Context/AppContext";

function Counter (){

    // guarda o estado para verdadeiro ou falso o botão play/pause, para rodar função
    const [estatePlay, setEstatePlay] = useState(false)
    //  guarda o estado para mostrar no botão, alternando de play para pause 
    const [valueButton, setValueButton] = useState("Play")

    //pega o intervalo entre play/pause e play/reset "reset que roda a função pause"
    const [intervalo, setIntervalo] = useState()

    //calcula o intervalo de volta Lap
    // const[miliSecondsLap, setMillisecondsLap] = useState(0)

    //calcula o intervalo de volta Lap
    const[secondsLap, setSecondsLap] = useState(0)

    const[lapF2, setLapF2] = useState([])

    // const [totalSeconds, setTotalSeconds] = useState(0)

     //Mostra o tempo de volta calculado
    // const [countLapF2, setCountLapF2] =useState([])
    // const {countLapF2, setCountLapF2} = useContext(AppContext)

    //Guarda o valor da volta em MS para calcular a maior e menor volta no arquivo listLap.js
    // const [ msResult, setMsResult] = useState([])
    // const [ secondsResult, setSecondsResult] = useState([])
    const  {
        secondsResult, 
        setSecondsResult,
        countLapF2, 
        setCountLapF2,
        datePlay,
        setDatePlay,
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
        objectHandleSubmit,
        // totalSeconds,
        setTotalSeconds
        } = useContext(AppContext)


    useEffect(() => {
        timerFunction()

        if ( seconds != 0) {
            // setTotalSeconds((prevTotalSeconds) => prevTotalSeconds + 1)
            setTotalSeconds((prevTotalSeconds) => prevTotalSeconds + 1)
        }
        
    },[seconds])

    // console.log(seconds)
    // console.log(totalSeconds)


    function timerFunction(){   
        
        // Mili Seconds
        // if (miliSeconds >= 10){
        //     setDisplayMiliSeconds("")
        // }else if(miliSeconds < 10){
        //     setDisplayMiliSeconds("0")
        // }

        // if (miliSeconds === 100){
        //     setDisplayMiliSeconds(0)
        //     setMIliSeconds(0)
        //     setSeconds((prevSeconds) => prevSeconds + 1)
        //     // setMIliSeconds((prevMinutes) => prevMinutes + 1  )
        //     setDisplaySeconds(0)     
        // }
        
        //Seconds
        if (seconds >= 10){
            setDisplaySeconds("")
        }else if(seconds < 10){
            setDisplaySeconds("0")
        }
        if (seconds === 60){
            setSeconds(0)
            setMinutes((prevMinutes) => prevMinutes + 1  )
            setDisplaySeconds(0)     
        }

        //Minutes
        if (minutes === 10){
            setDisplayMinutes("")
        }
        if (minutes === 60){
            setMinutes(0)
            setHours((prevHours) => prevHours + 1  )
            setDisplayMinutes(0)
        }    

        //Hours
        if (hours === 10){
            setDisplayHours("")
        }    
    }

    function increment(projectId){
        setSeconds((prevSeconds) => prevSeconds + 1  )
        setSecondsLap((prevSeconds) => prevSeconds + 1)
        // setMIliSeconds((prevMiliSeconds) => prevMiliSeconds + 1  )
        // setMillisecondsLap((prevMiliSecondsLap) => prevMiliSecondsLap + 1  )

        // if ( seconds != 0) {
        //     setTotalSeconds((prevTotalSeconds) => prevTotalSeconds + 1)
        //     // setTotalSeconds((prevTotalSeconds) => ({... prevTotalSeconds, [projectId]: (prevTotalSeconds[projectId] || 0 ) + 1, }))
        // }
    }




    const [prevDate, setPrevDate] = useState(0)
    
    // let dateNow = new Date("1/1/2025")
    // let dateNow = new Date()

    function play(){          

        // objectHandleSubmit.soma = totalSeconds
        
        // let dateNow = new Date("1/1/1970")
        let dateNow = new Date()
        // let prevDate = Date.parse(dateNow)
        // prevDate = Date.parse(dateNow)
        // setPrevDate(Math.floor(Date.parse(dateNow)))
        // console.log(prevDate)

        // prevDate = Date.parse(dateNow)
        // let prevDate2 = Date.parse(dateNow)

        let initHour = dateNow.getHours()
        let initMinute = dateNow.getMinutes()
        let initSecond = dateNow.getSeconds()
        let initMS = dateNow.getMilliseconds()
        // inicio = initSecond
        // console.log(initSecond)

        setPrevDate(Date.parse(dateNow) + initMS)
        // setPrevDate(Math.round(Date.parse(dateNow)  ))
        // setPrevDate(Math.ceil(Date.parse(dateNow)  ))
        // setPrevDate(Math.floor(Date.parse(dateNow)))
        // setPrevDate(Date.parse(dateNow)  )
        
        // console.log(initSecond * 1000)
        // console.log(initMS)

        console.log(prevDate)

        let initDay = dateNow.getDate()
        let initMonth = dateNow.getMonth()
        let initYear = dateNow.getFullYear()

        console.log(initHour + " horas " + initMinute +  " minutos " + initSecond + " segundos " + initMS + " MS" )
        console.log( " dia " + initDay + " mes " + (initMonth + 1 ) + " ano " + initYear  )

        let newDate = `${initDay}/${initMonth}/${initYear}`


        // Se datePlay for null, undefined, 0, uma string vazia '', NaN, ou simplesmente false, o 
        // bloco de código dentro do if será executado.
        // RESUMINDO SE NÃO EXISTE ALGUMA DATA IGUAL A NOVA DATA, ENTÃO O CÓDIGO DENTRO DO IF SERA EXECUTADO.
        // O ! na frente da verificação if inverte a lógica. Em vez de perguntar "Existe alguma data igual à nova data?", 
        // ele pergunta "Não existe alguma data igual à nova data?". 
        if(!datePlay.some(date => date === newDate)){
            setDatePlay([...datePlay,newDate])
        }
        
        console.log(datePlay)

        // Elimina a execução em paralelo de outras funções contadoras, assim DEIXANDO DE ACELERAR O CONTADOR
        // Se intervalo não está definido (for null, undefined, 0, uma string vazia '', NaN, ou simplesmente false) ou for falso
        // executará o bloco
        if(!intervalo){
            setIntervalo(setInterval(() => {
                increment()
                timerFunction()
            }, 10))   
        }
    }

    // const [nextDate, setNextDate] = useState(0)


    function pause(){

        let dateNow = new Date()
        // console.log (prevDate)
        

        let endHour = dateNow.getHours()
        let endMinute = dateNow.getMinutes()
        let endSecond = dateNow.getSeconds()
        let endMS = dateNow.getMilliseconds()

        let endDay = dateNow.getDate()
        let endMonth = dateNow.getMonth()
        let endYear = dateNow.getFullYear()

        console.log(endHour + " horas " + endMinute +  " minutos " + endSecond + " segundos" + endMS + "MS" )
        console.log( " dia " + endDay + " mes " + (endMonth + 1 ) + " ano " + endYear  )

        console.log(endSecond)

        // let nextDate = Date.parse(dateNow) + endMS
        // let nextDate = Math.round(Date.parse(dateNow) )
        // let nextDate = Math.ceil(Date.parse(dateNow) )
        // let nextDate = Math.floor(Date.parse(dateNow) )
        // let nextDate = Date.parse(dateNow) 
        let nextDate = Date.parse(dateNow) + endMS 
        // setNextDate(Date.parse(dateNow))
        console.log(nextDate)
        
        // Elimina a execução em paralelo de outras funções contadoras, assim DEIXANDO DE ACELERAR O CONTADOR
        if(intervalo){
            clearInterval(intervalo)
            setIntervalo()
        }

        console.log(objectHandleSubmit)
        // console.log(totalSeconds)

        // mostra o tempo ao dar pause
        lapFunction2()

        // recebe o tempo em ms do acionamento de pause
        countInterval(nextDate)
        // subtract()
    }


    const ButtonPlayPause = () => {        
        
            if(estatePlay === false ){
                setEstatePlay(true)
                play()
                // console.log("play")
                setValueButton("Pause")
            }else if ( estatePlay === true){
                setEstatePlay(false)
                pause()
                lapFunction2()
                // console.log("pause")
                setValueButton(" Play ")
            }
        
    }

    function reset(){
        pause()
        // setMIliSeconds(0)
        // setDisplayMiliSeconds(0)
        setEstatePlay(false)
        setValueButton(" Play ")
        setSeconds(0)
        setDisplaySeconds(0)
        setMinutes(0)
        setDisplayMinutes(0)
        setHours(0)
        setDisplayHours(0)
        // setIntervalo()
        timerFunction()
        // setLap([])
        setCountLapF2([])
        // setMillisecondsLap(0)
        setSecondsLap(0)
        setLapF2([])
        // setMsResult([])
        setSecondsResult([])
    }

    //  function testFunction(){
    //     let dateNow = new Date()
    //     console.log(dateNow)

    //     let hora = dateNow.getHours()
    //     let minutos = dateNow.getMinutes()
    //     let segundos = dateNow.getSeconds()

    //     let dia = dateNow.getDate()
    //     let mes = dateNow.getMonth()
    //     let ano = dateNow.getFullYear()

    //     // da a data de hoje em MS
    //     console.log(Date.parse(dateNow))

    //     console.log(hora + " horas " + minutos +  " minutos " + segundos + " segundos" )
    //     console.log( " dia " + dia + " mes " + (mes + 1 ) + " ano " + ano  )
    //  }


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    //    PASSAR ESSA FUNÇÃO PARA LAPFUNCTION     //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const [times, setTimes] = useState([])
    const [soma, setSoma] = useState(0)

    function countInterval(datenext){

        // recebe o tempo em ms do acionamento de play
        console.log(prevDate)

        // recebe o tempo em ms do acionamento de pause
        console.log(datenext)

        // calcula a diferença de tempo de acionamento de play e pause
        let time = Math.floor((datenext-prevDate) / 1000)
        console.log(time)
        setTimes([...times, time])
        console.log(times)

        // let miliSecondsInterval = (String(time).slice(-3) / 1000)
        // console.log(miliSecondsInterval + seconds)

        let secondsInterval = Math.floor(time)
        let minutesInterval = Math.floor(secondsInterval / 60) 
        let hoursInterval = Math.floor(minutesInterval / 60) 
        let secondsIntervalRest = secondsInterval % 60
        console.log(secondsInterval)
        console.log(minutesInterval)
        console.log(hoursInterval)
        console.log(secondsIntervalRest)

        //variaveis responsaveis por ser 0 (0 que fica a frente) se o contador for menor do que 10
        let DisplaySecondsInterval
        let DisplayMinutesInterval
        let DisplayHoursInterval

        //Seconds
        if(secondsIntervalRest < 10){
            DisplaySecondsInterval = 0
        }else{ DisplaySecondsInterval = ""}

        //Minutes
        if(minutesInterval < 10){
            DisplayMinutesInterval = 0
        }else{ DisplayMinutesInterval = ""}
        
            // laço de repetição para evitar que apareça mais de 60 nos minutos no contador de voltas, 
            // ex: apareceria 2 horas e 67 minutos, com o laço aparece 2 horas e 7 minutos
        // for( let i = 0; i < 60 ; i++){
        //     if(minutesInterval >= 60){
        //         DisplayMinutesInterval = 0
        //         minutesInterval = (minutesInterval - 60)
        //         // console.log("laço")
        //     }
        // }

        //Hours
        if(hoursInterval < 10){
            DisplayHoursInterval = 0
        }else{ DisplayHoursInterval = ""}

        let finalResultInterval = "" + DisplayHoursInterval + hoursInterval + ":" + DisplayMinutesInterval + minutesInterval + ":" + DisplaySecondsInterval + secondsIntervalRest 
        console.log(finalResultInterval)






        // soma todos os valores do array times
        // const soma = times.reduce((accumulator , item) =>  accumulator + item, 0)
        setSoma (times.reduce((accumulator , item) =>  accumulator + item, 0))
        console.log(soma)

        let secondsSoma = Math.floor(soma)
        let minutesSoma = Math.floor(secondsSoma / 60) 
        let hoursSoma = Math.floor(minutesSoma / 60) 
        let secondsSomaRest = secondsSoma % 60

        //variaveis responsaveis por ser 0 (0 que fica a frente) se o contador for menor do que 10
        let DisplaySecondsSoma
        let DisplayMinutesSoma
        let DisplayHoursSoma

        //Seconds
        if(secondsIntervalRest < 10){
            DisplaySecondsSoma = 0
        }else{ DisplaySecondsSoma = ""}

        //Minutes
        if(minutesInterval < 10){
            DisplayMinutesSoma = 0
        }else{ DisplayMinutesSoma = ""}
        
            // laço de repetição para evitar que apareça mais de 60 nos minutos no contador de voltas, 
            // ex: apareceria 2 horas e 67 minutos, com o laço aparece 2 horas e 7 minutos
        // for( let i = 0; i < 60 ; i++){
        //     if(DisplayMinutesSoma >= 60){
        //         DisplayMinutesSoma = 0
        //         minutesSoma = (minutesSoma - 60)
        //         // console.log("laço")
        //     }
        // }

        //Hours
        if(hoursSoma < 10){
            DisplayHoursSoma = 0
        }else{ DisplayHoursSoma = ""}

        let finalResultSoma = "" + DisplayHoursSoma + hoursSoma + ":" + DisplayMinutesSoma + minutesSoma + ":" + DisplaySecondsSoma + secondsSomaRest 
        console.log(finalResultSoma)

        // 1 seg = 1000ms
        // 1 min = 60.000ms
        // 1 hor = 3.600.000.000
        // 1 dia  = 86.400.000.000
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////// 2 TENTATIVA DE CALCULAR VOLTA COM MILISECONDSLAP /////////////////////////////////////////////////

    // //Mostra o tempo de volta calculado
    // // const [countLapF2, setCountLapF2] =useState([])
    // const [countLapF2, setCountLapF2] = useContext(AppContext)

    // //Guarda o valor da volta em MS para calcular a maior e menor volta no arquivo listLap.js
    // // const [ msResult, setMsResult] = useState([])
    // // const [ secondsResult, setSecondsResult] = useState([])
    // const [ secondsResult, setSecondsResult] = useContext(AppContext)

    // let NEWLAPF2 = miliSecondsLap 

    /////////////////////////////////////////// DESCOMENTAR DAQUI PARA BAIXO /////////////////////////////////////////////////////////////////////
    let NEWLAPF2 = secondsLap


    function lapFunction2(){        

        setLapF2([...lapF2,NEWLAPF2])
        // console.log(lapF2)

        //metodo pop pega a ultima string do array 
        let lastStringLapF2 = lapF2.pop()  

        if(lastStringLapF2 === undefined){
            lastStringLapF2 = 0
        }         

        // let finalMsResult = miliSecondsLap - lastStringLapF2 
        let finalSecondResult = secondsLap - lastStringLapF2       

        // console.log(lastStringLapF2)
        // console.log(miliSecondsLap)
        // console.log(lapF2)

        // tive que transformar numero "finalMsResult"( intervalo de volta, ou milisecondsLap )em string 
        // para pegar os 2 ultimos digitos com o metodo slice 
        // let miliSecondsF2 = String(finalMsResult).slice(-2)
        // let secondsF2 = Math.floor(finalMsResult / 100)
        // let minutesF2 = Math.floor(secondsF2 / 60)
        // let hoursF2 = Math.floor(minutesF2 / 60)
        // let secondsRest = secondsF2 % 60

        let secondsF2 = Math.floor(finalSecondResult)
        let minutesF2 = Math.floor(secondsF2 / 60)
        let hoursF2 = Math.floor(minutesF2 / 60)
        let secondsRest = secondsF2 % 60

        //variaveis responsaveis por ser 0 (0 que fica a frente) se o contador for menor do que 10
        // let DisplayMiliSecondsF2
        let DisplaySecondsF2
        let DisplayMinutesF2
        let DisplayHoursF2

        //Miliseconds
        // if(miliSecondsF2 === 0){
        //     DisplayMiliSecondsF2 = 0
        // }else{ DisplayMiliSecondsF2 = ""}

        //Seconds
        if(secondsRest < 10){
            DisplaySecondsF2 = 0
        }else{ DisplaySecondsF2 = ""}

        //Minutes
        if(minutesF2 < 10){
            DisplayMinutesF2 = 0
        }else{ DisplayMinutesF2 = ""}
        
            // laço de repetição para evitar que apareça mais de 60 nos minutos no contador de voltas, 
            // ex: apareceria 2 horas e 67 minutos, com o laço aparece 2 horas e 7 minutos
        for( let i = 0; i < 60 ; i++){
            if(minutesF2 >= 60){
                DisplayMinutesF2 = 0
                minutesF2 = (minutesF2 - 60)
                // console.log("laço")
            }
        }

        //Hours
        if(hoursF2 < 10){
            DisplayHoursF2 = 0
        }else{ DisplayHoursF2 = ""}

        let finalResult = "" + DisplayHoursF2 + hoursF2 + ":" + DisplayMinutesF2 + minutesF2 + ":" + DisplaySecondsF2 + secondsRest 
        // + "," + DisplayMiliSecondsF2  + miliSecondsF2

        //Guarda o valor da volta em MS para calcular a maior e menor volta no arquivo listLap.js
        // setMsResult([...msResult, finalMsResult])
        setSecondsResult([...secondsResult, finalSecondResult])
        // console.log(msResult)
        
        // setCountLapF2([...countLapF2, finalMsResult]) 
        setCountLapF2([...countLapF2, finalResult]) 

        console.log(countLapF2)
        // console.log(finalMsResult)
    }
    
    /////////////////////////////////////////// DESCOMENTAR DAQUI PARA CIMA /////////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return(
        <div className="display" >
            <h1>{displayHours}{hours} : {displayMinutes}{minutes} : {displaySeconds}{seconds} 
            {/* ,{displayMiliSeconds}{miliSeconds} */}
            </h1>
            <div className="container">
                {/* <button onClick={testFunction}> Teste </button> */}
                <button onClick={ButtonPlayPause} className="buttonCounter" >{valueButton}</button>
                {/* <button onClick={play}>Play</button> */}
                {/* <button onClick={pause} >Pause</button> */}
                {/* <BotaoPlayPause onClick={alternarEstado}>{estado ==='play' ? 'playT' : 'pauseT'}</BotaoPlayPause> */}
                {/* <button onClick={lapFunction2} className="buttonCounter" > Ok </button> */}
                {/* <button onClick={playPause} >Play</button> */}
                <button onClick={reset} className="buttonCounter" >Reset</button>            
                {/* <button onClick={lapFunction} > Lap </button> */}
                {/* <p>{lap}</p> */}
                {/* <ListLaps lap = {lap}  ></ListLaps> */}
                {/* <ListLaps countLap = {countLap}  ></ListLaps> */}
            </div>            
            {/* <ListLaps countLapF2 = {countLapF2} msResult = {msResult} ></ListLaps> */}
            {/* <ListLaps countLapF2 = {countLapF2} secondsResult = {secondsResult} ></ListLaps> */}
            {/* <ListLaps ></ListLaps> */}
            {/* <div className="credits" >
                <p>Criado e Desenvolvido por <a target="blank" href="https://linktr.ee/rodrigocostadev">Rodrigo Costa</a></p>
            </div> */}
        </div>
    )
    
}

export default Counter


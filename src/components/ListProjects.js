import React, { useContext } from "react";
import AppContext from "../Context/AppContext";


function ListLaps (){

    const {countLapF2, secondsResult, datePlay} = useContext(AppContext)

    // const {datePlay,secondsResult} = useContext(AppContext)

    // let numberLap = 1
    let indice = 0
    let indiceClass = 0

    let maiorValor = Math.max.apply(null, secondsResult );
    let indiceMaiorValor = secondsResult.indexOf(maiorValor)   

    let menorValor = Math.min.apply(null, secondsResult );
    let indiceMenorValor = secondsResult.indexOf(menorValor)

    // function testFunction(){
        // let dateNow = new Date()
        // console.log(dateNow)

        // let hora = dateNow.getHours()
        // let minutos = dateNow.getMinutes()
        // let segundos = dateNow.getSeconds()

        // let dia = dateNow.getDate()
        // let mes = dateNow.getMonth()
        // let ano = dateNow.getFullYear()

        // da a data de hoje em MS
        // console.log(Date.parse(dateNow))

        // console.log(hora + " horas " + minutos +  " minutos " + segundos + " segundos" )
        // console.log( " dia " + dia + " mes " + (mes + 1 ) + " ano " + ano  )
    //  }

    //  testFunction()

    // console.log(msResult)
    // console.log(maiorValor)
    // console.log(indiceMaiorValor + " Maior")
    // console.log(indiceMenorValor + " Menor")

    // Esse return pega o maior valor e deixa na cor vermelha, e o menor valor deixa na cor verde

    // pega nome do projeto que foi digitado em um um input, adiciona dia mes e ano e coloca no lugar de day

    // return(
    //     <ul>

    //         {countLapF2.map( item =>
    //             <li key={item.id} id= {indice++} className={ (indiceClass = indice - 1) === indiceMaiorValor? "red" : indiceClass === indiceMenorValor? "green" : "darkred" } >
    //                 {datePlay} ---  {item} <button  className="delete">del</button>
    //             </li>
    //             )
    //         }
            
    //     </ul>

    // )

    return(
        <ul>

            {countLapF2.map( item =>
                <li key={item.id} id= {indice++} className={ (indiceClass = indice - 1) === indiceMaiorValor? "red" : indiceClass === indiceMenorValor? "green" : "darkred" } >
                    Dia {datePlay} ---  {item} <button  className="delete">del</button>
                </li>
                )
            }
            
        </ul>

    )


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

    // return(
    //     <ul>
    
    //         {datePlay.map( item =>
    //             <li key={item.id} id= {indice++} className={ (indiceClass = indice - 1) === indiceMaiorValor? "red" : indiceClass === indiceMenorValor? "green" : "darkred" } >
    //                 Day{indice} ---  {item} <button  className="delete">del</button>
    //             </li>
    //             )
    //         }
            
    //     </ul>
    
    // )
}



export default ListLaps
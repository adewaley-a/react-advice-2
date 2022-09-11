import React, { useEffect, useState } from "react";
import './advice.css'
import divider from './advice-generator-app-main/images/pattern-divider-mobile.svg'
import die from './advice-generator-app-main/images/icon-dice.svg'
import { useRef} from "react";
const Advice = () => {

    const quote = useRef(null)
    const num = useRef(null)
    const dicebtn = useRef(null)
    
    const [roll, setRoll] = useState(false)
    
    function chang(){
        if(roll==false){setRoll(true)}
        else{setRoll(false)}
    }

       useEffect(() =>{

       
        dicebtn.current.addEventListener('click', getquote)
        

        function getquote(){
           
            fetch("https://api.adviceslip.com/advice")
            .then((response) => {return response.json()})
            .then((response) => {
                num.current.innerHTML = `Advice #${response.slip.id}`
                quote.current.innerHTML =  `&#8220${response.slip.advice}&#8221`
            })
        }

       }, [])

    return(
          

            <div className = "covera">
                <div className="boxa">
                    <div  className="circlea" ><img className= {roll? "dica": "App-logo"}
                     onClick = {()=> setRoll(!roll) }  ref={dicebtn} src={die}/></div>
                    <div ref={num} className="festa">Advice #00wale</div>
                    <div ref={quote} className="maintexta">"Click the die below to view another quote, a new one loads every two seconds"</div>
                    <div className="linea"><img className="lina" src = {divider} /></div>
                    
                </div>
            </div>
     
    
    )
}
export default Advice
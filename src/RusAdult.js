import React, {useState} from "react"
import {rusAdult} from "./Data/rusAdult"

function RusAdult() {

    const [score, setScore] = useState(1)
    const [score2, setScore2] = useState(1)
  
   
  
   return (
     <div>
       <b>
         <div  id="all">
          <h1>Русский язык для взрослых</h1>
        <div id="desc">Вставьте правильное слово в предложение:
          <div><span id="answ"></span> <span id="score"></span></div>
           <div><span id="answ2"></span> <span id="score2"></span></div>
           </div>
           </div>
       </b>
  
       <ol>
       {rusAdult.map((data, key) => {
        function Check(e) {
          if(e.target.value === data.ok){
            document.getElementById(data.id+1).style.display = "none"
            document.getElementById(data.id+2).style.display = "none"
            let answ = '<span style="color:green; font-weight:bold">'+e.target.innerHTML+'</span>'
            let quest = document.getElementById(data.id).innerHTML
            let questChanged = quest.replace(/_*_/i, answ)
            document.getElementById(data.id).innerHTML = questChanged
            document.getElementById("answ").innerHTML = "правильно"
            document.getElementById("answ").style.color = "green"
            setScore(score + 1)
            document.getElementById("score").innerHTML = score
            
          }
          else{
            document.getElementById(data.id+1).style.display = "none"
            document.getElementById(data.id+2).style.display = "none"
            let answ = '<span style="color:red; font-weight:bold">'+e.target.innerHTML+'</span>'
            let quest = document.getElementById(data.id).innerHTML
            let questChanged = quest.replace(/_*_/i, answ)
            document.getElementById(data.id).innerHTML = questChanged
            document.getElementById("answ2").innerHTML = "ошибка"
            document.getElementById("answ2").style.color = "red"
            setScore2(score2 + 1)
            document.getElementById("score2").innerHTML = score2
           
          }
        }
        return(
         <>
          <li className="quest" id={data.id}>{data.quest}</li>
          <div>
          <button onClick={Check} disable="false" value={1} key={key} id={data.id+1}>{data.answer1}</button> 
          <button onClick={Check} disable="false" value={2} key={key} id={data.id+2}>{data.answer2}</button>
          </div>
         </>    
        )
      })}
      </ol> 
       
     </div>
        
   
      )
   
  }
export default RusAdult;  
import React, {useState} from "react"
import {math1} from "./Data/math1"
import {math1_2} from "./Data/math1_2"

function Math1() {

    const [score, setScore] = useState(1)
    const [score2, setScore2] = useState(1)
    const [score3, setScore3] = useState(1)
    const [score4, setScore4] = useState(1)
   
  
   return (
     <div>
       
         <div  id="all">
          <h3>Математика 1 клас</h3>
        <div className="desc">Виріши приклади:
          <div><span id="answ"></span> <span id="score"></span></div>
           <div><span id="answ2"></span> <span id="score2"></span></div>
           </div>
          </div>
  
       <ol>
       {math1.map((data, key) => {
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
            document.getElementById("answ2").innerHTML = "помилка"
            document.getElementById("answ2").style.color = "red"
            setScore2(score2 + 1)
            document.getElementById("score2").innerHTML = score2
           
          }
        }
        return(
         <>
          <li className="quest" id={data.id}>{data.quest}</li>
          <div>
          <button className="butleft" onClick={Check} disable="false" value={1} key={key} id={data.id+1}>{data.answer1}</button> 
          <button onClick={Check} disable="false" value={2} key={key} id={data.id+2}>{data.answer2}</button>
          </div>
         </>    
        )
      })}
      </ol> 
     
      <div  id="all2">
      <div className="desc">Виріши задачі:
        <div><span id="answ3"></span> <span id="score3"></span></div>
        <div><span id="answ4"></span> <span id="score4"></span></div>
      </div>
      </div>
      <ol>
       {math1_2.map((data, key) => {
        function Check(e) {
          if(e.target.value === data.ok){
            document.getElementById(data.id+1).style.display = "none"
            document.getElementById(data.id+2).style.display = "none"
            let answ = '<span style="color:green; font-weight:bold">'+e.target.innerHTML+'</span>'
            let quest = document.getElementById(data.id).innerHTML
            let questChanged = quest.replace(/_*_/i, answ)
            document.getElementById(data.id).innerHTML = questChanged
            document.getElementById("answ3").innerHTML = "правильно"
            document.getElementById("answ3").style.color = "green"
            setScore3(score3 + 1)
            document.getElementById("score3").innerHTML = score3
            
          }
          else{
            document.getElementById(data.id+1).style.display = "none"
            document.getElementById(data.id+2).style.display = "none"
            let answ = '<span style="color:red; font-weight:bold">'+e.target.innerHTML+'</span>'
            let quest = document.getElementById(data.id).innerHTML
            let questChanged = quest.replace(/_*_/i, answ)
            document.getElementById(data.id).innerHTML = questChanged
            document.getElementById("answ4").innerHTML = "помилка"
            document.getElementById("answ4").style.color = "red"
            setScore4(score4 + 1)
            document.getElementById("score4").innerHTML = score4
           
          }
        }
        return(
         <>
          <li className="quest" id={data.id}>{data.quest}</li>
          <div>
          <button className="butleft" onClick={Check} disable="false" value={1} key={key} id={data.id+1}>{data.answer1}</button> 
          <button onClick={Check} disable="false" value={2} key={key} id={data.id+2}>{data.answer2}</button>
          </div>
         </>    
        )
      })}
      </ol> 

     </div>
        
        
   
      )
   
  }
export default Math1;  
import React from 'react'
import './listTodo.css'

export default function ListTodo(props) {
    return (
        <div>
            {props.tabTask.map((el,i)=>(<div>
                <li>
                      <ul className="liste"> 
                      <span className={!el.isToggleOn&&"toggle"}>{el.todo}</span>
            <button className="button" onClick={()=>props.tgl(i)}>{el.isToggleOn?"COMPLETE":"UNDO"}</button>
                      <input type="button"  className="button" value="Delete" onClick={()=>props.deleteClick(i)} />
                      
                     </ul>
                   </li>
            </div>))}
        </div>
    )
}

import React,{useState,useContext} from 'react'
import Data from "./context"
import {Link} from "react-router-dom"

export default function Add() {
    const [text,setText] = useState();
    const globalData = useContext(Data);

    return (
        <div>
           <div className="App">
          <div className="main-body">
            <div className="reminder">
              <h1>Add Todo List</h1>
              <div className="text-reminder">
                  <div className="input-add">
                      <input type="text" value={text} onChange={(e)=> {setText(e.target.value)}}/>
                      <Link to="/">
                      <button className="addbtn" onClick={()=>globalData[1]([...globalData[0],text])}>Add</button>
                      </Link>
                  </div>
              </div> 
            </div>
          </div>
        </div>
        </div>
    )
}

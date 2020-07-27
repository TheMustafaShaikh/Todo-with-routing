import React,{useContext} from 'react';
import './App.css';
import {Link} from "react-router-dom"
import Data from "./context"


export default function Home(){
    const globalData = useContext(Data);
    const Delete = (value) =>{
        globalData[1](globalData[0].filter(element => element!==value))
    }
    return ( 
    
        <div className="App">
          <div className="main-body">
            <div className="reminder">
              <h1>Reminder</h1>
              <div className="text-reminder">
                {globalData[0].map(element =>( 
                <div className="text" key={element}>
                      <p>{element}</p>
                      <button onClick={()=>Delete(element)}>Delete</button>  
                  </div>
                  ))}

                 
              </div>
            </div>
            <div className="addBtn">

            <Link to="add">
                <button className="add">+</button>
            </Link>
            </div>
            
          </div>
        </div>
        
      );
}
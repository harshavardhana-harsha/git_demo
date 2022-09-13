import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'


let Texthere = () =>{
    let [userName, setuserName]= useState('');
    let[text,settext]=useState([])

    useEffect(()=>{
        Entervalue()
      },[])

  let Entervalue = ()=>{
   const harsha =userName
  settext([harsha,...text])
  }
 

    return(
        <React.Fragment>
              <input 
              value={userName}
              onChange={(e)=>{setuserName(e.target.value)}} type='text' />
              <button 
              onClick={Entervalue}
              className='btn btn-primary btn-sm'
              >Enter</button>
              {
                text.map((from)=>{
                   return(
                    <ul key={from}>
                    <li>{from}</li>
                </ul>
                   )
                })
              }
        </React.Fragment>
    )
}
export default Texthere;
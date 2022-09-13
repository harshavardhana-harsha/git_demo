import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Axios from 'axios'

let Searchapi =() =>{
    let [message, setmeassage]= useState('')
    let [errormessage,seterrormessage]= useState('')
    let [text,settext]= useState([])
  
 
useEffect(()=>{
   changeValue()
},[])

//  const changeValue =()=>{
//     let address=`https://api.weyyak.com/v1/en/search?q=${message}`;
//     Axios.get(address).then((Response)=>{
//         console.log(Response.data)
//     }).catch((error)=>{

//     })
// }
let changeValue = () =>{
  const word = message
  settext([word,...text])
}
  
    return (
      <React.Fragment>
        <section className='p-3'>
            <div className='container'>
                <div className='row'>
                    <div className='card'>
                        <div className='card-body d-inline'>
                            <input
                            value={message}
                            onChange={(e)=>{setmeassage(e.target.value)}} type='text'  placeholder='text' />
                            <div className='card-body'>
                            <button
                            onClick={changeValue}
                            className='btn btn-success btn-sm'>Search</button>
                        </div>
                            {
                                text.map((texts)=>{
                                    return(
                                     <tr key={texts}>
                                        <th>{texts}</th>
                                     </tr>
                                    )
                                    
                                })
                            }
                    
                            

                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
      </React.Fragment>
    )
}
export default Searchapi;


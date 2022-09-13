import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Axios from 'axios'

export default class ApiFetch extends Component {
  constructor(props){
    super(props)
    this.state={
        users:[],
        users2:[],
        errormessage:'',
        localnewdata:JSON.parse(localStorage.getItem("range"))

    }
   
  }
  componentDidMount(){
    this.getAllUsers()
 }

  getAllUsers= ()=>{
    let address="https://api.weyyak.com/v1/en/menu/62?cascade=2";
    Axios.get(address).then((responce)=>{
    console.log(responce.data.data)
    localStorage.setItem('range',JSON.stringify(responce.data))
    console.log(JSON.parse(localStorage.getItem("range")))
    this.setState({
        ...this.state,
        users:responce.data.data.playlists[0].content,
        users2:responce.data.data.playlists[1].content,
    })
    }).catch((error)=>{
        this.setState({
            ...this.state,
            errormessage:error
        })

    })
}

  render() {
    console.log(this.state.localnewdata)
    return (
      
            <React.Fragment>
                 <section className='p-3'>
                    <div className='container'>
                      
                        <div className='row'>
                            <div className='col'>
                                <table className='table table-hover text-center table-striped bg-success text-white'>
                                    <thead className='bg-dark'>
                                        <tr>
                                            <th>ID</th>
                                            <th>TITLE</th>
                                            <th>AGE</th>
                                            <th>IMAGE</th>
                                            <th>CAST</th>
                                            <th>TRANSLATED</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                               this.state.users.map((user)=>{
                                                return(
                                                    <tr key={user.id}>
                                                        <td>{user.id}</td>
                                                        <td>{user.title}</td>
                                                        <td>{user.age_rating}</td>
                                                        
                                                        <td>
                                                        <img src={user.imagery.mobile_img} width='50' height='50'/>
                                                        </td>
                                                        <td>{user.cast[1]}</td>
                                                        <td>{user.translated_title}</td>
                                                        
                                                    </tr>
                                                )
                                               })
                                        }
                                         {
                                               this.state.users2.map((user)=>{
                                                return(
                                                    <tr key={user.id}>
                                                        <td>{user.id}</td>
                                                        <td>{user.title}</td>
                                                        <td>{user.age_rating}</td>
                                                        
                                                        <td>
                                                        <img src={user.imagery.mobile_img} width='50' height='50'/>
                                                        </td>
                                                        <td>{user.cast[1]}</td>
                                                        <td>{user.translated_title}</td>
                                                        
                                                    </tr>
                                                )
                                               })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                 </section>
            </React.Fragment>
    )
  }
}

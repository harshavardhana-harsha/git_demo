import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Axios from 'axios'

export default class Apifetch2 extends Component {
  constructor(props){
    super(props)
    this.state={
        users:[],
        users2:[],
        errormessage:''
    }
   
  }
  componentDidMount(){
    this.getAllUsers()
 }

  getAllUsers= ()=>{
    let address="https://api.weyyak.com/v1/en/related?id=232061&q=Drama&size=100";
    Axios.get(address).then((responce)=>{
    console.log(responce.data.data)
    this.setState({
        ...this.state,
        users:responce.data.data,
        users2:responce.data.data
    })
    }).catch((error)=>{
        this.setState({
            ...this.state,
            errormessage:error
        })

    })
}

  render() {
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
                                                        <td>{user.content_type}</td>
                                                        <td>{user.digitalRighttype}</td>
                                                        <td>{user.id}</td>
                                                        
                                                        <td>
                                                        <img src={user.imagery.mobile_img} width='50' height='50'/>
                                                        </td>
                                                        <td>{user.video_id}</td>
                                                        <td>{user.friendly_url}</td>
                                                        
                                                    </tr>
                                                )
                                               })
                                        }
 {
                                               this.state.users2.map((user)=>{
                                                return(
                                                    <tr key={user.id}>
                                                        <td>{user.content_type}</td>
                                                        <td>{user.digitalRighttype}</td>
                                                        <td>{user.id}</td>
                                                        
                                                        <td>
                                                        <img src={user.imagery.mobile_img} width='50' height='50'/>
                                                        </td>
                                                        <td>{user.video_id}</td>
                                                        <td>{user.friendly_url}</td>
                                                        
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

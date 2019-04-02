import React, { Component } from 'react'
import axios from 'axios'
import '../styles/main.scss'


export default class ConfirmationPage extends Component {
    state={
        confirmation:false
    }
  
    componentWillMount(){
        localStorage.getItem('firstName') && this.setState({
            firstName:JSON.parse(localStorage.getItem('firstName'))
        })
    }
    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get('http://localhost:3000/confirmation/'+id)
        .then(({data})=>{
            this.setState({confirmation:data})
        })
    }
  render() {
    const {confirmation} = this.state;
    return (
      <div className="confirmation-page">
        <h3 className="confirmation-title">confirmation message</h3>
        <p className="id">
          <span>confirmation id: </span>{confirmation.id}
        </p>
        <p className="id">
          <span>hotel id: </span>{confirmation.hotelId}
        </p>
        <p className="id">
          <span>room id: </span>{confirmation.roomId}
        </p>
      </div>
    )
  }
}

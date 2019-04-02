import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import User from '../UserUtilities'
import '../styles/main.scss'

 class  Header extends Component {
     state = {
         username:'',
         password:'',
         isLoggedIn: false
     }

     validateForm(){
        return this.state.username.length>0 && this.state.password.length > 0
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        User.logIn(this.state.username,this.state.password)
        this.setState({
            isLoggedIn:true
        })
    }

    handleLogout = (e) =>{
        User.logOut()
        this.setState({
            username:'',
            password:'',
            isLoggedIn:false
        })
    }

     render(){
        return (
            <div className="header-nav">
               <Link to={'/'} className="logo-link">
                <img 
                    src={require(`../assets/trivago-logo-1.png`)} 
                    alt="{trivago}" className="logo"
                    /> 
               </Link>
               
            {this.state.isLoggedIn ? (
                   <div className="logout-form">
                        <p className="username"><span className="welcome">Welcome,</span> {this.state.username.split('@')[0]}</p>
                        <button onClick={this.handleLogout} className="logout-btn">log Out</button>
                   </div>
                )
               :(
                   <div className="login-form">
                        <input 
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            placeholder="username"
                        />
                        <input 
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            placeholder="password"
                        />
                    <button onClick={this.handleSubmit} disabled={!this.validateForm()} className="login-btn">Login</button>
               </div>
               )
            } 
            </div>
          )
     }
   
}

export default Header

import React from "react";
import './LogIn.css'

import {FaUser} from 'react-icons/fa'
import {FaLock} from 'react-icons/fa'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faVk } from "@fortawesome/free-brands-svg-icons";



const LogIn=(props)=>
{ 
    
    return (
        <div className="container">
            <div className="screen">
                <div className="screen-content">
                    <p className="welcome">Добро пожаловать!</p>
                    <form className="login">
                    <div className="login-field">
                        <FaUser className="login-icon fas fa-user"/>
                        <input type="text" className="login-input" placeholder="User name / Email"/>
                    </div>
                    <div className="login-field">
                        <FaLock className="login-icon fas fa-lock"/>
                        
                        <input type="password" className="login-input" placeholder="Password"/>
                    </div>
                    <button className="button login-submit">
					    <span className="button__text" >Log In</span>
				    </button>	
				    <button className="button login-submit">
					    <span className="button__text">Check In</span>
				    </button>	
                    </form>
                    
                </div>
                <div className="screen-background">
                    <span className="screen-background-shape screen-background-shape1"></span>
                    <span className="screen-background-shape screen-background-shape2"></span>
		        </div>	
        </div>
    </div>

    
    );
};

export default LogIn;
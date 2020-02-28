/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Formlogin from './Formlogin'

class Login extends React.Component{


    
    render(){
        return(
            <div className="container login-container">
               <h4>Login</h4>
               <Formlogin></Formlogin>
            </div>
        );
    }
}
export default Login;
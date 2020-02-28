/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Login from './registration/Login'
import App from './App'
import Home from './Home'
import Dashboard from './dashboard/Dashboard'
import Signup from './registration/Singup'
import history  from './libs/history';
import Design  from './dashboard/forms/FrmClient'
import { Router,  Route  } from "react-router-dom";

class Routing extends React.Component{

  

    render(){
        return(
            <div>
                <Router history={history}>
                
                    <Route path="/" component={App}></Route>
                    <Route path="/dashboard" component={Dashboard}></Route>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/singup" component={Signup}></Route>
                    <Route path="/design" component={Design}></Route>

                
                
                </Router>
                
            </div>
        );
    }
}
export default Routing;
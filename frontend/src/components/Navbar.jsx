
import React from 'react'

import {Link} from 'react-router-dom';

function Navbar(props){
  
  var tok = localStorage.getItem('auth_token'); 
    if(tok == null){
        return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
            <ul className="navbar-nav ">
            <li className="nav-item"><Link to="/home"className="nav-link">HOME</Link></li>  
              <li className="nav-item"><Link to="/login"className="nav-link">LOGIN</Link></li>
                        
            </ul>
    
          </nav>
        );

      }else{
        return( <div></div>
          // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
          //   <ul className="navbar-nav ">
          //   <li className="nav-item"><Link to="/home"className="nav-link">HOME</Link></li>  
          //     <li className="nav-item"><Link to="/dashboard"className="nav-link">DASHBOARD</Link></li>
                        
          //   </ul>
    
          // </nav>
        );
      }
      
}
export default Navbar; 
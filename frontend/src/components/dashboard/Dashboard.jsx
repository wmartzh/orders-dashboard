/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import history  from '../libs/history';    
import Sidemenu from './Sidemenu';

function DashBoard(){
    var tok = localStorage.getItem('auth_token'); 
  if( tok == null){ 
        return(
            <div className="container">
                <h1>Youre not Logged</h1>
              
            </div>
        );
    }
        
  else{
      return(
          <div>
              <Sidemenu/>
          </div>
      );
  }
}
export default DashBoard;
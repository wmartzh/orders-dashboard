/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Formsingup from './Formsignup';
class Singup extends React.Component{
    
    
    
    
    render(){
        
        
        return(
            <div className="container singup-container">
                 <div className="col-sm-12">
                     <h4>Sing up</h4>
                  <Formsingup/>
                        
                 </div>

            </div>
        );
    }
}
export default Singup;
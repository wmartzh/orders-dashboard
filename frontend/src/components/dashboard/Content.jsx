/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import DashContent from './DashContent'
import Orders from './Orders'
import Clients from './Clients'
import Kits from './Kits'
function Content(props){
    
    switch(props.option){
        case 'dashboard':
            return(
                <DashContent/>
            );
         
        case 'orders':
            return(<Orders></Orders>);
           
        case 'clients':
            return(<Clients></Clients>);
           
        case 'kits':
            return(<Kits></Kits>);
           
        default:
            return(<div></div>);
    }
}
export default Content;
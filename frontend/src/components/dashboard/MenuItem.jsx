/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function MenuItem(props){

    

    if(props.show){
        return(
            <h4 className={props.cssname}>{props.name}</h4>
        );
    }else{
        return(<span></span>);
    }

    
}
export default MenuItem;
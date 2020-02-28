import React from 'react'

function Item(){

    return(
        <td>{this.props.brand} {this.props.model}</td>
    );

}
export default Item;
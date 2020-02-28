/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

class DashCard extends React.Component{

    constructor(props){
        super(props)
    }
    render(){
        return(
            <div class="card text-white bg-success mb-3" >
            <div class="card-header">{this.props.customer}</div>
            <div class="card-body">
                <h5 class="card-title">{this.props.date} Days Remaining</h5>
                <p><strong>Kit:</strong> {this.props.kit}</p>
                <p><strong>Order Date: </strong>{this.props.date_init} </p>
                <p><strong>Order delivery: </strong>{this.props.date_finish} </p>
            </div>
            </div>
        );
    }
}
export default DashCard;
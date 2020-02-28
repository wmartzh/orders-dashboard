import React from 'react'
import OrdertList from './tables/OrderList';
import FrmOrder from './forms/FrmOrder';

class Orders extends React.Component {
    
    constructor(props){
        super(props)

        this.state ={
            content : <OrdertList/>        
        }
        this.listOrders = this.listOrders.bind(this)
        this.createOrders = this.createOrders.bind(this)
    }
    listOrders(){
        this.setState({content: <OrdertList/>})
    }

    createOrders(){
        this.setState({content: <FrmOrder/>})
    }

    render(){
        return(
            <div className="row">
                <div className="col-sm-12">
                    <h1>Orders</h1>
                    <br/>
                    <ul className="nav  tmenu">
                        <li className="nav-item"><a className="btn btn-link nav-link" onClick={this.listOrders}><i className='uil uil-list-ui-alt'></i>Order List</a></li>
                        <li className="nav-item"><a className="btn btn-link nav-link" onClick={this.createOrders}><i className='uil uil-plus-square'></i>Add Order</a></li>
                    </ul>
                    <br/>
                    <div className="scontent">
                        
                        {this.state.content}
                    </div>

                </div>
            </div>
        );
    }
    
}
export default Orders; 
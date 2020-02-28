/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import axios from 'axios'

class OrderList extends React.Component{

    constructor(props){
        super(props)
        this.state={orders:[]}

        this.renderTable = this.renderTable.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        
    }

    renderTable(){
        var tok = 'token '+ localStorage.getItem('auth_token');
        var dts;
        axios('http://127.0.0.1:8000/api/orders/',{
            method: 'get',
            headers:{ 'Authorization': tok ,'Content-Type': 'application/json'},
    
        }).then((response)=>{
            this.setState({orders:response.data
            })
        
        }).catch((error)=>{
            console.log(error)
        })
    }
    componentDidMount(){

        this.renderTable()
        
      
    }
    listpieces(id){
        this.state.pieces[id].kits.map((kits)=>{return <i>kits.brand</i>})        
    }
    convertJson(json){
        var obj = JSON.parse(json);
        return obj;
    }

    render(){
        return(
            <div className="ctable  scrollbar">
                <table className=" table table-hover">
                
                    <th itemScope="col">Order No</th>
                    <th itemScope="col">Customer</th>
                    <th itemScope="col">Kit</th>
                    <th itemScope="col">Entry Date</th>
                    <th itemScope="col">Finish Date</th>
                   
                
                <tbody>
                    {this.state.orders.map((orders,index)=>{
                    
                        return(
                        <tr key={index}>
                            <td>{orders.order_code}</td>
                            <td>{orders.client_name}</td>
                            <td>{orders.kit_name}</td>
                            <td>{orders.date_init}</td>
                            <td>{orders.date_finish}</td>
                            
                          
                                               
                        </tr>
                        )
        
                })}

                </tbody>
            </table>
            </div>
        );
    }
}
export default OrderList;
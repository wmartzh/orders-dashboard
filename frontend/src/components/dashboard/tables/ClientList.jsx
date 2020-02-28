/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import axios from 'axios'

class ClientList extends React.Component{

    constructor(props){
        super(props)
        this.state={clients:[],kits:[]}

        this.renderTable = this.renderTable.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        
    }

    renderTable(){
        var tok = 'token '+ localStorage.getItem('auth_token');
        var dts;
        axios('http://127.0.0.1:8000/api/clients/',{
            method: 'get',
            headers:{ 'Authorization': tok ,'Content-Type': 'application/json'},
    
        }).then((response)=>{
           
            this.setState({clients:response.data
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
                
                    <th itemScope="col">First Name</th>
                    <th itemScope="col">Last name</th>
                    <th itemScope="col">E mail</th>
                    <th itemScope="col">Phone</th>
                    <th itemScope="col">Address</th>
                   
                
                <tbody>
                    {this.state.clients.map((clients,index)=>{
                    
                        return(
                        <tr key={index}>
                            <td>{clients.first_name}</td>
                            <td>{clients.last_name}</td>
                            <td>{clients.email}</td>
                            <td>{clients.phone_number}</td>
                            <td>{clients.address}</td>
                          
                                               
                        </tr>
                        )
        
                })}

                </tbody>
            </table>
            </div>
        );
    }
}
export default ClientList;
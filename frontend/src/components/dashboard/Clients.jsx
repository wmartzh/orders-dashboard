import React from 'react'
import { tsConstructorType } from '@babel/types';
import FrmClient from './forms/FrmClient';
import ClientList from './tables/ClientList';

class Clients extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            content: <ClientList/>
        
        }
        this.addClient = this.addClient.bind(this)
        this.listClient = this.listClient.bind(this)
    }

    addClient(){
        this.setState({content:<FrmClient/>})

    }
    listClient(){
        this.setState({content : <ClientList/>})
    }
    
        render(){
            return(
                <div className="row">
                        <div className="col-sm-12">
                            <h1>Customers</h1>
                            <br/>
                            <ul className="nav  tmenu">
                                <li className="nav-item"><a className="btn btn-link nav-link" onClick={this.listClient}><i className='uil uil-list-ui-alt'></i>Customers List</a></li>
                                <li className="nav-item"><a className="btn btn-link nav-link" ><i className='uil uil-edit-alt'></i>Edit Customer</a></li>
                                <li className="nav-item"><a className="btn btn-link nav-link" onClick={this.addClient}><i className='uil uil-plus-square'></i>Add Customer</a></li>
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
export default Clients; 
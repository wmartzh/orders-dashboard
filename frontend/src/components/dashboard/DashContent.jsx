/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import axios from 'axios'
import DashCard from './components/DashCard';
import {DateTime} from 'luxon' 

class DashContent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            orders:[],
            client:[],
            kits:[],
            detail: <br/>
        }
        this.renderTable = this.renderTable.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this)
        this.renderClients = this.renderClients.bind(this)
        this.renderKits = this.renderKits.bind(this)
        this.daysRemaining = this.daysRemaining.bind(this)
        this.getDetail = this.getDetail.bind(this)

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
    renderClients(){
        var tok = 'token '+ localStorage.getItem('auth_token');
        var dts;
        axios('http://127.0.0.1:8000/api/clients/',{
            method: 'get',
            headers:{ 'Authorization': tok ,'Content-Type': 'application/json'},
    
        }).then((response)=>{
           
            this.setState({client:response.data
            })

        }).catch((error)=>{
            console.log(error)
        })
    }
    renderKits(){
        var tok = 'token '+ localStorage.getItem('auth_token');
        var dts;
        axios('http://127.0.0.1:8000/api/kits/',{
            method: 'get',
            headers:{ 'Authorization': tok },
    
        }).then((response)=>{
            this.setState({kits:response.data})
            console.log(this.state.kits)
        
        }).catch((error)=>{
            console.log(error)
        })

    }
    daysRemaining(str){
       
        var dt = DateTime.local()
        var dt2 = dt.year+'/'+dt.month+'/'+dt.day
        var nt = str.split('-')
        var ndt = nt[0]+'/'+nt[1]+'/'+nt[2]
        console.log('now: '+dt2 +' --- final:'+ ndt)
        
        var fi = new Date(dt2)
        var ff = new Date(ndt)
        var difm = ff.getTime()-fi.getTime()
        var difd = Math.floor(difm /(1000 * 60 * 60 * 24))
    
        return difd

       
        
    }
    getDetail(id){

       
        

    }
    componentWillMount(){
        this.renderTable();
        this.renderClients();
        this.renderKits();
    }
    render(){
        return(
            <div className="">
                <h1>Dashboard</h1>
                <br/>
                <h5>Orders to deliver</h5>
                <div className="cards-container scrollbar">
                    {
                        this.state.orders.map((orders,i)=>{
                            return(
                                
                                    <a onClick={this.getDetail(i)}>
                                        <DashCard key={i} date={
                                                this.daysRemaining(orders.date_finish)}
                                            kit={orders.kit_name}
                                            customer={orders.client_name}
                                            date_init = {orders.date_init}
                                            date_finish = {orders.date_finish}
                                        />
                                    </a>
                            )
                        })
                    }
                </div>
            
               
            </div>
        );
    }
        
    
}
export default DashContent; 
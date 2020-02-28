// eslint-disable-next-line
import React from 'react'
import { withFormik, Form, Field,ErrorMessage} from 'formik';
import {DateTime} from 'luxon'
import axios from 'axios'
import { generate } from 'rxjs';


class FrmOrder extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            kits:[],
            clients:[],
            pieces:[],
            optionc: <br/>,
       
            
        }
    
        this.getKits = this.getKits.bind(this)
        this.getClients = this.getClients.bind(this)
        this.getPieces = this.getPieces.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        
        this.optionKit = this.optionKit.bind(this)
        this.optionPiece = this.optionPiece.bind(this)
        
    
     
    }
    
    getPieces(){
        var tok = 'token '+ localStorage.getItem('auth_token');
        var dts;
        axios('http://127.0.0.1:8000/api/pieces/',{
            method: 'get',
            headers:{ 'Authorization': tok },
    
        }).then((response)=>{
            this.setState({pieces:response.data})
        
        }).catch((error)=>{
            console.log(error)
        })
    }
    getKits(){
        var tok = 'token '+ localStorage.getItem('auth_token');
        var dts;
        axios('http://127.0.0.1:8000/api/kits/',{
            method: 'get',
            headers:{ 'Authorization': tok },
    
        }).then((response)=>{
            this.setState({kits:response.data})
        
        }).catch((error)=>{
            console.log(error)
        })
    }
    rop(ar){
        return(
            <div className="form-group ">
                <label htmlFor="kit">Select type of Kit</label>
                <Field  name="kit"  component="select" className="form-control scrollbar">
                    <option value="norequired">None</option>
                    {ar.map((dkit)=>{
                                return(
                                    <option value={()=>{return dkit.brand+' '+ dkit.model+ ' '+dkit.hp}}key={dkit.id}> {dkit.brand} {dkit.model} {dkit.hp}</option>    
                                )
                    })}
                </Field>
            </div>
        );
    }
    ropp(ar){
        return(
            <div className="form-group ">
                <label htmlFor="piece">Select Type  of Piece</label>
                <Field  name="piece"  component="select" className="form-control scrollbar">
                    <option value="norequired">None</option>
                    {ar.map((dkit)=>{
                                return(
                                    <option value={dkit.name}key={dkit.id}>{dkit.name}</option>    
                                )
                    })}
                </Field>
            </div>
        );

    }

    optionKit(){
        
        var cont = this.rop(this.state.kits)
        this.setState({optionc:cont })
    }

    optionPiece(){
        var cont = this.ropp(this.state.pieces)
        this.setState({optionc:cont })

    }

    getClients(){
        var tok = 'token '+ localStorage.getItem('auth_token');
        var dts;
        axios('http://127.0.0.1:8000/api/clients/',{
            method: 'get',
            headers:{ 'Authorization': tok },
    
        }).then((response)=>{
            this.setState({clients:response.data})
          
        }).catch((error)=>{
            console.log(error)
        })
    }


    componentDidMount(){
        this.getKits();
        this.getClients();
        this.getPieces();
       
    
    }
    
   
    
    render(){
        
        return(
            <Form className="frmcrkit">
                <h3>Create new Order</h3>
                <br/>
              
                <div className="form-group">
                        <label htmlFor="fdate">Select Delivery date</label>
                        <Field
                        className="form-control"
                        type="date"
                        name ="fdate"
                    
                        placeholder="Enter delivery date"
                       
                        />
                      
                </div>
                <div className="form-group ">
                    <label htmlFor="client">Slect Client</label>
                    <Field  name="client"  component="select" className="form-control scrollbar">
                        <option value="Unregistered customer">Unregistered customer</option>
                    {this.state.clients.map((client, index)=>{
                        return(
                            <option value={client.last_name+' '+client.first_name} key={index}>{client.first_name} {client.last_name}</option>
                            
                            )
                    })}
                    </Field>
                   
                </div>

                <div className="form-group ">
                <label htmlFor="kit">Select type of Kit</label>
                <Field  name="kit"  component="select" className="form-control scrollbar">
                    <option value="norequired">None</option>
                    {this.state.kits.map((dkit)=>{
                                return(
                                    <option value={()=>{return dkit.brand+' '+ dkit.model+ ' '+dkit.hp}}key={dkit.id}> {dkit.brand} {dkit.model} {dkit.hp}</option>    
                                )
                    })}
                </Field>
            </div>

            {/*SELECT OPTION kIT OR pIECE DISABLED */}
                {/* <ul className="nav">
                        <li className="nav-item"><a className="btn btn-link nav-link" onClick={this.optionKit}><i className='uil uil-plus'></i>Add Kit</a></li>
                        <li className="nav-item"><a className="btn btn-link nav-link" onClick={this.optionPiece}><i className='uil uil-plus'></i>Add Piece</a></li>
                        
                </ul>
                {this.state.optionc} */}


                <ErrorMessage name="op">
                        {message => <p className="text-danger">{message}</p>}
                </ErrorMessage>
              
                
                
               
                <button onClick={this.handleSubmit} type="submit" className="btn btn-success"><i className='uil uil-plus'></i>Add Piece</button>

            </Form>
        );
    }
  
}
export default withFormik({
    
    mapPropsToValues: (props) => {
        
        return {
          kit: '',
          client:'',
          piece:'',
          fdate:'',
          ndate:''
   
         
        }
      },
    validate(values){
        const errors ={};
        
         

        return errors;
    },
    handleSubmit(values, formikBag){

        
    
        var dt = DateTime.local()
        var ndt = dt.year+'-'+dt.month+'-'+dt.day;
        var code = dt.year-2000+''+dt.month+''+dt.day+''+dt.second;
        

        var body ={
            order_code: code,
            client_name: values.client,
            kit_name : values.kit,
            date_init: ndt,
            date_finish:values.fdate
           
        }

        
        console.log(body)
        var tok = 'token '+ localStorage.getItem('auth_token');
        console.log(body);
        axios('http://127.0.0.1:8000/api/orders/',{
            method: 'post',
            headers:{ 'Authorization': tok },
            data:body
        }).then(function (response){
            console.log(response)
            if(response.request.status == 201){
                
                alert('The kit was created successfully');
            }else{
                alert('something was wrong')
            }
            
        })
        
    },
 
      
    

})(FrmOrder);
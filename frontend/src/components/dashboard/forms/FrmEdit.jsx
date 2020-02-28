/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { withFormik, Form, Field,ErrorMessage} from 'formik';
import FilterResults from 'react-filter-search';

import axios from 'axios'

class FrmEdit extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            addBtn:false,
            kits:[]
            
        }
    
     this.renderTable = this.renderTable.bind(this)
     this.componentDidMount = this.componentDidMount.bind(this)

        
    }
    renderTable(){
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
    componentDidMount(){

        this.renderTable()
      
    }

    
    
    render(){
        
        return(
            <Form className="frmcrkit">
                <h3>Create new kit</h3>
                <br/>
                <div className="form-group">
                        <label htmlFor="search">Piece name</label>
                        <Field
                        className="form-control"
                        type="text"
                        name ="search"
                        value={this.props.search}
                        placeholder="Enter Piece name"
                     
                       
                        />
                        <ErrorMessage name="search">
                        {message => <p className="text-danger">{message}</p>}
                        </ErrorMessage>
    
                </div>
                
              
                
               
                <button onClick={this.handleSubmit} type="submit" className="btn btn-success">Add Piece</button>

            </Form>
        );
    }
  
}
export default withFormik({
    
    mapPropsToValues: (props) => {
        
        return {
          search: '',
         
   
         
        }
      },
    validate(values){
        const errors ={};
        if(values.pname == null){
            errors.pname='Please provide a piece name'
        }
         

        return errors;
    },
    handleSubmit(values, formikBag){
        const errors ={}
       
       
        var tok = 'token '+ localStorage.getItem('auth_token');
      
        axios('http://127.0.0.1:8000/api/kits/',{
            method: 'get',
            headers:{ 'Authorization': tok },
        
        }).then(function (response){
            console.log(response)
            if(response.request.status == 201){
                response.data.map((res)=>{
                    if(values.search == res.brand){
                        console.log(res.brand)
                    }
                })
            }else{
                alert('something was wrong')
            }
            
        })
        
    },
 
      
    

})(FrmEdit);
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { withFormik, Form, Field,ErrorMessage} from 'formik';

import axios from 'axios'

class FrmCreateKit extends React.Component{

    constructor(props){
        super(props);
        this.state ={}
    
    }
       
    render(){
        return(
            <Form className="frmcrkit">
                <h3>Create new kit</h3>
                <br/>
                <div className="form-group">
                        <label htmlFor="brand">Brand Kit</label>
                        <Field
                        className="form-control"
                        type="text"
                        name ="brand"
                        value={this.props.brand}
                        placeholder="Enter brand"
                       
                        />
                        <ErrorMessage name="brand">
                        {message => <p className="text-danger">{message}</p>}
                        </ErrorMessage>
    
                </div>
                <div className="form-group">
                        <label htmlFor="model">Model</label>
                        <Field
                        className="form-control"
                        type="text"
                        name ="model"
                        value={this.props.model}
                        placeholder="Enter brand"
                       
                        />
                        <ErrorMessage name="model">
                        {message => <p className="text-danger">{message}</p>}
                        </ErrorMessage>
    
                </div>
                <div className="form-group">
                        <label htmlFor="hp">Horse Power</label>
                        <Field
                        className="form-control"
                        type="text"
                        name ="hp"
                        value={this.props.hp}
                        placeholder="Enter Horse Power"
                       
                        />
                        <ErrorMessage name="hp">
                        {message => <p className="text-danger">{message}</p>}
                        </ErrorMessage>
    
                </div>
                <ErrorMessage name="success">
                        {message => <p className="text-success">{message}</p>}
                </ErrorMessage>
                <button onClick={this.handleSubmit} type="submit" className="btn btn-success">
                <i className='uil uil-plus'></i>
                    Add new Kit</button>

            </Form>
        );
    }
  
}
export default withFormik({
    mapPropsToValues: (props) => {
        return {
          brand: '',
          model: '',
          hp: '',
          success:''
        }
      },
    validate(values){
        const errors ={};
        if(values.brand == null){
            errors.brand='Please provide a brand name'
        }
        if(values.model == null){
            errors.model='please provide the model'
        }
        if(values.hp == null){
            errors.hp='please provide the Horse Power'
        }
        
        

        return errors;
    },
    handleSubmit(values, formikBag){
        const errors ={}
        var body ={
            brand:values.brand,
            model:values.model,
            hp: values.hp
        }
        var tok = 'token '+ localStorage.getItem('auth_token');
        console.log(body);
        axios('http://127.0.0.1:8000/api/kits/',{
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
    handleReset(){

    }
      
    

})(FrmCreateKit);
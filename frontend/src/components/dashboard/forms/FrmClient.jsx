/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Formik, Form, Field,ErrorMessage, withFormik} from 'formik';
import axios from 'axios';
class FrmClient extends React.Component{
    constructor(props){
        super(props);
    
    
    }
    render(){
        return(
            <Form className="frmcrkit">
                <h4>Add New Client</h4>
                <br/>
                <div className="row">
                <div className="form-group col-sm-6">
                    <label htmlFor="firstname">First Name</label>
                    <Field
                    className="form-control"
                    type="text"
                    name = "firstname"
                    placeholder="Enter First name"
                    value={this.props.firstname}
                    />
                    <ErrorMessage name="firstname">
                    {message => <p className="text-danger">{message}</p>}
                    </ErrorMessage>
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="lastname">Last Name</label>
                    <Field
                    className="form-control"
                    type="text"
                    name = "lastname"
                    placeholder="Enter last name"
                    />
                    <ErrorMessage name="lastname">
                    {message => <p className="text-danger">{message}</p>}
                    </ErrorMessage>
                </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field
                    className="form-control"
                    type="email"
                    name = "email"
                    placeholder="Enter email"
                    />
                    <ErrorMessage name="email">
                    {message => <p className="text-danger">{message}</p>}
                    </ErrorMessage>
                </div>
                <div className="form-group">
                    <label htmlFor="phonenumber">Phone</label>
                    
                    <Field
                    className="form-control"
                    type="text"
                    name = "phonenumber"
                    placeholder="Enter phone number"
                    />
                    <ErrorMessage name="phonenumber">
                    {message => <p className="text-danger">{message}</p>}
                    </ErrorMessage>
                    
                    
                    
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    
                    <Field
                    className="form-control"
                    type="text"
                    name = "address"
                    placeholder="Enter Client Address"
                    />
                    <ErrorMessage name="address">
                    {message => <p className="text-danger">{message}</p>}
                    </ErrorMessage>
                    
                    
                    
                </div>

            <button className="btn  btn-success" type="submit" ><i className='uil uil-plus'></i>Add Client</button>
    

            </Form>
        );
    }
}
export default withFormik({

    mapPropsToValues: (props) => {
        return {
          firstname: '',
          lastname: '',
          email: '',
          phonenumber: '',
          address:''
        }
      },
    validate(values){
        const errors ={};

        if(!values.firstname){
            errors.firstname='Please provide a first name'
        }
        if(!values.lastname ){
            errors.lastname='please provide the last name'
        }
        if(!values.email ){
            errors.email='please provide the email'
        }
        if(!values.phonenumber ){
            errors.phonenumber='please provide a phone number'
        }
        if(!values.address){
            errors.address='please provide an address'
        }
        
        return errors;
    },
    handleSubmit(values, formikBag){
        const errors ={}
        var body ={
            first_name: values.firstname,
            last_name: values.lastname,
            email: values.email,
            phone_number: values.phonenumber,
            address:values.address
        }
        var tok = 'token '+ localStorage.getItem('auth_token');
        console.log(body);
        axios('http://127.0.0.1:8000/api/clients/',{
            method: 'post',
            headers:{ 'Authorization': tok },
            data:body
        }).then(function (response){
            console.log(response)
            if(response.request.status == 201){
                
                alert('The Client was created successfully');
            }else{
                alert('something was wrong')
            }
            
        })
        
    },


})(FrmClient);
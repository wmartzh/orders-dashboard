import React from 'react'
import axios from 'axios'
import { withFormik, Field, ErrorMessage, Form} from 'formik';


function Formsingup(props){

    return(
        <Form>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <Field
                className="form-control"
                type="username"
                name = "username"
                placeholder="Enter username"
                />
                <ErrorMessage name="username">
                {message => <p className="text-danger">{message}</p>}
                </ErrorMessage>
            </div>
            <div className="row">
            <div className="form-group col-sm-6">
                <label htmlFor="firstname">First Name</label>
                <Field
                className="form-control"
                type="text"
                name = "firstname"
                placeholder="Enter First name"
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
                <label htmlFor="password">Pasword</label>
                
                <Field
                className="form-control"
                type="password"
                name = "password"
                placeholder="Enter password"
                />
                <ErrorMessage name="password">
                {message => <p className="text-danger">{message}</p>}
                </ErrorMessage>
                
                
                
            </div>

            <button className="btn  btn-success" type="submit" >Sign up</button>
    
        </Form>

    );

}
export default withFormik({
    mapPropsToValues: (props) => {
        return {
          password: '',
          username: '',
          lastname: '',
          firstname: '',
          email: '',
        }
      },
    validate(values){
        const errors = {};

        if(!values.password){
            errors.password='Password is required'
        }else if(values.password.length < 8){
            errors.password = 'Password must be at least 8 characters';
        }
       
        if(!values.lastname){
            errors.lastname='The last name is required'
        }
        if(!values.email){
            errors.email='The email is required'
        }
        if(!values.firstname){
            errors.firstname='The first name is required'
        }
        if(!values.username){
            errors.username='The first username is required';
            
        }
        return errors;
    },
    handleSubmit(values, formikBag){
        formikBag.setSubmitting(false);
        var body ={
            username:values.username,
            firt_name:values.firstname,
            last_name:values.lastname,
            email:values.email,
            password:values.password
        }
         var tk = 'token '+localStorage.getItem('auth_token');
        console.log(body);
        axios('http://127.0.0.1:8000/api/users/',{
            headers: {
                'Authorization':tk
              },
            method: 'post',
            data:body
        })
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error)
        });
    },

})(Formsingup);
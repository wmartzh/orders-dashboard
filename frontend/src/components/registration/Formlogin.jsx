import React from 'react'
import axios from 'axios'

import history from '../libs/history';
import { withFormik, Field, ErrorMessage,Form } from 'formik';
import { empty } from 'rxjs';
import UserProfile from '../UserProfile';



function Formlogin(props){

     

    

        return(
            <Form>
              
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <Field
                    className="form-control"
                    type="text"
                    name ="username"
                    
                    placeholder="Enter username"
                   
                    />
                    <ErrorMessage name="username">
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
                <button className="btn  btn-success"type="submit">Login</button>
            </Form>
    
    
        );
    

}
export default withFormik({

    mapPropsToValues: (props) => {
        return {
          password: '',
          username: '',
        }
      },
    validate(values){
        const errors = {};

        if(values.password===empty){
            errors.password='Password is required';
            
            
        }
        if(!values.username){
            errors.username='The username is required';
            
        }
        return errors;
    },
    handleSubmit(values,formikBag){
        
        var body ={
            username:values.username,
            password:values.password
        }
        console.log(body);
        axios('http://127.0.0.1:8000/api/login/',{
            method: 'post',
            data:body
        })
        .then(function (response) {
            console.log(response.data.token)
            UserProfile.setToken(response.data.token);
            console.log(UserProfile.getToken())
            history.push("/dashboard")
        })
        .catch(function (error) {
            console.log(error)
        });
    }
   

   

})(Formlogin);
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { withFormik, Form, Field,ErrorMessage} from 'formik';

import axios from 'axios'

class FrmPieces extends React.Component{

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
            console.log(this.state.kits)
        
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
                        <label htmlFor="pname">Piece name</label>
                        <Field
                        className="form-control"
                        type="text"
                        name ="pname"
                        value={this.props.name}
                        placeholder="Enter Piece name"
                       
                        />
                        <ErrorMessage name="pname">
                        {message => <p className="text-danger">{message}</p>}
                        </ErrorMessage>
    
                </div>
                
              
                <div className="form-group ">
                    <label htmlFor="kit">Slect Kit</label>
                    <Field  name="kit"  component="select" className="form-control scrollbar">
                    {this.state.kits.map((dkit)=>{
                        return(
                            <option value={()=>{return dkit.brand+' '+ dkit.model+ ' '+dkit.hp}}key={dkit.id}> {dkit.brand} {dkit.model} {dkit.hp}</option>    
                        )
                    })}
                    </Field>
                </div>
               
                <button onClick={this.handleSubmit} type="submit" className="btn btn-success"><i className='uil uil-plus'></i>Add Piece</button>

            </Form>
        );
    }
  
}
export default withFormik({
    
    mapPropsToValues: (props) => {
        
        return {
          pname: '',
          kit: '',
   
         
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
        var body ={
            name:values.pname,
            kit: values.kit,
           
        }
        console.log(values.kit)
        var tok = 'token '+ localStorage.getItem('auth_token');
        console.log(body);
        axios('http://127.0.0.1:8000/api/pieces/',{
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
 
      
    

})(FrmPieces);
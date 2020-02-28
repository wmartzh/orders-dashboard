/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { withFormik, Form, Field,ErrorMessage} from 'formik';
import axios from 'axios'
import FilterResults from 'react-filter-search';
import SearchResults from 'react-filter-search';

class EditKit extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          value: ''
        };
      }
      componentWillMount() {
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
      handleChange = event => {
        const { value } = event.target;
        this.setState({ value });
      };
      render() {
        const { kits, value } = this.state;
        return (
          <div>
            <input type="text" value={value} onChange={this.handleChange} />
            <SearchResults
              value={value}
              data={kits}
              renderResults={results => (
                <div>
                  {results.map(el => (
                    <div>
                      <span>{el.brand}</span>
                     >
                    </div>
                  ))}
                </div>
              )}
            />
          </div>
        );
      }
}
export default EditKit;
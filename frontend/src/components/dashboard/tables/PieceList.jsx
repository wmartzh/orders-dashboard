/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import axios from 'axios'
import PieceItem from './PieceItem'
class PieceList extends React.Component{

    constructor(props){
        super(props)
        this.state={pieces:[],kits:[]}

        this.renderTable = this.renderTable.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        
    }

    renderTable(){
        var tok = 'token '+ localStorage.getItem('auth_token');
        var dts;
        axios('http://127.0.0.1:8000/api/pieces/',{
            method: 'get',
            headers:{ 'Authorization': tok ,'Content-Type': 'application/json'},
    
        }).then((response)=>{
            var ar,ar2 =[];
            ar = response.data
            
          

            this.setState({pieces:response.data
            })
            // this.setState({kits:response.data.kits})
            console.log(this.state.pieces)
            
           
        
        }).catch((error)=>{
            console.log(error)
        })
    }
    componentDidMount(){

        this.renderTable()
        
      
    }
    listpieces(id){
        this.state.pieces[id].kits.map((kits)=>{return <i>kits.brand</i>})        
    }
    convertJson(json){
        var obj = JSON.parse(json);
        return obj;
    }

    render(){
        return(
            <div className="ctable  scrollbar">
                <table className=" table table-hover">
               
                    <th itemScope="col">Name</th>
                    <th itemScope="col">Kit</th>
                
                
                <tbody>
                    {this.state.pieces.map((dkit,index)=>{
                    
                        return(
                        <tr key={index}>
                            <td>{dkit.name}</td>
                            <td>{dkit.kit}</td>
                                               
                        </tr>
                        )


        
                })}



                </tbody>

                
                
            </table>
            </div>
        );
    }
}
export default PieceList
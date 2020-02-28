/* eslint-disable jsx-a11y/anchor-is-valid*/
// <eslint-disable-next-line></eslint-disable-next-line>
import React from 'react'
import axios from 'axios'
class KitList extends React.Component{

    constructor(props){
        super(props)
        this.state={kits:[]}

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
            <div className="ctable  scrollbar">
                <table className=" table table-hover">
                
                    <th itemScope="col">Brand</th>
                    <th itemScope="col">Model</th>
                    <th itemScope="col">HP</th>
                
                <tbody>
                    {this.state.kits.map((dkit)=>{
                        return(
                        <tr key={dkit.id}>
                            <td>{dkit.brand}</td>
                            <td>{dkit.model}</td>
                            <td>{dkit.hp}</td>

                        </tr>
                        )
                    })}


                </tbody>

                
                
            </table>
            </div>
        );
    }
}
export default KitList
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import FrmCreateKit from './forms/FrmCreateKit'
import KitList from './tables/KitList';
import PieceList from './tables/PieceList';
import FrmPieces from './forms/FrmPieces';
import EditKit from './forms/EditKit';
class Kits extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            content:<KitList/>,
        }
        this.createFormKit = this.createFormKit.bind(this);
        this.createFormPiece = this.createFormPiece.bind(this)
        this.showTableKit = this.showTableKit.bind(this);
        this.showTablePiece = this.showTablePiece.bind(this);
        this.editKit = this.editKit.bind(this);

    }
    
    createFormKit(){
        this.setState({content: <FrmCreateKit></FrmCreateKit>})
    }
    createFormPiece(){
        this.setState({content: <FrmPieces></FrmPieces>})
    }
    showTableKit(){

        this.setState({content: <KitList></KitList>})
    }
    showTablePiece(){
        this.setState({content: <PieceList></PieceList>})
    }
    editKit(){
        this.setState({content: <EditKit/>})

    }

    render(){
        return(
            
                <div className="row">
                    <div className="col-sm-12">
                        <h1>Kit Manager</h1>
                        <br/>
                        <ul className="nav  tmenu">
                            <li className="nav-item"><a className="btn btn-link nav-link" onClick={this.showTableKit}><i className='uil uil-list-ui-alt'></i>Kit List</a></li>
                            <li className="nav-item"><a className="btn btn-link nav-link" onClick={this.showTablePiece}><i className='uil uil-list-ui-alt'></i>Piece List</a></li>
                            <li className="nav-item"><a className="btn btn-link nav-link" onClick={this.editKit}><i className='uil uil-edit-alt'></i>Edit Kits</a></li>
                            <li className="nav-item"><a className="btn btn-link nav-link" onClick={this.createFormKit}><i className='uil uil-plus-square'></i>Add Kit</a></li>
                            <li className="nav-item"><a className="btn btn-link nav-link" onClick={this.createFormPiece}><i className='uil uil-focus-add'></i>Add pieces</a></li>
                        </ul>
                        <br/>
                        <div className="scontent">
                            
                            {this.state.content}
                        </div>

                    </div>
                </div>
                
            
        );
    }

    
        
    
}
export default Kits; 
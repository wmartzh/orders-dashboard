/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import MenuItem from './MenuItem'
import history from '../libs/history'
import Content from './Content'
class Sidemenu extends React.Component{

    constructor(props){
        super(props);
        this.state = { 
            mini :false, 
            moption:{
                min:'sdmenu mminimized',
                max:'sdmenu'
            },
            coption:{
                min:'cminimized st',
                max:'content st'
            },
            menuClass:'sdmenu mminimized',
            contenClass:'content st',
            contentOption:'dashboard',
        };

        this.minimized= this.minimized.bind(this);
        this.dashContents = this.dashContents.bind(this);
        this.ordersManager = this.ordersManager.bind(this);
        this.clientsManager = this.clientsManager.bind(this);
        this.kitsManager = this.kitsManager.bind(this);
     
    }
    minimized(){
    
       this.setState({mini: !this.state.mini})
       if(this.state.mini){
           this.setState({menuClass:''});
           this.setState({contenClass:''});
           this.setState({menuClass:this.state.moption.min});
           this.setState({contenClass:this.state.coption.max});
       }
       else{
        this.setState({menuClass:''});
        this.setState({contenClass:''});
        this.setState({menuClass:this.state.moption.max});
        this.setState({contenClass:this.state.coption.min});
       
       }
                   
    }
    singOut(){
       localStorage.removeItem('auth_token')
       history.push('/home')
        
    }
    dashContents(){
        
        this.setState({contentOption:'dashboard'});

    }
    ordersManager(){
      
        this.setState({contentOption:'orders'});
    }
    clientsManager(){
   
      
        this.setState({contentOption:'clients'});
    }

    kitsManager(){
      
    
        this.setState({contentOption:'kits'});
    }
   


    render(){
      
        return(
            <div>
                <div className={this.state.menuClass}>
                    <div className="menu-section">
                       <a onClick={this.minimized} className="btn-menu row ">
                            <div className="col-sm-4 item-container">
                            <i className='uil uil-bars menu-icon'></i>
                            
                            </div>
                            <div className="col-sm-8">
                                <MenuItem show={this.state.mini} cssname="menu-name" name="Menu"></MenuItem>
                            
                            </div>
                        </a>  
                    </div>
                    <div className="menu-section">
                       <a  onClick={this.dashContents} className="btn-menu row ">
                            <div className="col-sm-4 item-container">
                            <i className='uil uil-dashboard menu-icon'></i>
                            
                            </div>
                            <div className="col-sm-8">
                                <MenuItem show={this.state.mini} cssname="menu-name" name="Dashboard"></MenuItem>
                            
                            </div>
                        </a>  
                    </div>
                    <div className="menu-section">
                       <a onClick={this.ordersManager} className="btn-menu row ">
                            <div className="col-sm-4 item-container">
                            <i className='uil uil-clipboard-notes menu-icon'></i>
                            
                            
                            </div>
                            <div className="col-sm-8">
                                <MenuItem show={this.state.mini} cssname="menu-name" name="Orders"></MenuItem>
                            
                            </div>
                        </a>  
                    </div>
                    <div className="menu-section">
                       <a onClick={this.clientsManager} className="btn-menu row ">
                            <div className="col-sm-4 item-container">
                            <i className='uil uil-users-alt menu-icon'></i>
                            
                            </div>
                            <div className="col-sm-8">
                                <MenuItem show={this.state.mini} cssname="menu-name" name="Customers"></MenuItem>
                            
                            </div>
                        </a>  
                    </div>
                    <div className="menu-section ">
                       <a onClick={this.kitsManager} className="btn-menu row ">
                            <div className="col-sm-4 item-container">
                            <i className='uil uil-screw menu-icon'></i>
                            
                            
                            </div>
                            <div className="col-sm-8">
                                <MenuItem show={this.state.mini} cssname="menu-name" name="Kits"></MenuItem>
                            
                            </div>
                        </a>  
                    </div>

                    <div className="menu-section ">
                       <a  onClick={this.singOut} className="btn-menu row ">
                            <div className="col-sm-4 item-container">
                            <i className='uil uil-sign-out-alt menu-icon'></i>
                            
                            
                            </div>
                            <div className="col-sm-8">
                                <MenuItem show={this.state.mini} cssname="menu-name" name="Sing out"></MenuItem>
                            
                            </div>
                        </a>  
                    </div>


                </div>
                

                <div className={this.state.contenClass}>
                    <div  className="container">
                        <Content option={this.state.contentOption}></Content>
                    </div>
                </div>
            </div>

        );
    }
}
export default Sidemenu;
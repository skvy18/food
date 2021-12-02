import React,{Component} from "react";
import { Link } from "react-router-dom";

class Header extends Component{
    constructor(){
        super()

        this.state={
            
        }
    }

    render(){
        return(
            <React.Fragment>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to="/">EduMato</Link>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/list">List</Link></li>
                            <li><Link to="/details">Details</Link></li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        )

    }
}

export default Header;
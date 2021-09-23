import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { connect } from 'react-redux'; 
import { loginUser } from "../../redux/actions/authActions";


const mapStateToProps = (state) => {
  return state.auth;
}

const Nav = (props) => {

    const resetAuthOnLogout = () => {
        props.loginUser(null, null);
        return "/";
    }

    return (
        <div className="nav-strip">
            <Link to={"/order"} className="nav-link">
                <div className="nav-link-style">
                    <label className="nav-label">Order Form</label>
                </div>
            </Link>
            <Link to={"/view-orders"} className="nav-link" id="middle-link">
                <div className="nav-link-style">
                    <label className="nav-label">View Orders</label>
                </div>
            </Link>
            <Link to={resetAuthOnLogout} className="nav-link">
                <div className="nav-link-style">
                    <label className="nav-label">Log Out</label>
                </div>
            </Link>
        </div>
    );
}

export default connect(mapStateToProps,{ loginUser })(Nav);
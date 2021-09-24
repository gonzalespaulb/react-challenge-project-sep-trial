import React from 'react';
import { Nav } from '../../components';
import './template.css';
import { useSelector } from 'react-redux';


const Template = props => {

    const auth = useSelector((state) => state.auth);

    return (
        <div className="bg-layer">
            <div className="fg-layer">
                <div className="username-display"><h4>{auth.email}</h4></div>
                <label className="logo">Bruce's Diner</label>
                <Nav />
                {props.children}
            </div>
        </div>
    );
}

export default Template;
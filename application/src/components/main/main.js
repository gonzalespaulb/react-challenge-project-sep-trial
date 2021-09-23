import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './main.css';


function Main() {

  // Prevents the back button from being clicked after logout event
  let history = useHistory();
  window.onpopstate = () => {
    history.go(1);
  };

  return (
    <div className="main-body">
      <h1>Bruce's Diner Ordering Application</h1>
      <h2>Please login to continue</h2>
      <Link to={'/login'}>
        <button className="btn btn-primary">Go To Login</button>
      </Link>
    </div>
  )
}

export default Main;

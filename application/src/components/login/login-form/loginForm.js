import React, { useState } from 'react';
import { connect } from 'react-redux'; 
import { loginUser } from '../../../redux/actions/authActions'


const mapStateToProps = (state) => {
  return state.auth;
}

const LoginForm = (props) => {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  const login = (e) => {
    e.preventDefault();
    props.loginUser(email, password);
    props.onLogin();
  }

  return (
    <form>
      <div className="form-group">
        <label htmlFor="inputEmail">Email</label>
        <input type="text" className="form-control" id="inputEmail" placeholder="test@test.com" value={email} onChange={(e) => setEmail(e.target.value)}></input>
      </div>
      <div className="form-group">
        <label htmlFor="inputPassword">Password</label>
        <input type="password" className="form-control" id="inputPassword" value={password} onChange={(e) => setPassword(e.target.value)}></input>
      </div>
      <div className="d-flex justify-content-center">
          <button onClick={login} type="submit" className="btn btn-primary">Login</button>
      </div>
    </form>
  );
}

export default connect(mapStateToProps,{ loginUser })(LoginForm);
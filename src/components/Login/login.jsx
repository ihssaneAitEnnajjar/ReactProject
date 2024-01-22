import React from 'react';

const Login = () => {
  return (
    <div className="form-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-offset-3 col-md-6">
            <form className="form-horizontal">
              <span className="heading">Log In</span>
              <div className="form-group">
                <label htmlFor="inputEmail3">Email or Username</label>
                <input type="email" className="form-control" id="inputEmail3" placeholder="Email or Username" />
                <i className="fa fa-user"></i>
              </div>
              <div className="form-group help">
                <label htmlFor="inputPassword3">Password</label>
                <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                <i className="fa fa-lock"></i>
                <a href="#" className="fa fa-question-circle"></a>
              </div>
              <div className="form-group">
                <div className="main-checkbox">
                  <input type="checkbox" value="None" id="checkbox1" name="check" />
                  <label htmlFor="checkbox1"></label>
                </div>
                <span className="text">Remember me</span>
                <button type="submit" className="btn btn-default">Log in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

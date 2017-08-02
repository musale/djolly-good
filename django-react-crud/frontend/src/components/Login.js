import React from 'react';

const LoginContainer = (props) => {
  return (
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <form>
          <div className="form-group">
            <label>Username: </label>
            <input onChange={props.getUsername} type="text" className="form-control" id="username"></input>
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input onChange={props.getPassword} type="password" className="form-control" id="pwd"></input>
          </div>
          <div className="checkbox">
            <label><input type="checkbox"></input> Remember me</label>
          </div>
          <button type="submit" className="btn btn-default" onClick={props.handleSubmit}>Submit</button>
        </form>
      </div>
      <div className="col-md-4"></div>
    </div>
  )
}

export default LoginContainer;

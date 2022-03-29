import React from "react";
import { useHistory } from "react-router-dom";

const Landing = () => {
  const history = useHistory();


  const loginButtonHandler = event => {
    history.replace('/login')
    
  }
  return (
    <React.Fragment>
      <h1>The Landing Page</h1>
      <button onClick={loginButtonHandler}>Login</button>
    </React.Fragment>
  );
};

export default Landing;

import React from "react";
import NavBarContainer from "./navbar/navbar_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import Splash from './splash/splash';
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/routes_util'
import Board from "./boards/board";

const App = () => (
  <div>
    {/* <header>
        <NavBarContainer />
    </header> */}

    <Switch>
      <AuthRoute exact path="/" component={Splash}/>
      <AuthRoute exact={true} path="/login" component={LoginFormContainer} />
      <AuthRoute exact={true} path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/boards" component={NavBarContainer} />
      <ProtectedRoute path="/boards" component={Board} />
      {/* <Redirect to="/" /> */}
    </Switch>
  </div>
);

export default App;
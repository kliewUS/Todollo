import React from "react";
import NavBarContainer from "./navbar/navbar_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthRoute } from '../util/routes_util'

const App = () => (
  <div>
    <header>
        <NavBarContainer />
    </header>

    <Switch>
      <Route exact path="/" />
      <AuthRoute exact={true} path="/login" component={LoginFormContainer} />
      <AuthRoute exact={true} path="/signup" component={SignupFormContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
import React from "react";
import NavBarContainer from "./navbar/navbar_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import Modal from './modal/modal';
import Splash from './splash/splash';
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/routes_util'
import BoardContainer from "./boards/board_container";

const App = () => (
  <div className="todollo">
    <Switch>
      <AuthRoute exact path="/" component={Splash}/>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/" component={NavBarContainer} />
      <Redirect to="/" />
    </Switch>
      <Modal />
      <ProtectedRoute exact path="/boards" component={BoardContainer} />
  </div>
);

export default App;
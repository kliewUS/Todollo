import React from "react";
import NavBarContainer from "./navbar/navbar_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import Modal from './modal/modal';
import Splash from './splash/splash';
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/routes_util'
import Board from "./boards/board";

const App = () => (
  <div className="todollo">
    {/* <header>
        <NavBarContainer />
    </header> */}

    <Switch>
      <AuthRoute exact path="/" component={Splash}/>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/" component={NavBarContainer} />
      <Redirect to="/" />
    </Switch>
      <Modal />
      <ProtectedRoute exact path="/boards" component={Board} />
  </div>
);

export default App;
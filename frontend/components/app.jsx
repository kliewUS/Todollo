import React from "react";
import NavBarContainer from "./navbar/navbar_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import Modal from './modal/modal';
import Splash from './splash/splash';
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/routes_util'
import BoardIndexContainer from "./boards/board_index_container";
import BoardShowContainer from "./boards/board_show_container";
import ReactGA from 'react-ga';

class App extends React.Component{

  initializeReactGA() {
    ReactGA.initialize('UA-180664984-1');
    ReactGA.pageview('/boards');
  }

  render(){
    return (
      <div className="todollo">
        <Switch>
          <AuthRoute exact path="/" component={Splash}/>
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
          <ProtectedRoute path="/" component={NavBarContainer} />
          <Redirect to="/" />
        </Switch>

          <Modal />

        <Switch>
          <ProtectedRoute exact path="/boards" component={BoardIndexContainer} />
          <ProtectedRoute exact path="/boards/:boardId" component={BoardShowContainer} />
        </Switch>
      </div>
    );
  }

} 


export default App;
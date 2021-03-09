import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./components/app";
import reducers from "./reducers";
//import Shop from './components/shop/shop';


const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

import "./style/main.scss";

import history from './history';
import SignIn from './components/pages/signin';
//import SignUp from './components/auth/signup';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      {/* <Router history={history}> */}
      <BrowserRouter>
        <App />
          {/* <SignIn /> */}
          
         {/* <Switch>
              <Route path='/shop' exact component={Shop}/>
        </Switch>  */}
          {/* <Switch>
            <Route path='/' exact component={Signin}/>
            <Signup />
          </Switch>
          
      </Router> */}
      </BrowserRouter>
    </Provider>,
    
    
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);

import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {
  FormEditPage, FormListPage, FormResultPage, FormSubmitPage, 
  LoginPage, SignupPage, HomePage, NotFoundPage
} from './pages'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/users/login" component={LoginPage} />
          <Route exact path="/users/signup" component={SignupPage} />
          <Route exact path="/" component={HomePage} />
          
          <Route exact path="/forms/edit/:formId"  component={FormEditPage} />
          <Route exact path="/forms/result/:formId"  component={FormResultPage} />

          <Route exact path="/forms/list"  component={FormListPage} />
          <Route exact path="/forms/submit/:formId"  component={FormSubmitPage} />

          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

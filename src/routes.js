import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/login';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <h1>Home Page</h1>} />
      <Route path="/login" component={Login} />
      <Route
        path="/recuperar-senha"
        component={() => <h1>Recuperar Senha</h1>}
      />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Register } from '../pages/Register';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/register' exact component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

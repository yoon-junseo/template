import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '@/components/Main';
import Babo from '@/components/Babo';

const Router = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/babo" component={Babo} exact />
      </Switch>
    </>
  );
};

export default Router;

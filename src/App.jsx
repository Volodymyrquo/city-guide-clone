import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Contacts,
  Footer,
  Home,
  Navbar,
  News,
  NotFoundPage,
} from './components';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/news' component={News} />
        <Route path='/contacts' component={Contacts} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;

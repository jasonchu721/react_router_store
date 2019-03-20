import React, { Fragment } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import Store from './components/Store';
import Stores from './components/Stores';
import StoreForm from './components/StoreForm';
import ItemForm from './components/ItemForm';
import { Container, } from "semantic-ui-react";

const App = () => (
  <Fragment>
    <NavBar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/stores" component={Stores} />
        <Route exact path="/stores/new" component={StoreForm} />
        <Route exact path="/stores/:id/edit" component={StoreForm}/>
        <Route exact path="/stores/:id" component={Store} />
        <Route exact path="/stores/:id/items/new" component={ItemForm} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;

import './App.css';
import React, { Fragment, useState } from 'react';
import './assets/output.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/bootstrap.min.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <main className='py-3'>
          <Container>
            <Route exact path='/register' component={RegisterScreen} />

            <Route exact path='/login' component={LoginScreen} />
            <Route exact path='/' component={HomeScreen} />
            <Route exact path='/product/:id' component={ProductScreen} />
            <Route exact path='/cart/:id?' component={CartScreen} />
          </Container>
        </main>

        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;

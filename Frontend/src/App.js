import './App.css';
import React, { Fragment, useState } from 'react';
import './assets/output.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/bootstrap.min.css';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Fragment>
      <Header />
      <main className='py-3'>
        <Container>
          <HomeScreen />
        </Container>
      </main>

      <Footer />
    </Fragment>
  );
}

export default App;

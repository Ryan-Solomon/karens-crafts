import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';

function App() {
  return (
    <Router>
      <Header />

      <main className='py-3'>
        <Container>
          <Route exact path='/' component={HomeScreen} />
          {/* @ts-ignore */}
          <Route path='/products/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

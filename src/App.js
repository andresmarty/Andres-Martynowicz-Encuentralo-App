import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import { CartProvider } from '../src/context/CartContext';
import Cart from './components/cart/Cart'
import {db} from './firebase'


function App(){
      return(
      <CartProvider>
        <div className="page-container">
          <div className="content-wrap">
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path='/' component={ItemListContainer} />
                    <Route path="/category/:categoryName" component={ItemListContainer} />
                    <Route path='/detail/:id' component={ItemDetailContainer} />
                    <Route path="/cart" component={Cart} />
                </Switch>
            </Router>
        </div>
          <Footer />
        </div>
      </CartProvider>
    );
  };

export default App;
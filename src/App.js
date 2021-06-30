import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ItemDetailContainer from './Views/ItemDetailContainer/ItemDetailContainer';
import Home from './Views/Home/Home'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'

function App(){
      return(
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
              <Route path='/' exact component={ItemListContainer} />
              <Route path='/category/:categoryId' exact component={ItemListContainer} />
              <Route path='/detail/:id' exact component={ItemDetailContainer} />
          </Switch>
          <Footer />
        </div>
              
      </Router>
    );
  };

export default App;
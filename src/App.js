import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App(){
  return(
    <div className="App">
      <NavBar />
      <div className="Greetings">
        <ItemListContainer title={'Bienvenido!'}/>
      </div>
    </div>
  );
}

export default App;
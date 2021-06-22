import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App(){

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


  //console.log("ITEMS DATA", itemData);
  //number = estado inicial
  //setNumber = funcion que me permite modificar el estado inicial
  //useState("AQUI EL VALOR DE MI ESTADO")

  const url = 'https://mocki.io/v1/f7405b3d-dc6d-47a3-813a-0f0fc037e594'

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {

    return(
      <div className="App">
        <NavBar />
          <div className="container d-flex justify-content-center"> 
              <div className="row h-100 w-100 justify-content-center">
                  {items.map((item) => {
                    return(
                        <ItemListContainer name={item.name} price={item.price} img={item.pictureURL} stock={item.stock}/>
                      )
                    })
                  }
              </div>
          </div>
      </div>
    );
  }
}

export default App;
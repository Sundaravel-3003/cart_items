import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './card.js';
import Cart from './cart.js';
import { useState } from 'react';


function App() {

  const [cartItems, setCartItems] = useState([]);

  const [products,setProducts] = useState(
    [
      {
        id: 1,
        name: "iPhone",
        price: 100000
      },
      {
        id: 2,
        name: "OnePlus",
        price: 40000
      },
      {
        id: 3,
        name: "RealMe",
        price: 30000
      },
      {
        id: 4,
        name: "Sumsung",
        price: 25000
      },
      {
        id: 5,
        name: "Honor",
        price: 20000
      },
      {
        id: 6,
        name: "Lenovo",
        price: 15000
      }
    ]
  )
  
  let addToCart = (product) => {
    setCartItems([...cartItems, product]);
  }

  let removeFromCart = (product) => {
    let indexVal = cartItems.findIndex(obj => obj.id === product.id);
    cartItems.splice(indexVal,1);
    setCartItems([...cartItems]);
  }
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8'>
            <div className='row'>
              {
                products.map((product) => {
                  return <Card product={product} addToCart={addToCart} cartItems={cartItems}></Card>;
                })
              }
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='row'>
              <div className='col-lg-12'>
                <h3 style={{ marginTop: "10px" }}>Cart List</h3>
                <Cart cartItems={cartItems} removeFromCart={removeFromCart}></Cart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

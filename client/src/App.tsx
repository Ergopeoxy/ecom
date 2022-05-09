import { useState } from "react";

function App() {
  const [products, setProducts] = useState([{name: "proc 1", price :10.00}]);
  return (
    <div>
    <h1>Store items</h1>
    <ul>
      {products.map((item, index) =>
      (
        <li key={index}>{item.name} : {item.price}</li>
      )
      
      )}
    </ul>
    <button onClick={addProduct}>add product</button>
    </div>
  );
  function addProduct(){
    setProducts( prevState =>[ ...prevState, {name: "proc"+(prevState.length +1), 
    price:3.00+ (prevState[prevState.length-1].price)
  }])
  }
}

export default App;

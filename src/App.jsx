import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer message="¡Bienvenido a nuestra tienda online!" />
    </div>
  );
}

export default App;


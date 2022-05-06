import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";
import PokemonList from "./components/PokemonList/PokemonList";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<PokemonList />} />
            <Route path='/detail/:id' element={<PokemonDetail />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;

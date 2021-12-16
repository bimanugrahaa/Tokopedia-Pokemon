import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonDetail from './pages/PokemonDetail';
import PokemonList from './pages/PokemonList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<PokemonList/>}/>
        <Route path="/pokemon/:name" exact element={<PokemonDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

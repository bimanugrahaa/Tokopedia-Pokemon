import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonDetail from './pages/PokemonDetail';
import PokemonList from './pages/PokemonList';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/Store'
import MyPokemon from './pages/MyPokemon';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<PokemonList/>}/>
            <Route path="/pokemon/:name" exact element={<PokemonDetail/>}/>
            <Route path="/my-pokemon" exact element={<MyPokemon/>}/>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" exact element={<PokemonList/>}/>
    //     <Route path="/pokemon/:name" exact element={<PokemonDetail/>}/>
    //   </Routes>
    // </BrowserRouter>
  )
}

export default App;

import './App.css';
import Card from './components/Card';
import Detail from './components/Detail';
import Header from './components/Header';
import PokemonDetail from './pages/PokemonDetail';
import PokemonList from './pages/PokemonList';

function App() {
  return (
    <>
      {/* <Header></Header> */}
      {/* <Card></Card> */}
      {/* <Detail></Detail> */}
      {/* <PokemonList></PokemonList> */}
      <PokemonDetail></PokemonDetail>
    </>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

import { useState } from 'react';
import Fillin from './components/Fillin';
import Madlib from './components/MadLib';
import './App.css';

function App() {
  const [nounOne, setNounOne] = useState("");
  const [adj, setAdj] = useState("");
  const [verb, setVerb] = useState("");
  const [nounTwo, setNounTwo] = useState("");
  const [showMadLib, setShowMadLib] = useState();


  return (
    <div className="App">
      <header className='App-header'>
        <h1>Mad Lib</h1>
        <Fillin setNounOne={setNounOne} setAdj={setAdj} setVerb={setVerb} setNounTwo={setNounTwo}/>

        <br />

        <button onClick={() => setShowMadLib(true)}>Done</button>

      {(showMadLib === true) ? <Madlib nounOne={nounOne} adj={adj} verb={verb} nounTwo={nounTwo} /> : null}
      </header>
    </div>

  
  );
}

export default App;

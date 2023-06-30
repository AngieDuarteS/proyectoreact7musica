//import logo from './logo.svg';
import './App.css';
import Acceso from './componentes/Acceso';
import { useState } from 'react';
import Rock00s from './componentes/Rock00s';

function App() {
  const [logged, setLogged] = useState(true);
  return (
    <div className="App">
      {logged ?
        <Rock00s />
      : <Acceso setLogIn={setLogged}/>
      }
    </div>
  );
}

export default App;

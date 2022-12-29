import './App.css';
import {Route, Routes} from 'react-router-dom';
import Alumnos from './Componentes/Alumnos/Alumnos'
function App() {
  return (
      <Routes>
        <Route path="/" element={<Alumnos/>}/>
      </Routes>
  );
}

export default App;

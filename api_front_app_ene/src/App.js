import './App.css';
import './components/InfoApi/InfoApi'
import ResContext from './context/ResContext';
import TakeInfo from './components/InfoApi/InfoApi'
import Diagrams from './components/Diagrams/Diagrams';
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  return (
    <ResContext>
      <div className="App">
          <TakeInfo></TakeInfo>
          <Diagrams></Diagrams>
      </div>
    </ResContext>
  );
}

export default App;

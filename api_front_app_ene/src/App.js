import './App.css';
import './components/InfoApi/InfoApi'
import ResContext from './context/ResContext';
import TakeInfo from './components/InfoApi/InfoApi'
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  return (
    <ResContext>
      <div className="App">
          <TakeInfo></TakeInfo>
      </div>
    </ResContext>
  );
}

export default App;

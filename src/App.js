
import './App.css';
import Pagerounter from './Component/Rounter/Pagerounter';
import axios from "axios";

axios.defaults.baseURL = "http://161.97.139.96:3050/";
function App() {
  return (
    <div className="App">
      <header className="App-header">
       < Pagerounter/>
      </header>

    </div>
  );
}

export default App;

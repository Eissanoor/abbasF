
import './App.css';
import Pagerounter from './Component/Rounter/Pagerounter';
import axios from "axios";

axios.defaults.baseURL = "https://abbas.vercel.app/";
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

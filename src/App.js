import "./App.css";
import Landing from './components/landing'
import Nav from './components/Nav'
import Highlights from "./components/Highlight";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
    </div>
 
  );
}

export default App;

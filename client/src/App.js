import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <LandingPage/>
      <About/>
      <Education/>
    </div>
  );
}

export default App;

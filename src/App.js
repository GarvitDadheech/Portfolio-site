import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Education from './components/Education';
import Header from './components/Header';
import NavBar from './components/Navbar';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Services from './components/Services';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <LandingPage/>
      <About/>
      <Education/>
      <Skills/>
      <Experience/>
      <Project/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default App;

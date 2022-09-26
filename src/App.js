import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Works from './components/Works/Works';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Works />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;

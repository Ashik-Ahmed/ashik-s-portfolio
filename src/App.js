import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Works from './components/Works/Works';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <div className='bg-gray-200'>
        <Navbar />
        <Banner />
        <Works />
        <Skills />
        <Contact />
      </div>


      <ToastContainer />
    </div>
  );
}

export default App;

import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
    {/* <FontAwesomeIcon icon={faEnvelope} /> */}

    <Navbar/>
    <Hero/>
    </>
  );
}

export default App;

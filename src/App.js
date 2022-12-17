import './App.css';
import NavBar from './components/NavBar';
import Homes from './components/Homes';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portofolio from './components/Portofolio';
import Exprience from './components/Exprience';
import Contact from './components/Contact';

function App() {
    return ( 
    <div>
      <NavBar />
      <Homes />
      <About />
      <Portofolio />
      <Exprience />
      <Contact />

      <SocialLinks />
    </div>
    )
}

export default App;
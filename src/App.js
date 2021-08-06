import Promo from './components/Promo';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import './sass/App.scss';

function App() {
  return (
    <div className="App">
      <Promo />
      <About />
      <Resume />
      <Skills />
      <Portfolio />
      <Contacts /> 
    </div>
  );
}

export default App


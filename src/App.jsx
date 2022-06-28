import './App.css';
import Navbar from './components/Navbar/navbar';
import Main from './containers/Main/main';
import Footer from './components/Footer/footer';
import About from './containers/About/about';
import Experience from './containers/Experience/experience';
import Tecnologies from './containers/Tecnologies/tecnologies';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <Main/>
      <About/>
      <Experience/>
      <Tecnologies/>
      <Footer/>
    </div>
  );
}

export default App;

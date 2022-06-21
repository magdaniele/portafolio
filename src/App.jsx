import './App.css';
import Tecnology from './components/Tecnology/tecnology';
import Navbar from './components/Navbar/navbar';
import Main from './containers/Main/main';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <Main/>
      <Tecnology/>
      <Footer/>
    </div>
  );
}

export default App;

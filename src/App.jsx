import './App.css';
import { useInView } from "react-intersection-observer";
import Navbar from './components/Navbar/navbar';
import Main from './containers/Main/main';
import Footer from './components/Footer/footer';
import React  from 'react';
import About from './containers/About/about';
import Experience from './containers/Experience/experience';
import Tecnologies from './containers/Tecnologies/tecnologies'; 

function App() {
  const [section1Ref, section1InView] = useInView({ threshold: 0.5 });
  const [section2Ref, section2InView] = useInView({ threshold: 0.5 });
  const [section3Ref, section3InView] = useInView({ threshold: 0.5 });
  const [section4Ref, section4InView] = useInView({ threshold: 0.5 });
  return (
    <div className="App">
      <header className="App-header">
        <Navbar section1={section1InView} section2={section2InView} section3={section3InView} section4={section4InView}/>
      </header>
      <Main innerRef={section1Ref}/>
      <About innerRef={section2Ref}/>
      <Tecnologies innerRef={section3Ref}/> 
       <Experience innerRef={section4Ref}/>
      <Footer/>
    </div>
  );
}

export default App;

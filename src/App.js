import About from "./About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";


function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About />
      <Portfolio/>
      <Skills/>

      <SocialLinks/>
      
    </div>
  );
}

export default App;

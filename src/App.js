import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";


function App() {
    return (
      <div className="flex flex-col space-y-16 min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <NavBar />
        <Home />
        <About />
        <Experience />
        <Portfolio />
        <Skills />
        <Contact />
        <Footer />
        <SocialLinks />
      </div>
    );
}

export default App;

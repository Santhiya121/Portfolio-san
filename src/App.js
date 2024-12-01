import AboutMe from "./components/aboutPage";
import Contact from "./components/contactPage";
import Education from "./components/eduPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/homePage";
import Projects from "./components/projectPage";
import './App.css';
import Intern from "./components/internPage";


export default function App() {
  return (
    <>
      <Header />
      
      {/* Sections with corresponding ids */}
      <section id="home">
        <Home />
      </section>
      
      <section id="about">
        <AboutMe />
      </section>
      
      <section id="projects">
        <Projects />
      </section>
      
      <section id="education">
        <Education />
      </section>

      <section id="intern">
         <Intern/>
      </section>
      
      <section id="contact">
        <Contact />
      </section>
      
      <Footer />
    </>
  );
}

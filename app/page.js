// app/page.js
import About from '../app/components/About';
import Education from '../app/components/Education';
// import Experiences from '../app/components/Experiences';
import Footer from '../app/components/Footer';
import Hello from '../app/components/Hello';
// import Navbar from './components/Navbar';
import Projects from '../app/components/Projects';
import Qualification from '../app/components/Qualification';
import Tech from '../app/components/Tech';
import Contact from './components/Contact';
import NavTest from './components/NavTest';

export default function Home() {
  return (
    <div id='home'>
      <NavTest />
      <Hello />
      <Tech />
      <About />
      <Education />
      <Qualification />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

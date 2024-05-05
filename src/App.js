import Aboutme from "./Body/Aboutme";
import Archiving from "./Body/Archiving";
import Intro from "./Body/Intro";
import Projects from "./Body/Projects";
import Skills from "./Body/Skills";
import "./Css/App.css";


function App() {
  return (
    <div className="App">

      <Intro/>
      <Aboutme/>
      <Skills/>
      <Projects/>
      <Archiving/>

    </div>
  );
}

export default App;

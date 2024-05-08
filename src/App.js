import { createContext, useEffect, useState } from "react";
import Profile from "./Body/Profile";
import Archiving from "./Body/Archiving";
import Intro from "./Body/Intro";
import Projects from "./Body/Projects";
import Skills from "./Body/Skills";
import Chrome from "./components/header/Chrome";
import "./Css/App.css";
import "./Css/dust.css";
export const scrollContext = createContext(null);
function App() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setScrollY(scrollPosition)
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return () => {
      window.removeEventListener('scroll', handleScroll)
      }
  }, []);
  return (
    
    <div className="App">
      
      <scrollContext.Provider value={{scrollY}}>
        <div className="full-wh">	
          <div className="bg-animation">
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <div id='stars4'></div>
          </div>
        </div>
        <Intro />
        <div className="chrome">
          <Chrome />
          <div className={scrollY>=2710?"bgcAble":"bgcUnable"}>  
            
            <Profile />
            <Skills />
            <Projects />
            <Archiving /> 
          </div> 
          
       
        </div>
        
      </scrollContext.Provider>  

    </div>
  );
}

export default App;

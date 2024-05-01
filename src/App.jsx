import "./App.css";

import ArrowDown from "./assets/arrow-down.svg";
import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Banner from "./components/Banner.jsx";
import Projects from "./components/Projects.jsx";
import TechStack from "./components/TechStack.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="max-w-5xl m-auto relative">
      <Header scrolling={scrolling} />
      <main className="relative mt-28">
        {/* Intro/Banner section */}
        <Banner />
        {/* Projects section */}
        <Projects />
        {/* Technoglies section */}
        <TechStack />
        {/* Additional skills section */}
        <Skills />
        {/* About me section */}
        <About />
      </main>
      <Footer />
      {scrolling && (
        <button
          className="fixed block right-8 bottom-0 w-24"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={ArrowDown} />
        </button>
      )}
    </div>
  );
}

export default App;

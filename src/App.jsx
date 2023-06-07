import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/skills";
import Projects from "./components/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-test px-6 sm:px-10 lg:px-[165px] bg-primary-dark text-primary-white">
      <Header />
      <Hero />
      <Skills />
      <Projects/>
    </div>
  );
}

export default App;

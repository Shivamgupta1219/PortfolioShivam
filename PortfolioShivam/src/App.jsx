import About from "./Components/About/About";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Project from "./Components/Projects/Project";
import Skill from "./Components/Skill";

export default function App() {
  return (
    <>
      {/* <h1>hello shivam</h1> */}
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
    </>
  );
}

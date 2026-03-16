import Image from "next/image";
import Link from "next/link";
import About from "./components/about";
import Header from "./components/header";
import HomeCollage from "./components/homeCollage";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Contact from "./components/contact";



export default function Home() {
  return (
    <div>
      <Header />
      <HomeCollage />

      <About />
      <Projects />
      <Experience />
      <Contact />
      

    </div>
  );
}

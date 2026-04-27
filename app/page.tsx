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
    <main className="w-full overflow-x-hidden pt-24 md:pt-28">
      <Header />
      <HomeCollage />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}

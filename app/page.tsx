import Image from "next/image";
import Link from "next/link";
import About from "./components/about";
import Header from "./components/header";
import HomeCollage from "./components/homeCollage";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeCollage />
      <About />
      

    </div>
  );
}

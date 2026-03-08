import Image from "next/image";
import Link from "next/link";
import Bio from "./components/bio";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-between pb-30 pt-5 pl-5 pr-5"> 
        <h4>Parineet Sond</h4>
      
        <div className="flex flex-row gap-4 bg-blue-200 p-2 px-10">
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href = "/experience">Experience</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className = "flex justify-center">
        <div className="relative w-[900px] h-[400px] bg-gray-200">
          <Image
            src="/CU1.png"
            alt="picture of CU1"
            width={300}
            height={200}
            className="absolute top-0 left-0 rotate-[-6deg]"
          />
          

          <Image
            src="/FHTC2.png"
            alt="picture of FHTC project"
            width={300}
            height={200}
            className="absolute top-12 left-24 rotate-[8deg]"
          />

          <Image
            src="/javascript.png"
            alt="picture of JS logo"
            width={150}
            height={200}
            className="absolute top-24 left-1 rotate-[-3deg]"
          />

          <Image
            src="/mentor.png"
            alt="picture of mentor slide"
            width={300}
            height={200}
            className="absolute top-24 left-1 rotate-[-3deg]"
          />

          <Image
            src="/pinterest.png"
            alt="picture of pinterest logo"
            width={100}
            height={200}
            className="absolute top-24 left-1 rotate-[-3deg]"
          />

          <Image
            src="/react.png"
            alt="picture of react logo"
            width={300}
            height={200}
            className="absolute top-24 left-1 rotate-[-3deg]"
          />

          <Image
            src="/shatterMe.png"
            alt="picture of mentor slide"
            width={100}
            height={200}
            className="absolute top-24 left-1 rotate-[-3deg]"
          />

          <Image
            src="/sweaterWeather.png"
            alt="picture of sweater Weather by The Neighbourhood"
            width={100}
            height={200}
            className="absolute top-25 left-150 rotate-[5deg] rounded-lg"
          />

          <Image
            src="/Sweet-T thumbnail.png"
            alt="picture of Sweet-T website thumbnail"
            width={300}
            height={200}
            className="absolute top-24 left-1 rotate-[-3deg]"
          />

          {/* <Image
            src="/Sweet-T2.png"
            alt="picture of Sweet-T website thumbnail"
            width={300}
            height={200}
            className="absolute top-24 left-1 rotate-[-3deg]"
          /> */}
        </div>
      </div>
      
    
      <Bio />
    </div>
  );
}

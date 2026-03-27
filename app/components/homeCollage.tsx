import Image from "next/image";

export default function HomeCollage(){
  return(
    <div className = "flex justify-center">
      <div className="relative w-screen h-[800px]">

        <div className = "absolute top-[55%] left-[-4%]">
          <Image
            src="/CU1.png"
            alt="picture of CU1"
            width={350}
            height={200}
            className="rounded-xl shadow-2xl"
          />
        </div>
        
        <div className = "absolute top-[23%] -right-30 z-50 -rotate-6">
          <Image
            src="/mentor.png"
            alt="picture of mentor slide"
            width={320}
            height={200}
            className="rounded-xl shadow-2xl"
          />
        </div>


        <div className = "absolute top-[50%] left-[11%] z-30">
          <Image
            src="/shatterMe.png"
            alt="picture of fav book"
            width={120}
            height={200}
            className="rounded-xl shadow-2xl"
          />
        </div>

        <div className="absolute top-[28%] left-[30%] z-30 rotate-[10deg]">
          <Image
            src="/sweaterWeather.png"
            alt="fav song"
            width={135} 
            height={150}
            className="rounded-xl shadow-2xl"
          />
        </div>

  

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -translate-y-[70%] z-20">
          <Image
            src="/aboutMe1.png"
            alt="picture of me (main)"
            width={430} 
            height={480}
            className="rounded-[40px] shadow-2xl"
          />
        </div>

        <div className = "absolute top-[40%] right-0 z-40">
          <Image
            src="/motorola.png"
            alt="picture of me at motorola"
            width={230}
            height={200}
            className="rounded-[40px] shadow-2xl"
          />
        </div>

        <div className = "absolute top-[30%] left-[62%] z-25 rotate-6">
          <Image
            src="/cars.png"
            alt="picture of cars event chicago"
            width={400}
            height={200}
            className="rounded-[40px] shadow-2xl"
          />
        </div>

        <div className="absolute top-[17%] left-[15%] z-10 ">
          <Image
            src="/sparkHacks.png"
            alt="picture of me at sparkHacks"
            width={270}
            height={200}
            className="rounded-2xl"
          />
        </div>

        <div className="absolute top-[65%] -left-66 w-full z-50 text-center">
          <p className="text-5xl font-bold font-sans text-yellow-600">
            <span className="tracking-[0.13em]">Student.Mentor.</span><br />
            Developer.Engineer.
          </p>
        </div>

        <div className="absolute top-[65%] left-[60%] max-w-[250px] z-50">
          <p className="text-sm text-green-700 font-mono leading-relaxed ">
            I build digital experiences that bridge the gap between creative design and clean, functional code. 
            Passionate about mentoring others and learning new stacks.
          </p>
        </div>

    
      </div>
    </div>

  );
}
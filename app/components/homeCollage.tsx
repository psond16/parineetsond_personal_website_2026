import Image from "next/image";

export default function HomeCollage(){
  return(
    <div className = "flex justify-center">
      <div className="relative w-screen h-[800px] bg-gray-200">
        <Image
          src="/CU1.png"
          alt="picture of CU1"
          width={300}
          height={200}
          className="absolute top-20 left-30"
        />
      
        <Image
          src="/mentor.png"
          alt="picture of mentor slide"
          width={300}
          height={200}
          className="absolute top-24 left-1 "
        />



        <Image
          src="/shatterMe.png"
          alt="picture of mentor slide"
          width={100}
          height={200}
          className="absolute top-24 left-1 "
        />

        <div className="absolute top-[40%] left-[30%] z-30 rotate-[10deg]">
          <Image
            src="/sweaterWeather.png"
            alt="Spotify Player"
            width={150} 
            height={150}
            className="rounded-xl shadow-2xl"
          />
        </div>

        <Image
          src="/Sweet-T thumbnail.png"
          alt="picture of Sweet-T website thumbnail"
          width={300}
          height={200}
          className="absolute top-24 left-1"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <Image
              src="/aboutMe1.png"
              alt="picture of me (main)"
              width={340} // Adjust based on your preference
              height={480}
              className="rounded-[40px] shadow-2xl"
            />
          </div>

        <Image
          src="/motorola.jpg"
          alt="picture of me at mototeola"
          width={300}
          height={200}
          className="absolute top-24 left-1"
        />

        <div className="absolute top-[40%] left-[20%] z-10 ">
          <Image
            src="/SparkHacks.png"
            alt="picture of me at sparkHacks"
            width={300}
            height={200}
            className="rounded-2xl"
          />
        </div>

    
      </div>
    </div>

  );
}
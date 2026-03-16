import Image from "next/image";

export default function About(){
    return(
        <div className=" relative h-[800px] w-screen">
        
            <div className="text-left mt-10 mb-8 pl-30 pr-20">
                <h1 className=" absolute text-[120px] font-bold font-mono text-red-800 uppercase tracking-tighter z-60">About<br /> Me</h1>
            </div>

            <div className="absolute top-[55%] left-[22%] max-w-[350px] z-50 -rotate-11">
                <p className="font-mono text-sm text-amber-950 p-4 rounded-lg leading-relaxed">Hi! I’m Parineet Sond, a computer science and Honors student at UIC who loves turning ideas into interactive experiences...</p>
            </div>

     
            <div className="absolute right-[20%] top-[50%] z-50">
                <Image
                    src="/sparkHacks1.png"
                    alt="picture of me at sparkhacks"
                    width={300} 
                    height={480}
                    className="rounded-xl shadow-2xl"
                />
            </div>
            

            <div className="absolute right-[10%] top-[20%] z-20">
                <Image
                    src="/motorola-group.jpg"
                    alt="picture of me at motorola"
                    width={400} 
                    height={480}
                    className="rounded-xl shadow-2xl"
                />
            </div>

            <div className="absolute right-[35%] top-[10%] z-30">
                <Image
                    src="/aboutMe3.png"
                    alt="picture of me in green blazer"
                    width={300} 
                    height={480}
                    className="rounded-xl shadow-2xl"
                />
            </div>

            <div className="absolute left-[15%] top-[30%] z-10 -rotate-6">
                <Image
                    src="/page.png"
                    alt="picture of ruled page"
                    width={550} 
                    height={480}
                />
            </div>

        
        </div>
    );
}
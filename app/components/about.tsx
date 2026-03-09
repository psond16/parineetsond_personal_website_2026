import Image from "next/image";

export default function About(){
    return(
        <div className="pb-90">
            <div>
                <h1>about me</h1>
                <p>Hi! I’m Parineet Sond, a computer science and Honors student at UIC who loves turning ideas into interactive experiences, whether it’s coding a responsive website or building a gamified chat app. Outside of tech, I’m all about music and love to sing along(not too good at it though!), late-night walks, and chasing beautiful evening sunsets, mountains over beaches any day. I’m a big foodie and love relaxing with close friends over board games, calligraphy sessions, or just a good conversation. I’m fluent in English, Punjabi, and Hindi, enjoy dressing up and capturing moments in photos, and I’m learning to balance my carefully planned life with spontaneous adventures. Always curious, creative, and ready to explore something new, whether it’s a project or a new experience. </p>

            </div>
            <div className="relative">
                <Image
                    src="/aboutMe1.png"
                    alt="picture of me"
                    width={300}
                    height={200}
                    className="absolute top-0 left-0 rotate-[-6deg]"
                />
            

                <Image
                    src="/aboutMe2.png"
                    alt="picture of me"
                    width={300}
                    height={200}
                    className="absolute top-12 left-24 rotate-[8deg]"
                />

                <Image
                    src="/aboutMe3.png"
                    alt="picture of me"
                    width={150}
                    height={200}
                    className="absolute top-24 left-1 rotate-[-3deg]"
                />

                {/* <Image
                    src="/aboutMe3.png"
                    alt="picture of me"
                    width={300}
                    height={200}
                    className="absolute top-24 left-1 rotate-[-3deg]"
                /> */}
            </div>
        </div>
    );
}
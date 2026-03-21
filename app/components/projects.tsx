import Link from "next/link";
import Image from "next/image"

export default function Projects(){
    return(
        <div>
            <div>
                <h1>My Projects</h1>
            </div>
            {/* -----project-1 ------ */}
            <div className = "project1">
                <p>• Designed and coded frontend interface for a local bakery website using HTML, Tailwind CSS, JavaScript, and Astro.
                    • Translated the bakery owner’s requirements into interactive page layouts and responsive UI components.
                    • Created wireframes and prototypes in Figma, then implementing them into production-ready code.
                    • Managed code with Git/GitHub, reviewing pull requests, and ensuring consistent styling and accessibility across the site.
                </p>
                <div className = "flex flex-row">
                    <Image
                        src="/Sweet-T thumbnail.png"
                        alt="picture of project"
                        width={300}
                        height={200}
                    />
                    <Image
                        src="/Sweet-T1.png"
                        alt="picture of project"
                        width={300}
                        height={200}
                    />
                    <Image
                        src="/Sweet-T2.png"
                        alt="picture of CUproject1"
                        width={300}
                        height={200}
                    />
                    <Image
                        src="/Sweet-T3.png"
                        alt="picture of project"
                        width={300}
                        height={200}
                    />
                </div>
                
            </div>

            {/* -----project-2 ------ */}
            <div class = "project2">
                <p>Designed and developed a website guiding 100+ potential international students annually through visa, travel, and relocation timelines.
                    Created 5+ transition stages with checklists and organized navigation to simplify complex preparation processes.
                    Built wireframes and implemented frontend features using HTML, CSS, and JavaScript, applying UX design principles.
                </p>
                <div className = "flex flex-row">
                    <Image
                        src="/FHTC1.png"
                        alt="picture of project"
                        width={300}
                        height={200}
                    />
                    <Image
                        src="/FHTC2.png"
                        alt="picture of project"
                        width={300}
                        height={200}
                    />
                    <Image
                        src="/FHTC3.png"
                        alt="picture of project"
                        width={300}
                        height={200}
                    />
                </div>
                
            </div>

            {/* -----project-3 ------ */}
            <div class = "project3">
                <p>• Developed backend features using Django, Python, and MySQL, including database models, APIs, authentication, and core game logic.
                    • Contributed around 5 merged code updates per week through Git/GitHub and coordinated with 2 frontend
                    developers for smooth integration.
                    • Assisted with feature planning and designing backend systems for daily tasks and gamified user interactions.
                </p>
                <div className = "flex flex-row">
                    <Image
                        src="/GCA.png"
                        alt="picture of project"
                        width={300}
                        height={200}
                    />
                    
                </div>
                
            </div>
        </div>
    );
}
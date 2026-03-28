import Link from "next/link";

export default function Contact(){
    return(
        <div className = "flex flex-column" id = "contact">
            <h1>Contact Me</h1>

            <div className="flex flex-col gap-4 items-start p-10">

            {/* Email */}
            <p>
                <span className="font-semibold">Email:</span>{" "}
                <a href="mailto:parineetsond16@gmail.com" className="text-blue-500 underline">parineetsond16@gmail.com
                </a>
            </p>

            {/* LinkedIn button */}
            <a
                href="https://www.linkedin.com/in/parineetsond/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className=" rounded-md bg-blue-600">
                LinkedIn
                </button>
            </a>

            {/* GitHub button */}
            <a
                href="https://github.com/psond16"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="rounded-md bg-blue-600">
                GitHub
                </button>
            </a>

            </div>

        </div>
    );
}
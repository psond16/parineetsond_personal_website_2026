import Link from "next/link";

export default function Header(){
    return(
        <div className="flex items-center justify-between pb-8 pt-5 px-5">
            <h4>Parineet Sond</h4>

            <div className="flex flex-row gap-4 bg-blue-200 p-2 px-10">
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/experience">Experience</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </div>
    );
}
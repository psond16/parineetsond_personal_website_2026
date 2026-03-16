import Link from "next/link";

export default function Header(){
    return(
        <div className="flex items-center justify-between pb-8 pt-5 px-5 pl-10 pr-20">
            <h4 className="text-1xl underline font-mono tracking-tight text-green-700">parineet<br /> sond</h4>

            <div className=" text-1xl flex font-mono flex-row gap-30 border border-solid border-green-800 p-2 px-10 rounded-xl">
                <Link href="/about" className="underline text-green-700">About</Link>
                <Link href="/projects" className="underline text-green-700">Projects</Link>
                <Link href="/experience" className="underline text-green-700">Experience</Link>
                <Link href="/contact" className="underline text-green-700">Contact</Link>
            </div>
        </div>
    );
}
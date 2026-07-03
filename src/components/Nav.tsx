import { Link } from "react-router-dom";

export default function Nav() {
    return (
    <nav className="w-full p-4 backdrop-blur-lg flex gap-4 items-center lg:gap-20">
        <div className="leading-tight text-nowrap items-center"><h1 className="leading-tight text-xl font-bold">Kiran</h1><span className="text-base leading-tight"> Portfolio</span></div>
        <div className="flex justify-around items-center w-full flex-col lg:flex-row">
            <Link className="hover:text-[#f694fb] py-2 px-4 font-semibold hover:font-bold" to="/">
                Home
            </Link>
            <Link className="hover:text-[#f694fb] py-2 px-4 font-semibold hover:font-bold" to="/works">
                My Works
            </Link>
            <Link className="hover:text-[#f694fb] py-2 px-4 font-semibold hover:font-bold" to="/contact">
                Send me a message
            </Link>
            <Link className="hover:text-[#f694fb] py-2 px-4 font-semibold hover:font-bold" to="/resume">
                Resume
            </Link>
        </div>

    </nav>)
}

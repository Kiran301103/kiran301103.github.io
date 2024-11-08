export default function Nav() {
    return (
    <nav className="w-full p-4 backdrop-blur-lg flex gap-4 items-center lg:gap-20">
        <div className="leading-tight text-nowrap items-center"><h1 className="leading-tight text-xl font-bold">Kiran</h1><span className="text-base leading-tight"> Portfolio</span></div>
        <div className="flex justify-around items-center w-full flex-col lg:flex-row">
            <button className="hover:text-[#f694fb] py-2 px-4 font-semibold hover:font-bold" onClick={() => window.location.href = "/"}>
                Home
            </button>
            <button className="hover:text-[#f694fb] py-2 px-4 font-semibold hover:font-bold" onClick={() => window.location.href = "/#/works"}>
                My Works
            </button>
            <button className="hover:text-[#f694fb] py-2 px-4 font-semibold hover:font-bold" onClick={() => window.location.href = "/#/contact"}>
                Send me a message
            </button>
            <button className="hover:text-[#f694fb] py-2 px-4 font-semibold hover:font-bold" onClick={() => window.location.href = "/#/resume"}>
                Resume
            </button>
            {/* <button className="hover:text-[#f694fb] py-2 px-4 font-semibold hover:font-bold" onClick={() => window.location.href = "/#/blogs"}>
                Blogs
            </button> */}
        </div>

    </nav>)
}
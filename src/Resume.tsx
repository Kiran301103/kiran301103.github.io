// @ts-nocheck

import { FaDownload } from "react-icons/fa";

export default function Resume() {

    return (
        <div className="p-4 h-full">
            <div className="flex justify-between w-full">
                <h1 className="text-3xl font-bold">Resume</h1>
                <a className="flex items-center gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="Kiran-Resume.pdf" download>Download <FaDownload /></a>
            </div>
            <embed src="Kiran-Resume.pdf" className="mt-4 w-full h-[85%]" />
        </div>
    )
}
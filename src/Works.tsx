// @ts-nocheck

import { FaGithubSquare, FaInternetExplorer } from "react-icons/fa";

export default function Works() {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold">My Works</h1>
            <div className="mt-8 p-4 grid grid-cols-1 gap-8 lg:grid-cols-3 pb-12">
                <div className="p-4 bg-[rgba(246,148,251,.2)] flex flex-col justify-between backdrop-blur-md rounded-xl self-stretch min-h-[200px] hover:bg-[rgba(246,148,251,.4)] cursor-pointer">
                    <div className="font-bold text-lg">Tasker</div>
                    Simple task management app with some extra features.
                    <div className="mt-4 flex gap-2 h-10">
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="https://tasker.nannan.in" target="_blank"><FaInternetExplorer className="w-6 h-6" /> Try Tasker</a>
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="https://github.com/nanna7077/tasker" target="_blank"><FaGithubSquare className="w-6 h-6" /> View on Github</a>
                    </div>
                </div>
                <div className="p-4 bg-[rgba(246,148,251,.2)] flex flex-col justify-between backdrop-blur-md rounded-xl self-stretch min-h-[200px] hover:bg-[rgba(246,148,251,.4)] cursor-pointer">
                    <div className="font-bold text-lg">Draw</div>
                    A simple drawable web-app that allows you to draw on the screen with a few additional features, inspired by Apple's Math Notes.
                    <div className="mt-4 flex gap-2 h-10">
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="https://draw.nannan.in" target="_blank"><FaInternetExplorer className="w-6 h-6" /> Try Draw</a>
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="https://github.com/nanna7077/draw" target="_blank"><FaGithubSquare className="w-6 h-6" /> View on Github</a>
                    </div>
                </div>
                <div className="p-4 bg-[rgba(246,148,251,.2)] flex flex-col justify-between backdrop-blur-md rounded-xl self-stretch min-h-[200px] hover:bg-[rgba(246,148,251,.4)] cursor-pointer">
                    <div className="font-bold text-lg">Uzume</div>
                    A simple video streamer with transcoding support for linux systems. 
                    <div className="mt-4 flex gap-2 h-10">
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="https://github.com/nanna7077/uzume" target="_blank"><FaGithubSquare className="w-6 h-6" /> View on Github</a>
                    </div>
                </div>
                <div className="p-4 bg-[rgba(246,148,251,.2)] flex flex-col justify-between backdrop-blur-md rounded-xl self-stretch min-h-[200px] hover:bg-[rgba(246,148,251,.4)] cursor-pointer">
                    <div className="font-bold text-lg">Worksy</div>
                    Work finding platform for everyday workers. Built for Google Solutions Challenge 2024.
                    <div className="mt-4 flex gap-2 h-10">
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="https://github.com/nanna7077/worksy" target="_blank"><FaGithubSquare className="w-6 h-6" /> View on Github</a>
                    </div>
                </div>
                <div className="p-4 bg-[rgba(246,148,251,.2)] flex flex-col justify-between backdrop-blur-md rounded-xl self-stretch min-h-[200px] hover:bg-[rgba(246,148,251,.4)] cursor-pointer">
                    <div className="font-bold text-lg">Project Management Portal</div>
                    Academic Project Management Portal with features such as collaboration, task management, marking, Github integration and more!
                    <div className="mt-4 flex gap-2 h-10">
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="https://github.com/nanna7077/worksy" target="_blank"><FaInternetExplorer className="w-6 h-6" /> View Deployment</a>
                    </div>
                </div>
                <div className="p-4 bg-[rgba(246,148,251,.2)] flex flex-col justify-between backdrop-blur-md rounded-xl self-stretch min-h-[200px] hover:bg-[rgba(246,148,251,.4)] cursor-pointer">
                    <div className="font-bold text-lg">Chocola</div>
                    An anime focused Discord bot! Everything anime and manga in one place and at the comfortable reach through Discord with around 192523 users and in 328 servers.
                    <div className="mt-4 flex gap-2 h-10">
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="https://chocola.nannan.in" target="_blank"><FaInternetExplorer className="w-6 h-6" /> Try Chocola</a>
                    </div>
                </div>
                <div className="p-4 bg-[rgba(246,148,251,.2)] flex flex-col justify-between backdrop-blur-md rounded-xl self-stretch min-h-[200px] hover:bg-[rgba(246,148,251,.4)] cursor-pointer">
                    <div className="font-bold text-lg">Dictionary</div>
                    A simple Dictionary application written in GTK4.
                    <div className="mt-4 flex gap-2 h-10">
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="https://github.com/nanna7077/Dictionary" target="_blank"><FaGithubSquare className="w-6 h-6" /> View on Github</a>
                    </div>
                </div>
                <div className="p-4 bg-[rgba(246,148,251,.2)] flex flex-col justify-between backdrop-blur-md rounded-xl self-stretch min-h-[200px] hover:bg-[rgba(246,148,251,.4)] cursor-pointer">
                    <div className="font-bold text-lg">Luna</div>
                    Yet another code editor that runs in your browser.
                    <div className="text-sm">Luna is a simple code editor that uses Microsoft's Monaco to provide you an easy to use full fledged code editor with bells and whistles such as syntax highlighting, auto save included.</div>
                    <div className="mt-4 flex gap-2 h-10">
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="https://bit.ly/lunaEditor" target="_blank"><FaInternetExplorer className="w-6 h-6" /> Try Luna</a>
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="https://github.com/nanna7077/Luna" target="_blank"><FaGithubSquare className="w-6 h-6" /> View on Github</a>
                    </div>
                </div>
                <div className="p-4 bg-[rgba(246,148,251,.2)] flex flex-col justify-between backdrop-blur-md rounded-xl self-stretch min-h-[200px] hover:bg-[rgba(246,148,251,.4)] cursor-pointer">
                    <div className="font-bold text-lg">Wiresnitch</div>
                    An easy-to-use network monitoring program for Linux.
                    <div className="text-sm">Wiresnitch is a beautiful, intitutive and light network monitoring application that allows you to view all data usage on a per application basis.</div>
                    <div className="mt-4 flex gap-2 h-10">
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="https://github.com/nanna7077/wiresnitch" target="_blank"><FaGithubSquare className="w-6 h-6" /> View on Github</a>
                    </div>
                </div>
                <div className="p-4 bg-[rgba(246,148,251,.2)] flex flex-col justify-between backdrop-blur-md rounded-xl self-stretch min-h-[200px] hover:bg-[rgba(246,148,251,.4)] cursor-pointer">
                    <div className="font-bold text-lg">Pixelate</div>
                    Easy to use and light Image Pixelation.
                    <div className="text-sm">Simple GTK application that allows the user to select an image and pixelation amount with a live preview of pixelation and save a pixelated image. Written for LHD Build 2022</div>
                    <div className="mt-4 flex gap-2 h-10">
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="https://github.com/nanna7077/LHDBuild22/tree/main/Pixelate" target="_blank"><FaGithubSquare className="w-6 h-6" /> View on Github</a>
                    </div>
                </div>
                <div className="p-4 bg-[rgba(246,148,251,.2)] flex flex-col justify-between backdrop-blur-md rounded-xl self-stretch min-h-[200px] hover:bg-[rgba(246,148,251,.4)] cursor-pointer">
                    <div className="font-bold text-lg">XKeylogger</div>
                    An simple keylogger for Linux systems that uses X Window system.
                    <div className="text-sm">Written in Python, XKeylogger allows you to log all keystokes on victim's computer without superuser privileges and allow sending logged data to a webhook too!</div>
                    <div className="mt-4 flex gap-2 h-10">
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="https://github.com/nanna7077/XKeylogger" target="_blank"><FaGithubSquare className="w-6 h-6" /> View on Github</a>
                    </div>
                </div>
                <div className="p-4 bg-[rgba(246,148,251,.2)] flex flex-col justify-between backdrop-blur-md rounded-xl self-stretch min-h-[200px] hover:bg-[rgba(246,148,251,.4)] cursor-pointer">
                    <div className="font-bold text-lg">WallSpot</div>
                    A simple program to display current playing from Spotify app on your desktop.
                    <div className="text-sm">Display your current playing track right on your desktop. No authentication or additional privileges required!</div>
                    <div className="mt-4 flex gap-2 h-10">
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="https://github.com/nanna7077/WallSpot" target="_blank"><FaGithubSquare className="w-6 h-6" /> View on Github</a>
                    </div>
                </div>
                <div className="p-4 bg-[rgba(246,148,251,.2)] flex flex-col justify-between backdrop-blur-md rounded-xl self-stretch min-h-[200px] hover:bg-[rgba(246,148,251,.4)] cursor-pointer">
                    <div className="font-bold text-lg">Aeode</div>
                    A simple and clean cross-platform music player.
                    <div className="mt-4 flex gap-2 h-10">
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="https://github.com/nanna7077/aoede" target="_blank"><FaGithubSquare className="w-6 h-6" /> View on Github</a>
                    </div>
                </div>
                <div className="p-4 bg-[rgba(246,148,251,.2)] flex flex-col justify-between backdrop-blur-md rounded-xl self-stretch min-h-[200px] hover:bg-[rgba(246,148,251,.4)] cursor-pointer">
                    <div className="font-bold text-lg">SpaceCat</div>
                    Guide Space Commander Mr. Cat through the vastness of the space without colliding on asteroids.
                    <div className="text-sm">A fun single-button game written in pure JavaScript to kill time! Written for LHD 2022</div>
                    <div className="mt-4 flex gap-2 h-10">
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="https://nanna7077.github.io/LHDBuild22/SpaceCat/" target="_blank"><FaInternetExplorer className="w-6 h-6" /> Play Now</a>
                        <a className="flex items-center w-full gap-2 bg-[#f694fb] hover:bg-[#f694fb]/80 p-2 rounded-lg text-black" href="https://github.com/nanna7077/LHDBuild22/tree/main/SpaceCat" target="_blank"><FaGithubSquare className="w-6 h-6" /> View on Github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
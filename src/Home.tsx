// @ts-nocheck

import { useEffect, useState } from "react";
import TextTransition, {presets} from "react-text-transition";
import { FaGithubSquare, FaLinkedin, FaMailBulk, FaPhoneSquare } from "react-icons/fa";

export default function Home() {
    const [greeting, setGreeting] = useState("Hello");
    const greetings = ["Hello", "Hola", "Bonjour", "Hallo", "Ciao", "こんにちは", "नमस्ते", "வணக்கம்", "ഹലോ", "ನಮಸ್ಕಾರ", "హలో"];
    var changeGreetingTimeout = null;
    var currentGreetingIndex = 0;

    const [role, setRole] = useState('Artificial Intelligence','Information Technology');
    const roles = ["AI Developer", "Web Developer", "Flutter Developer"];
    var currentRoleIndex = 0;

    function changeGreetingandRole() {
        // if (currentGreetingIndex >= greetings.length) currentGreetingIndex = 0;
        // setGreeting(greetings[currentGreetingIndex++]);
        if (currentRoleIndex >= roles.length) currentRoleIndex = 0;
        setRole(roles[currentRoleIndex++]);
        clearTimeout(changeGreetingTimeout);
        changeGreetingTimeout = setTimeout(changeGreetingandRole, 2000);
    }

    useEffect(() => {
        if (changeGreetingTimeout === null) changeGreetingandRole();
    }, [])
    
    return (
        <div className="p-4">
            <div className="mt-16 text-center flex justify-center font-bold text-nowrap flex-wrap text-[2rem] lg:text-[4rem]">
                {/* <TextTransition children={greeting + ","} springConfig={presets.gentle} className="text-[#f694fb] text-nowrap" />&nbsp;I am Kiran */}
                Hello! I am Kiran
            </div>
            <div className="mt-8 text-2xl font-bold text-nowrap flex justify-center"><TextTransition children={role} springConfig={presets.molasses} /></div>
            <div className="mt-16 flex justify-center gap-12 flex-col lg:flex-row items-center">
                <div className="flex gap-2 text-lg cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/kiran301103/", "_blank")}>
                    <FaLinkedin className="w-8 h-8 fill-[#f694fb]" />
                    Kiran M
                </div>
                <div className="flex gap-2 text-lg cursor-pointer" onClick={() => window.open("https://github.com/Kiran301103", "_blank")}>
                    <FaGithubSquare className="w-8 h-8 fill-[#f694fb]" />
                    Kiran301103
                </div>
                <div className="flex gap-2 text-lg cursor-pointer" onClick={() => window.open("tel:+918870292116", "_blank")}>
                    <FaPhoneSquare className="w-8 h-8 fill-[#f694fb]" />
                    +918870292116
                </div>
                <div className="flex gap-2 text-lg items-center">
                    <FaMailBulk className="w-8 h-8 fill-[#f694fb]" />
                    <div className="flex flex-col">
                        <div onClick={() => window.open("mailto:kiran301103@gmail.com", "_blank")} className="cursor-pointer">
                            kiran301103@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
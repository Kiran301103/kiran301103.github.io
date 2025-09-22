// @ts-nocheck

import { useEffect, useState, useRef } from "react";
import TextTransition, { presets } from "react-text-transition";
import { FaGithubSquare, FaLinkedin, FaMailBulk, FaPhoneSquare } from "react-icons/fa";

export default function Home() {
  const [greeting, setGreeting] = useState("Hello");
  const greetings = ["Hello", "Hola", "Bonjour", "Hallo", "Ciao", "こんにちは", "नमस्ते", "வணக்கம்", "ഹലോ", "ನಮಸ್ಕಾರ", "హలో"];

  const [role, setRole] = useState("Information Technology");
  const roles = ["AI Developer", "Web Developer", "Flutter Developer"];

  // useRef to persist across renders
  const currentRoleIndex = useRef(0);
  const changeGreetingTimeout = useRef(null);

  function changeGreetingandRole() {
    if (currentRoleIndex.current >= roles.length) currentRoleIndex.current = 0;
    setRole(roles[currentRoleIndex.current++]);

    clearTimeout(changeGreetingTimeout.current);
    changeGreetingTimeout.current = setTimeout(changeGreetingandRole, 2000);
  }

  useEffect(() => {
    if (changeGreetingTimeout.current === null) changeGreetingandRole();

    return () => clearTimeout(changeGreetingTimeout.current); // cleanup on unmount
  }, []);

  return (
    <div className="p-4">
      <div className="mt-16 text-center flex justify-center font-bold text-nowrap flex-wrap text-[2rem] lg:text-[4rem]">
        Hello! I am Kiran
      </div>
      <div className="mt-8 text-2xl font-bold text-nowrap flex justify-center">
        <TextTransition children={role} springConfig={presets.molasses} />
      </div>
      <div className="mt-16 flex justify-center gap-12 flex-col lg:flex-row items-center">
        <div
          className="flex gap-2 text-lg cursor-pointer"
          onClick={() => window.open("https://www.linkedin.com/in/kiran301103/", "_blank")}
        >
          <FaLinkedin className="w-8 h-8 fill-[#f694fb]" />
          Kiran M
        </div>
        <div
          className="flex gap-2 text-lg cursor-pointer"
          onClick={() => window.open("https://github.com/Kiran301103", "_blank")}
        >
          <FaGithubSquare className="w-8 h-8 fill-[#f694fb]" />
          Kiran301103
        </div>
        <div
          className="flex gap-2 text-lg cursor-pointer"
          onClick={() => window.open("tel:+918870292116", "_blank")}
        >
          <FaPhoneSquare className="w-8 h-8 fill-[#f694fb]" />
          +918870292116
        </div>
        <div className="flex gap-2 text-lg items-center">
          <FaMailBulk className="w-8 h-8 fill-[#f694fb]" />
          <div className="flex flex-col">
            <div
              onClick={() => window.open("mailto:kiran301103@gmail.com", "_blank")}
              className="cursor-pointer"
            >
              kiran301103@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

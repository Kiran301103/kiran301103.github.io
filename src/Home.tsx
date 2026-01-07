// @ts-nocheck

import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import { FaGithubSquare, FaLinkedin, FaMailBulk, FaPhoneSquare } from "react-icons/fa";

export default function Home() {
  const greetings = [
    "Hello",  "வணக்கம்","Hola", "Bonjour", "Hallo", "Ciao",
    "こんにちは", "नमस्ते", "ഹലോ", "ನಮಸ್ಕಾರ", "హలో"
  ];
  const roles = ["AI Developer", "Web Developer", "Flutter Developer"];

  const [greetingIndex, setGreetingIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="p-4">
      <div className="mt-16 text-center flex justify-center font-bold text-nowrap flex-wrap text-[2rem] lg:text-[4rem]">
        <TextTransition
          springConfig={presets.gentle}
          className="text-[#f694fb] text-nowrap"
        >
          {greetings[greetingIndex]},
        </TextTransition>
        &nbsp;I am Kiran
      </div>

      <div className="mt-8 text-2xl font-bold text-nowrap flex justify-center">
        <TextTransition springConfig={presets.molasses}>
          {roles[roleIndex]}
        </TextTransition>
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
          +353 892153053
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

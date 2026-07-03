// @ts-nocheck

import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import { FaGithubSquare, FaLinkedin, FaMailBulk, FaPhoneSquare } from "react-icons/fa";

export default function Home() {
  const greetings = [
    "Hello", "வணக்கம்", "Hola", "Bonjour", "Hallo", "Ciao",
    "こんにちは", "नमस्ते", "ഹലോ", "ನಮಸ್ಕಾರ", "హలో"
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

      <div className="mt-10 max-w-2xl mx-auto text-center text-lg leading-relaxed">
        MSc Advanced AI graduate (UCD, August 2026) and AI Engineer with production
        experience architecting and deploying GenAI and agentic AI solutions serving{" "}
        <span className="text-[#f694fb] font-bold">13,000+ users</span> on cloud
        infrastructure. Shipped production-grade RAG pipelines, multi-agent workflows,
        LLM inference services, and evaluation frameworks from conception to launch.
      </div>

      <div className="mt-16 flex justify-center gap-12 flex-col lg:flex-row items-center">
        <a
          className="flex gap-2 text-lg items-center"
          href="https://www.linkedin.com/in/kiran301103/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <FaLinkedin className="w-8 h-8 fill-[#f694fb]" />
          Kiran M
        </a>
        <a
          className="flex gap-2 text-lg items-center"
          href="https://github.com/Kiran301103"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <FaGithubSquare className="w-8 h-8 fill-[#f694fb]" />
          Kiran301103
        </a>
        <a
          className="flex gap-2 text-lg items-center"
          href="tel:+353892153053"
          aria-label="Call phone number"
        >
          <FaPhoneSquare className="w-8 h-8 fill-[#f694fb]" />
          +353 892153053
        </a>
        <a
          className="flex gap-2 text-lg items-center"
          href="mailto:kiran301103@gmail.com"
          aria-label="Send email"
        >
          <FaMailBulk className="w-8 h-8 fill-[#f694fb]" />
          kiran301103@gmail.com
        </a>
      </div>
    </div>
  );
}

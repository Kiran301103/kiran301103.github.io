// @ts-nocheck

import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener("mousemove", handleMouseMove);

        document.addEventListener("touchmove", handleMouseMove);
        document.addEventListener("touchstart", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("touchmove", handleMouseMove);
            document.removeEventListener("touchstart", handleMouseMove);
        };
    }, []);

    return <div className="custom-cursor" style={{ left: position.x, top: position.y }}></div>;
}

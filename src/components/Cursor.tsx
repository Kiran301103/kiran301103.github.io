// @ts-nocheck

import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        // Only show the custom cursor on devices with a real mouse pointer
        const hasHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
        setIsTouchDevice(!hasHover);
        if (!hasHover) return;

        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    if (isTouchDevice) return null;

    return <div className="custom-cursor" style={{ left: position.x, top: position.y }}></div>;
}

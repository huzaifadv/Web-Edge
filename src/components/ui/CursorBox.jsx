import { useEffect, useState } from "react";

export default function CursorBox() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveHandler);
    return () => {
      window.removeEventListener("mousemove", moveHandler);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-50"
      style={{
        transform: `translate3d(${position.x - 25}px, ${position.y - 25}px, 0)`,
      }}
    >
      <div
        className="w-9 h-9 rounded-full border-1 border-[#531ec7] bg-transparent flex items-center justify-center blur-[1px] opacity-60"
      >
        <div
          className="w-4 h-4 rounded-full bg-[#531ec7]"
         
        ></div>
      </div>
    </div>
  );
}

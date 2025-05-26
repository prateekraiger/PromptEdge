import React, { useEffect, useState } from "react";

const AnimatedBg = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base gradient with improved colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-cyan-900/30"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgMHYyaC0ydi0yaDJ6bTIgMGgydjJoLTJ2LTJ6bS02IDBoMnYyaC0ydi0yem0yLTRoMnYyaC0ydi0yem0yIDBIMzZ2Mmgtc3YtMnptMC00aDJ2MmgtMnYtMnptMiAwaDJ2MmgtMnYtMnptMi00aDJ2MmgtMnYtMnptLTQgMGgydjJoLTJ2LTJ6bTIgMGgydjJoLTJ2LTJ6bTIgMGgydjJoLTJ2LTJ6bS0yLTRoMnYyaC0ydi0yem0yIDBIMzZ2Mmgtc3YtMnptLTQgMGgydjJoLTJ2LTJ6bS0yIDBIMzB2Mmgtc3YtMnptLTQgNGgydjJoLTJ2LTJ6bTAgNGgydjJoLTJ2LTJ6bTQgMGgydjJoLTJ2LTJ6bTQgMGgydjJoLTJ2LTJ6bTIgMGgydjJoLTJ2LTJ6bS0yIDRoMnYyaC0ydi0yem0yIDBIMzZ2Mmgtc3YtMnptLTQgMGgydjJoLTJ2LTJ6bS0yIDBIMzB2Mmgtc3YtMnptLTIgMGgydjJoLTJ2LTJ6bS00IDBoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem00IDBoMnYyaC0ydi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>

      {/* Enhanced animated orbs */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>

      {/* Additional orbs with different animations */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

      {/* New floating orbs */}
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-bl from-pink-500/5 to-purple-500/5 rounded-full blur-xl animate-[pulse_8s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-gradient-to-tr from-yellow-500/5 to-orange-500/5 rounded-full blur-xl animate-[pulse_7s_ease-in-out_infinite]"></div>
    </div>
  );
};

export default AnimatedBg;

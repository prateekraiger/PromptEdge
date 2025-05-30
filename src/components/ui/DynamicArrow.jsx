import React, { useEffect, useRef, useCallback } from "react";

const parseRgbColor = (colorString) => {
  if (!colorString) return null;
  const match = colorString.match(
    /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/
  );
  if (match) {
    return {
      r: parseInt(match[1], 10),
      g: parseInt(match[2], 10),
      b: parseInt(match[3], 10),
    };
  }
  return null;
};

const DynamicArrow = ({ targetRef }) => {
  const canvasRef = useRef(null);
  const mousePosRef = useRef({ x: null, y: null });
  const ctxRef = useRef(null);
  const animationFrameIdRef = useRef(null);

  // Updated colors to match the website's theme
  const resolvedCanvasColorsRef = useRef({
    strokeStyle: { r: 59, g: 130, b: 246 }, // blue-500
    gradientStart: { r: 59, g: 130, b: 246 }, // blue-500
    gradientEnd: { r: 6, g: 182, b: 212 }, // cyan-500
  });

  useEffect(() => {
    const tempElement = document.createElement("div");
    tempElement.style.display = "none";
    document.body.appendChild(tempElement);

    const updateResolvedColors = () => {
      // Use fixed colors instead of theme colors for better visibility
      resolvedCanvasColorsRef.current = {
        strokeStyle: { r: 59, g: 130, b: 246 }, // blue-500
        gradientStart: { r: 59, g: 130, b: 246 }, // blue-500
        gradientEnd: { r: 6, g: 182, b: 212 }, // cyan-500
      };
    };
    updateResolvedColors();
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class" &&
          mutation.target === document.documentElement
        ) {
          updateResolvedColors();
          break;
        }
      }
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => {
      observer.disconnect();
      if (tempElement.parentNode) {
        tempElement.parentNode.removeChild(tempElement);
      }
    };
  }, []);

  const drawArrow = useCallback(() => {
    if (!canvasRef.current || !targetRef.current || !ctxRef.current) return;

    const targetEl = targetRef.current;
    const ctx = ctxRef.current;
    const mouse = mousePosRef.current;

    const x0 = mouse.x;
    const y0 = mouse.y;

    if (x0 === null || y0 === null) return;

    const rect = targetEl.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const a = Math.atan2(cy - y0, cx - x0);
    const x1 = cx - Math.cos(a) * (rect.width / 2 + 12);
    const y1 = cy - Math.sin(a) * (rect.height / 2 + 12);

    const midX = (x0 + x1) / 2;
    const midY = (y0 + y1) / 2;
    const offset = Math.min(200, Math.hypot(x1 - x0, y1 - y0) * 0.5);
    const t = Math.max(-1, Math.min(1, (y0 - y1) / 200));
    const controlX = midX;
    const controlY = midY + offset * t;

    const r = Math.sqrt((x1 - x0) ** 2 + (y1 - y0) ** 2);
    const opacity = Math.min(
      1.0,
      (r - Math.max(rect.width, rect.height) / 2) / 500
    );

    // Create gradient
    const gradient = ctx.createLinearGradient(x0, y0, x1, y1);
    const startColor = resolvedCanvasColorsRef.current.gradientStart;
    const endColor = resolvedCanvasColorsRef.current.gradientEnd;
    gradient.addColorStop(
      0,
      `rgba(${startColor.r}, ${startColor.g}, ${startColor.b}, ${opacity})`
    );
    gradient.addColorStop(
      1,
      `rgba(${endColor.r}, ${endColor.g}, ${endColor.b}, ${opacity})`
    );

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2.5; // Slightly thicker line

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.quadraticCurveTo(controlX, controlY, x1, y1);
    ctx.stroke();
    ctx.restore();

    // Draw arrowhead with gradient
    const angle = Math.atan2(y1 - controlY, x1 - controlX);
    const headLength = 12 * (ctx.lineWidth / 1.5); // Slightly larger arrowhead
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(
      x1 - headLength * Math.cos(angle - Math.PI / 6),
      y1 - headLength * Math.sin(angle - Math.PI / 6)
    );
    ctx.moveTo(x1, y1);
    ctx.lineTo(
      x1 - headLength * Math.cos(angle + Math.PI / 6),
      y1 - headLength * Math.sin(angle + Math.PI / 6)
    );
    ctx.stroke();
  }, [targetRef]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !targetRef.current) return;

    ctxRef.current = canvas.getContext("2d");
    const ctx = ctxRef.current;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", updateCanvasSize);
    window.addEventListener("mousemove", handleMouseMove);
    updateCanvasSize();

    const animateLoop = () => {
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawArrow();
      }
      animationFrameIdRef.current = requestAnimationFrame(animateLoop);
    };

    animateLoop();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [drawArrow]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
    />
  );
};

export { DynamicArrow };

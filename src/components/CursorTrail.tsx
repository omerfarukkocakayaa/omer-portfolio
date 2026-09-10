import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
};

type Trail = {
  points: Point[];
  color: string;
  width: number;
  phase: number;
};

function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const mouseAvailable = window.matchMedia(
      "(any-pointer: fine)",
    ).matches;

    if (reduceMotion || !mouseAvailable) {
      return;
    }

    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      active: false,
    };

    const colors = [
      "rgba(0, 174, 255, 0.24)",
      "rgba(84, 54, 255, 0.24)",
      "rgba(255, 32, 135, 0.24)",
      "rgba(33, 255, 164, 0.24)",
      "rgba(255, 140, 32, 0.24)",
    ];

    const trails: Trail[] = colors.map((color, index) => ({
      color,
      width: 20 - index * 3,
      phase: index * 1.25,
      points: Array.from({ length: 14 }, () => ({
        x: mouse.x,
        y: mouse.y,
      })),
    }));

    let animationId = 0;
    let time = 0;

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const drawTrail = (trail: Trail, trailIndex: number) => {
      const points = trail.points;

      const orbitX =
        Math.cos(time + trail.phase) * (12 + trailIndex * 3);

      const orbitY =
        Math.sin(time * 1.15 + trail.phase) *
        (10 + trailIndex * 2);

      points[0].x +=
        (mouse.x + orbitX - points[0].x) *
        (0.2 - trailIndex * 0.012);

      points[0].y +=
        (mouse.y + orbitY - points[0].y) *
        (0.17 - trailIndex * 0.012);

      for (let index = 1; index < points.length; index += 1) {
        const followSpeed = 0.24 - index * 0.0025;

        points[index].x +=
          (points[index - 1].x - points[index].x) *
          followSpeed;

        points[index].y +=
          (points[index - 1].y - points[index].y) *
          followSpeed;
      }

      context.beginPath();
      context.moveTo(points[0].x, points[0].y);

      for (
        let index = 1;
        index < points.length - 1;
        index += 1
      ) {
        const middleX =
          (points[index].x + points[index + 1].x) / 2;

        const middleY =
          (points[index].y + points[index + 1].y) / 2;

        context.quadraticCurveTo(
          points[index].x,
          points[index].y,
          middleX,
          middleY,
        );
      }

      context.lineCap = "round";
      context.lineJoin = "round";
      context.lineWidth = trail.width;
      context.strokeStyle = trail.color;
      context.shadowColor = trail.color;
      context.shadowBlur = 42;
      context.stroke();
    };

    const drawHeadGlow = () => {
      const gradient = context.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        95,
      );

      gradient.addColorStop(
        0,
        "rgba(78, 226, 255, 0.28)",
      );

      gradient.addColorStop(
        0.3,
        "rgba(132, 54, 255, 0.18)",
      );

      gradient.addColorStop(
        0.65,
        "rgba(255, 36, 133, 0.08)",
      );

      gradient.addColorStop(
        1,
        "rgba(0, 0, 0, 0)",
      );

      context.fillStyle = gradient;
      context.beginPath();
      context.arc(
        mouse.x,
        mouse.y,
        95,
        0,
        Math.PI * 2,
      );
      context.fill();
    };

    const drawCursorHead = () => {
      const headGradient = context.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        11,
      );

      headGradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      headGradient.addColorStop(0.25, "rgba(67, 230, 207, 1)");
      headGradient.addColorStop(0.65, "rgba(0, 174, 255, 0.9)");
      headGradient.addColorStop(1, "rgba(132, 54, 255, 0)");

      context.fillStyle = headGradient;
      context.beginPath();
      context.arc(mouse.x, mouse.y, 11, 0, Math.PI * 2);
      context.fill();

      context.beginPath();
      context.arc(mouse.x, mouse.y, 15, 0, Math.PI * 2);
      context.lineWidth = 1.5;
      context.strokeStyle = "rgba(255, 255, 255, 0.72)";
      context.shadowColor = "rgba(67, 230, 207, 0.9)";
      context.shadowBlur = 16;
      context.stroke();
    };

    const animate = () => {
      time += 0.025;

      context.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight,
      );

      if (mouse.active) {
        context.globalCompositeOperation = "lighter";

        trails.forEach((trail, index) => {
          drawTrail(trail, index);
        });

        drawHeadGlow();
        drawCursorHead();

        context.globalCompositeOperation = "source-over";
        context.shadowBlur = 0;
      }

      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    document.documentElement.addEventListener(
      "mouseleave",
      handleMouseLeave,
    );

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);

      window.removeEventListener(
        "resize",
        resizeCanvas,
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove,
      );

      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave,
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="cursorTrail"
      aria-hidden="true"
    />
  );
}

export default CursorTrail;

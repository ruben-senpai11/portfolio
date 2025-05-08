"use client";

import { useEffect, useRef } from "react";

const GlassBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);

  type Point = { x: number; y: number };
  type Particle = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    angle: number;
    shape: Point[];
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const mouse = { x: -9999, y: -9999 };

    const createRandomShape = (): Point[] => {
      const sides = Math.floor(Math.random() * 4) + 3; // 3 to 6
      const baseRadius = Math.random() * 50 + 15;
      const points: Point[] = [];

      for (let i = 0; i < sides; i++) {
        const angle = (Math.PI * 2 * i) / sides + (Math.random() - 0.5) * 0.3;
        const radius = baseRadius * (0.7 + Math.random() * 0.6);
        points.push({
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
        });
      }

      return points;
    };

    const createParticles = (count: number) => {
      particles.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        angle: (Math.random() - 0.5) * Math.PI * 4,
        shape: createRandomShape(),
      }));
    };

    createParticles(60);

    const draw = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles.current) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 200) {
          const strength = (1 - dist / 200) * 0.3;
          p.vx += dx * strength * 0.005;
          p.vy += dy * strength * 0.005;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x += canvas.width;
        if (p.x > canvas.width) p.x -= canvas.width;
        if (p.y < 0) p.y += canvas.height;
        if (p.y > canvas.height) p.y -= canvas.height;

        p.vx *= 0.98;
        p.vy *= 0.98;

        // Draw
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);

        ctx.beginPath();
        ctx.moveTo(p.shape[0].x, p.shape[0].y);
        for (let i = 1; i < p.shape.length; i++) {
          ctx.lineTo(p.shape[i].x, p.shape[i].y);
        }
        ctx.closePath();

        ctx.fillStyle = "rgba(200, 122, 200, 0.05)";
        ctx.strokeStyle = "rgba(100, 100, 100, 0.12)";
        ctx.lineWidth = 0.5;
        ctx.fill();
        ctx.stroke();

        ctx.restore();
      }

      requestAnimationFrame(draw);
    };

    draw();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        background: "transparent",
      }}
    />
  );
};

export default GlassBackground;

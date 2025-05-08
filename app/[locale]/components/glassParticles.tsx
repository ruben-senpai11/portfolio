"use client";
import { useRef, useEffect } from "react";

const GlassParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = (canvas.width = window.innerWidth);
    const h = (canvas.height = window.innerHeight);
    const mouse = { x: -9999, y: -9999 };

    const createParticles = (count: number) => {
      particles.current = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 180 + 10, // Range: 10–90px
        angle: (Math.random() - 0.5) * Math.PI * 4, // -2π to 2π
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.current.forEach((p) => {
        // Attraction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          p.vx += dx / dist * 0.05;
          p.vy += dy / dist * 0.05;
        }

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Slight friction
        p.vx *= 0.98;
        p.vy *= 0.98;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.fillStyle = "rgba(102,48,118,0.02)";
        ctx.strokeStyle = "rgba(80,180,180,0.2)";
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(p.size, 0);
        ctx.lineTo(p.size * 0.8, p.size * 0.3);
        ctx.lineTo(0, p.size * 0.6);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      });
      requestAnimationFrame(draw);
    };

    createParticles(70);
    draw();

    const move = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100vw",
        height: "100vh",
      }}
    />
  );
};

export default GlassParticles;

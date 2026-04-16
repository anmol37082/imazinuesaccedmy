"use client";

import { useEffect, useRef } from "react";
import styles from "./SuccessConfetti.module.css";

const COLORS = [
  "#ff6b6b",
  "#feca57",
  "#48dbfb",
  "#ff9ff3",
  "#54a0ff",
  "#5f27cd",
  "#00d2d3",
  "#ff9f43",
  "#ff6b9d",
  "#c44569",
  "#f8b500",
  "#6c5ce7",
];

function createParticle(width, height, x = Math.random() * width, y = -12) {
  return {
    x,
    y,
    size: Math.random() * 10 + 5,
    speedY: Math.random() * 3 + 2,
    speedX: Math.random() * 4 - 2,
    rotation: Math.random() * 360,
    rotationSpeed: Math.random() * 10 - 5,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    shape: Math.floor(Math.random() * 3),
    opacity: 1,
    gravity: 0.1,
  };
}

function drawParticle(context, particle) {
  context.save();
  context.translate(particle.x, particle.y);
  context.rotate((particle.rotation * Math.PI) / 180);
  context.globalAlpha = particle.opacity;
  context.fillStyle = particle.color;

  if (particle.shape === 0) {
    context.fillRect(
      -particle.size / 2,
      -particle.size / 4,
      particle.size,
      particle.size / 2
    );
  } else if (particle.shape === 1) {
    context.beginPath();
    context.arc(0, 0, particle.size / 2, 0, Math.PI * 2);
    context.fill();
  } else {
    context.beginPath();
    context.moveTo(0, -particle.size / 2);
    context.lineTo(-particle.size / 2, particle.size / 2);
    context.lineTo(particle.size / 2, particle.size / 2);
    context.closePath();
    context.fill();
  }

  context.restore();
}

function SuccessConfetti() {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return undefined;
    }

    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      particles = particles.filter(
        (particle) => particle.opacity > 0 && particle.y < canvas.height + 50
      );

      particles.forEach((particle) => {
        particle.speedY += particle.gravity;
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.rotation += particle.rotationSpeed;

        if (particle.y > canvas.height - 100) {
          particle.opacity -= 0.02;
        }

        drawParticle(context, particle);
      });

      if (particles.length > 0) {
        animationFrameRef.current = window.requestAnimationFrame(animate);
      } else {
        animationFrameRef.current = null;
      }
    };

    const startCelebration = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      for (let index = 0; index < 150; index += 1) {
        const particle = createParticle(canvas.width, canvas.height, centerX, centerY);
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 15 + 5;

        particle.speedX = Math.cos(angle) * velocity;
        particle.speedY = Math.sin(angle) * velocity - 5;
        particle.gravity = 0.2;
        particles.push(particle);
      }

      let waveCount = 0;
      intervalRef.current = window.setInterval(() => {
        if (waveCount >= 15) {
          if (intervalRef.current) {
            window.clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          return;
        }

        for (let index = 0; index < 10; index += 1) {
          particles.push(createParticle(canvas.width, canvas.height));
        }

        waveCount += 1;

        if (!animationFrameRef.current) {
          animate();
        }
      }, 200);

      animate();
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    startCelebration();

    return () => {
      window.removeEventListener("resize", resizeCanvas);

      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }

      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      context.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}

export default SuccessConfetti;

import React, { useEffect, useRef } from 'react';

/**
 * NeuralVisual Component
 * An elegant, responsive HTML5 canvas rendering a neural network constellation.
 * Uses tasteful blue, cyan, and violet nodes and connection lines.
 * Automatically respects prefers-reduced-motion.
 */
export default function NeuralVisual() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.clientWidth || 320);
    let height = (canvas.height = canvas.parentElement.clientHeight || 320);

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Node configuration
    const nodeCount = Math.min(Math.floor((width * height) / 7500), 40);
    const nodes = [];
    const colors = ['#38bdf8', '#818cf8', '#06b6d4', '#60a5fa'];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (prefersReducedMotion ? 0 : 0.6),
        vy: (Math.random() - 0.5) * (prefersReducedMotion ? 0 : 0.6),
        radius: Math.random() * 2.2 + 1.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.4,
      });
    }

    let mouse = { x: null, y: null, maxDist: 120 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth || 320;
      height = canvas.height = canvas.parentElement.clientHeight || 320;
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect nodes
      const maxConnectDist = 110;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const opacity = (1 - dist / maxConnectDist) * 0.28;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Connect to mouse if nearby
      if (mouse.x !== null && mouse.y !== null && !prefersReducedMotion) {
        for (let i = 0; i < nodes.length; i++) {
          const dx = nodes[i].x - mouse.x;
          const dy = nodes[i].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.maxDist) {
            const opacity = (1 - dist / mouse.maxDist) * 0.5;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(129, 140, 248, ${opacity})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      // Draw and update nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (!prefersReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
        }

        // Outer glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = `${node.color}18`;
        ctx.fill();

        // Node core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[480px] aspect-square flex items-center justify-center mx-auto">
      {/* Subtle radial ambient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-indigo-500/10 rounded-3xl blur-2xl pointer-events-none" />
      
      {/* Decorative frame */}
      <div className="relative w-full h-full rounded-2xl border border-slate-800/80 bg-surface-card/60 backdrop-blur-sm p-3 sm:p-4 overflow-hidden shadow-2xl shadow-cyan-950/20">
        <canvas
          ref={canvasRef}
          aria-label="Interactive neural network constellation visual"
          role="img"
          className="w-full h-full block rounded-xl"
        />

        {/* Technical Corner Accents */}
        <div className="absolute top-3 left-3 text-[10px] font-mono text-cyan-400/70 tracking-wider flex items-center gap-1.5 pointer-events-none">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          AI_SYSTEMS.INIT
        </div>
        <div className="absolute bottom-3 right-3 text-[10px] font-mono text-slate-500 tracking-wider pointer-events-none">
          LATENCY: OPTIMAL
        </div>
      </div>
    </div>
  );
}

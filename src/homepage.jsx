import { useState, useEffect, useRef } from "react";

const Portfolio = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY || 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [loaded]);

  const projects = [
    {
      id: 1,
      title: "Nebula Studio",
      category: "Web Design",
      description: "Plateforme créative immersive pour artistes 3D avec rendu en temps réel",
      color: "#ff6b35",
      year: "2025",
      tech: ["React", "Three.js", "WebGL"],
    },
    {
      id: 2,
      title: "Pulse Finance",
      category: "Application Mobile",
      description: "Application fintech nouvelle génération avec tableau de bord analytique avancé",
      color: "#00d4aa",
      year: "2025",
      tech: ["React Native", "Node.js", "GraphQL"],
    },
    {
      id: 3,
      title: "Aura Commerce",
      category: "E-Commerce",
      description: "Expérience shopping luxe avec personnalisation IA et essayage virtuel",
      color: "#a855f7",
      year: "2024",
      tech: ["Next.js", "Stripe", "TensorFlow"],
    },
    {
      id: 4,
      title: "Echo Social",
      category: "Réseau Social",
      description: "Plateforme communautaire audio-first pour créateurs de contenu",
      color: "#f43f5e",
      year: "2024",
      tech: ["Vue.js", "WebRTC", "Firebase"],
    },
    {
      id: 5,
      title: "Zenith Dashboard",
      category: "SaaS",
      description: "Dashboard entreprise avec visualisation de données en temps réel",
      color: "#3b82f6",
      year: "2024",
      tech: ["Angular", "D3.js", "Python"],
    },
    {
      id: 6,
      title: "Oasis Travel",
      category: "Plateforme Web",
      description: "Planificateur de voyage intelligent avec recommandations personnalisées",
      color: "#eab308",
      year: "2023",
      tech: ["Nuxt.js", "MongoDB", "OpenAI"],
    },
  ];

  const skills = [
    { name: "React / Next.js", level: 95 },
    { name: "UI/UX Design", level: 90 },
    { name: "TypeScript", level: 88 },
    { name: "Node.js / Express", level: 85 },
    { name: "Three.js / WebGL", level: 78 },
    { name: "Figma / Adobe", level: 92 },
    { name: "Python / Django", level: 75 },
    { name: "DevOps / CI/CD", level: 70 },
  ];

  const experiences = [
    {
      period: "2023 — Présent",
      role: "Lead Developer & Designer",
      company: "Studio Créatif Indépendant",
      desc: "Direction créative et technique de projets web ambitieux pour des clients internationaux.",
    },
    {
      period: "2021 — 2023",
      role: "Senior Frontend Developer",
      company: "Agence Digitale Nova",
      desc: "Développement d'interfaces utilisateur complexes et mentoring d'une équipe de 5 développeurs.",
    },
    {
      period: "2019 — 2021",
      role: "Fullstack Developer",
      company: "StartupTech Labs",
      desc: "Conception et développement de MVPs pour startups en phase d'amorçage.",
    },
  ];

  const isVisible = (id) => visibleSections.has(id);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700;800;900&family=Syne:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');

        :root {
          --bg-primary: #0a0a0f;
          --bg-secondary: #12121a;
          --bg-card: #1a1a25;
          --text-primary: #f0ece2;
          --text-secondary: #8a8a9a;
          --accent: #ff6b35;
          --accent-glow: rgba(255, 107, 53, 0.3);
          --gradient-1: linear-gradient(135deg, #ff6b35, #f43f5e, #a855f7);
          --gradient-2: linear-gradient(135deg, #00d4aa, #3b82f6);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background: var(--bg-primary);
          color: var(--text-primary);
          font-family: 'Outfit', sans-serif;
          overflow-x: hidden;
        }

        .portfolio-root {
          background: var(--bg-primary);
          min-height: 100vh;
          position: relative;
        }

        /* NOISE TEXTURE OVERLAY */
        .noise-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1000;
          opacity: 0.5;
        }

        /* NAVIGATION */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          padding: 24px 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          backdrop-filter: blur(10px);
          background: rgba(10, 10, 15, 0.7);
        }

        .nav-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 28px;
          letter-spacing: -1px;
          background: var(--gradient-1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-links {
          display: flex;
          gap: 40px;
          list-style: none;
        }

        .nav-links a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--gradient-1);
          transition: width 0.3s ease;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: var(--text-primary);
        }

        .nav-links a:hover::after,
        .nav-links a.active::after {
          width: 100%;
        }

        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 6px;
          cursor: pointer;
          z-index: 200;
        }

        .menu-toggle span {
          width: 28px;
          height: 2px;
          background: var(--text-primary);
          transition: all 0.3s ease;
        }

        .menu-toggle.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 6px); }
        .menu-toggle.open span:nth-child(2) { opacity: 0; }
        .menu-toggle.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -6px); }

        /* HERO */
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 120px 48px 80px;
        }

        .hero-bg-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.15;
          animation: orbFloat 20s infinite ease-in-out;
        }

        .hero-bg-orb.orb1 {
          width: 600px; height: 600px;
          background: #ff6b35;
          top: -200px; right: -100px;
          animation-delay: 0s;
        }

        .hero-bg-orb.orb2 {
          width: 500px; height: 500px;
          background: #a855f7;
          bottom: -150px; left: -100px;
          animation-delay: -7s;
        }

        .hero-bg-orb.orb3 {
          width: 400px; height: 400px;
          background: #3b82f6;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: -14s;
        }

        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        .hero-content {
          text-align: center;
          position: relative;
          z-index: 2;
          max-width: 1000px;
        }

        .hero-tag {
          font-family: 'Space Mono', monospace;
          font-size: 13px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 32px;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.8s ease forwards 0.3s;
        }

        .hero-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(48px, 8vw, 120px);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -3px;
          margin-bottom: 32px;
          opacity: 0;
          transform: translateY(40px);
          animation: fadeUp 1s ease forwards 0.5s;
        }

        .hero-title .gradient-text {
          background: var(--gradient-1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 20px;
          font-weight: 300;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto 48px;
          line-height: 1.7;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeUp 0.8s ease forwards 0.8s;
        }

        .hero-cta-group {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.8s ease forwards 1.1s;
        }

        .btn-primary {
          padding: 16px 40px;
          background: var(--gradient-1);
          border: none;
          border-radius: 60px;
          color: white;
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.2);
          transform: translateX(-100%);
          transition: transform 0.5s ease;
        }

        .btn-primary:hover::before {
          transform: translateX(0);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 40px var(--accent-glow);
        }

        .btn-secondary {
          padding: 16px 40px;
          background: transparent;
          border: 1.5px solid rgba(240, 236, 226, 0.2);
          border-radius: 60px;
          color: var(--text-primary);
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .btn-secondary:hover {
          border-color: var(--accent);
          color: var(--accent);
          transform: translateY(-3px);
        }

        .hero-scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          opacity: 0;
          animation: fadeUp 0.8s ease forwards 1.5s;
        }

        .scroll-line {
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, var(--accent), transparent);
          animation: scrollPulse 2s infinite;
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }

        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        /* SECTION COMMON */
        .section {
          padding: 120px 48px;
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-header {
          margin-bottom: 80px;
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .section-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-label {
          font-family: 'Space Mono', monospace;
          font-size: 12px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 16px;
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 700;
          letter-spacing: -2px;
          line-height: 1.1;
        }

        .section-title .highlight {
          background: var(--gradient-1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ABOUT */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .about-text p {
          font-size: 17px;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 24px;
        }

        .about-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-top: 48px;
        }

        .stat-card {
          background: var(--bg-card);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 20px;
          padding: 32px;
          transition: all 0.4s ease;
          opacity: 0;
          transform: translateY(30px);
        }

        .stat-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stat-card:hover {
          border-color: rgba(255, 107, 53, 0.3);
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .stat-number {
          font-family: 'Syne', sans-serif;
          font-size: 42px;
          font-weight: 800;
          background: var(--gradient-1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          font-size: 14px;
          color: var(--text-secondary);
          margin-top: 4px;
        }

        .about-visual {
          position: relative;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-avatar-frame {
          width: 320px;
          height: 400px;
          border-radius: 24px;
          background: var(--gradient-1);
          padding: 3px;
          position: relative;
          z-index: 2;
          animation: gentleFloat 6s infinite ease-in-out;
        }

        .about-avatar-inner {
          width: 100%;
          height: 100%;
          border-radius: 22px;
          background: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          font-size: 100px;
          overflow: hidden;
          position: relative;
        }

        .about-avatar-inner::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,107,53,0.1), rgba(168,85,247,0.1));
        }

        .about-avatar-initials {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 80px;
          background: var(--gradient-1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          z-index: 2;
        }

        .about-decor {
          position: absolute;
          width: 200px;
          height: 200px;
          border: 2px solid rgba(255, 107, 53, 0.15);
          border-radius: 24px;
          transform: rotate(15deg);
          top: 20px;
          right: 30px;
          animation: gentleFloat 8s infinite ease-in-out reverse;
        }

        .about-decor-2 {
          position: absolute;
          width: 150px;
          height: 150px;
          border: 2px solid rgba(168, 85, 247, 0.12);
          border-radius: 50%;
          bottom: 20px;
          left: 40px;
          animation: gentleFloat 10s infinite ease-in-out;
        }

        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        /* PROJECTS */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .project-card {
          background: var(--bg-card);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 24px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0;
          transform: translateY(40px);
          position: relative;
        }

        .project-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255,255,255,0.1);
          box-shadow: 0 30px 60px rgba(0,0,0,0.4);
        }

        .project-card-visual {
          height: 240px;
          position: relative;
          overflow: hidden;
        }

        .project-card-bg {
          position: absolute;
          inset: 0;
          opacity: 0.15;
          transition: all 0.5s ease;
        }

        .project-card:hover .project-card-bg {
          opacity: 0.25;
          transform: scale(1.05);
        }

        .project-card-pattern {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-template-rows: repeat(4, 1fr);
          gap: 8px;
          padding: 24px;
          opacity: 0.4;
        }

        .pattern-dot {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 50%;
          background: currentColor;
          opacity: 0.2;
          transition: all 0.3s ease;
        }

        .project-card:hover .pattern-dot {
          opacity: 0.4;
        }

        .project-card-category {
          position: absolute;
          top: 20px;
          left: 20px;
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 30px;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(10, 10, 15, 0.7);
          backdrop-filter: blur(10px);
        }

        .project-card-year {
          position: absolute;
          top: 20px;
          right: 20px;
          font-family: 'Space Mono', monospace;
          font-size: 12px;
          color: var(--text-secondary);
        }

        .project-card-icon {
          position: absolute;
          bottom: 24px;
          right: 24px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          transition: all 0.4s ease;
          transform: translate(10px, 10px);
          opacity: 0;
        }

        .project-card:hover .project-card-icon {
          transform: translate(0, 0);
          opacity: 1;
        }

        .project-card-info {
          padding: 28px;
        }

        .project-card-title {
          font-family: 'Syne', sans-serif;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 10px;
          letter-spacing: -0.5px;
        }

        .project-card-desc {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .project-tech-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .tech-tag {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          padding: 4px 12px;
          border-radius: 20px;
          background: rgba(255,255,255,0.05);
          color: var(--text-secondary);
          border: 1px solid rgba(255,255,255,0.08);
        }

        /* SKILLS */
        .skills-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .skill-item {
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .skill-item.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .skill-name {
          font-size: 15px;
          font-weight: 500;
        }

        .skill-percent {
          font-family: 'Space Mono', monospace;
          font-size: 13px;
          color: var(--accent);
        }

        .skill-bar {
          height: 6px;
          background: rgba(255,255,255,0.06);
          border-radius: 3px;
          overflow: hidden;
        }

        .skill-bar-fill {
          height: 100%;
          background: var(--gradient-1);
          border-radius: 3px;
          width: 0;
          transition: width 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .skill-bar-fill.animate {
          /* width set inline */
        }

        .skills-visual {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .services-card {
          background: var(--bg-card);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 20px;
          padding: 32px;
          transition: all 0.4s ease;
          opacity: 0;
          transform: translateY(20px);
        }

        .services-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .services-card:hover {
          border-color: rgba(255, 107, 53, 0.2);
          transform: translateY(-4px);
        }

        .services-card-icon {
          font-size: 32px;
          margin-bottom: 16px;
        }

        .services-card-title {
          font-family: 'Syne', sans-serif;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .services-card-desc {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* EXPERIENCE */
        .timeline {
          position: relative;
          padding-left: 60px;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 20px;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, var(--accent), transparent);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 60px;
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .timeline-item.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .timeline-dot {
          position: absolute;
          left: -48px;
          top: 6px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 20px var(--accent-glow);
        }

        .timeline-period {
          font-family: 'Space Mono', monospace;
          font-size: 12px;
          color: var(--accent);
          letter-spacing: 1px;
          margin-bottom: 8px;
        }

        .timeline-role {
          font-family: 'Syne', sans-serif;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .timeline-company {
          font-size: 16px;
          color: var(--text-secondary);
          margin-bottom: 12px;
        }

        .timeline-desc {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        /* CONTACT */
        .contact-section {
          text-align: center;
        }

        .contact-big-text {
          font-family: 'Syne', sans-serif;
          font-size: clamp(32px, 5vw, 72px);
          font-weight: 800;
          letter-spacing: -2px;
          margin-bottom: 24px;
          line-height: 1.1;
        }

        .contact-desc {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 500px;
          margin: 0 auto 48px;
          line-height: 1.7;
        }

        .contact-email {
          display: inline-block;
          font-family: 'Syne', sans-serif;
          font-size: clamp(20px, 3vw, 36px);
          font-weight: 600;
          background: var(--gradient-1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-decoration: none;
          padding: 12px 0;
          border-bottom: 2px solid transparent;
          transition: all 0.3s ease;
          margin-bottom: 48px;
        }

        .contact-email:hover {
          border-bottom-color: var(--accent);
        }

        .social-links {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-top: 32px;
        }

        .social-link {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 18px;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          border-color: var(--accent);
          color: var(--accent);
          transform: translateY(-4px);
          box-shadow: 0 10px 20px rgba(255,107,53,0.15);
        }

        /* FOOTER */
        .footer {
          text-align: center;
          padding: 40px 48px;
          border-top: 1px solid rgba(255,255,255,0.05);
          font-size: 13px;
          color: var(--text-secondary);
          font-family: 'Space Mono', monospace;
        }

        /* MARQUEE */
        .marquee-wrapper {
          overflow: hidden;
          padding: 40px 0;
          border-top: 1px solid rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          margin: 0;
        }

        .marquee-track {
          display: flex;
          animation: marqueeScroll 30s linear infinite;
          width: max-content;
        }

        .marquee-item {
          font-family: 'Syne', sans-serif;
          font-size: 72px;
          font-weight: 800;
          white-space: nowrap;
          padding: 0 40px;
          color: rgba(255,255,255,0.03);
          -webkit-text-stroke: 1px rgba(255,255,255,0.08);
          letter-spacing: -2px;
        }

        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        /* SEPARATOR */
        .section-separator {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .separator-line {
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent);
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .about-grid { grid-template-columns: 1fr; gap: 40px; }
          .about-visual { height: 350px; }
          .projects-grid { grid-template-columns: 1fr; }
          .skills-container { grid-template-columns: 1fr; gap: 40px; }
        }

        @media (max-width: 768px) {
          .nav { padding: 16px 24px; }
          .nav-links { display: none; }
          .menu-toggle { display: flex; }
          .hero { padding: 100px 24px 60px; }
          .section { padding: 80px 24px; }
          .about-stats { grid-template-columns: 1fr; }
          .hero-title { letter-spacing: -1px; }
          .contact-big-text { letter-spacing: -1px; }

          .mobile-menu {
            position: fixed;
            inset: 0;
            background: rgba(10, 10, 15, 0.98);
            backdrop-filter: blur(20px);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 32px;
            z-index: 150;
          }

          .mobile-menu a {
            font-family: 'Syne', sans-serif;
            font-size: 32px;
            font-weight: 700;
            color: var(--text-primary);
            text-decoration: none;
            transition: color 0.3s;
          }

          .mobile-menu a:hover {
            color: var(--accent);
          }
        }
      `}</style>

      <div className="portfolio-root">
        <div className="noise-overlay" />

        {/* NAV */}
        <nav className="nav">
          <div className="nav-logo">AK.</div>
          <ul className="nav-links">
            {[
              ["hero", "Accueil"],
              ["about", "À propos"],
              ["projects", "Projets"],
              ["skills", "Compétences"],
              ["experience", "Parcours"],
              ["contact", "Contact"],
            ].map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeSection === id ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span /><span /><span />
          </div>
        </nav>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="mobile-menu">
            {[
              ["hero", "Accueil"],
              ["about", "À propos"],
              ["projects", "Projets"],
              ["skills", "Compétences"],
              ["experience", "Parcours"],
              ["contact", "Contact"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        )}

        {/* HERO */}
        <section id="hero" className="hero">
          <div className="hero-bg-orb orb1" />
          <div className="hero-bg-orb orb2" />
          <div className="hero-bg-orb orb3" />
          <div className="hero-content">
            <div className="hero-tag">✦ Développeur Créatif & Designer</div>
            <h1 className="hero-title">
              Créons des
              <br />
              <span className="gradient-text">expériences</span>
              <br />
              inoubliables
            </h1>
            <p className="hero-subtitle">
              Développeur fullstack & designer passionné, je transforme vos idées
              en interfaces élégantes, performantes et mémorables.
            </p>
            <div className="hero-cta-group">
              <button className="btn-primary" onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}>
                Voir mes projets
              </button>
              <button className="btn-secondary" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
                Me contacter
              </button>
            </div>
          </div>
          <div className="hero-scroll-indicator">
            <div className="scroll-line" />
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...Array(2)].map((_, i) => (
              <span key={i} style={{ display: "flex" }}>
                {["DESIGN", "DÉVELOPPEMENT", "CRÉATIVITÉ", "INNOVATION", "STRATÉGIE", "UI/UX"].map(
                  (word, j) => (
                    <span key={j} className="marquee-item">{word} ✦ </span>
                  )
                )}
              </span>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className={`section-header ${isVisible("about") ? "visible" : ""}`}>
            <div className="section-label">01 — À propos</div>
            <h2 className="section-title">
              Qui suis-je<span className="highlight">?</span>
            </h2>
          </div>
          <div className="about-grid">
            <div className="about-text" style={{ opacity: isVisible("about") ? 1 : 0, transform: isVisible("about") ? "none" : "translateY(30px)", transition: "all 0.8s ease 0.2s" }}>
              <p>
                Je suis un développeur fullstack et designer UI/UX basé à Paris,
                passionné par la création d'expériences digitales qui marquent les esprits.
                Avec plus de 5 ans d'expérience, je combine expertise technique et sensibilité
                esthétique pour donner vie à des projets ambitieux.
              </p>
              <p>
                Mon approche ? Fusionner la performance technique avec un design audacieux.
                Chaque pixel compte, chaque interaction est pensée pour surprendre et engager.
                Je crois que le web est un terrain de jeu infini pour la créativité.
              </p>
              <div className="about-stats">
                {[
                  { number: "50+", label: "Projets réalisés" },
                  { number: "5+", label: "Années d'expérience" },
                  { number: "30+", label: "Clients satisfaits" },
                  { number: "∞", label: "Tasses de café" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className={`stat-card ${isVisible("about") ? "visible" : ""}`}
                    style={{ transitionDelay: `${0.3 + i * 0.15}s` }}
                  >
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-visual" style={{ opacity: isVisible("about") ? 1 : 0, transition: "opacity 0.8s ease 0.4s" }}>
              <div className="about-avatar-frame">
                <div className="about-avatar-inner">
                  <span className="about-avatar-initials">AK</span>
                </div>
              </div>
              <div className="about-decor" />
              <div className="about-decor-2" />
            </div>
          </div>
        </section>

        <div className="section-separator"><div className="separator-line" /></div>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className={`section-header ${isVisible("projects") ? "visible" : ""}`}>
            <div className="section-label">02 — Projets</div>
            <h2 className="section-title">
              Travaux <span className="highlight">sélectionnés</span>
            </h2>
          </div>
          <div className="projects-grid">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className={`project-card ${isVisible("projects") ? "visible" : ""}`}
                style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="project-card-visual">
                  <div
                    className="project-card-bg"
                    style={{
                      background: `radial-gradient(circle at 30% 50%, ${project.color}40, transparent 70%), radial-gradient(circle at 70% 80%, ${project.color}20, transparent 50%)`,
                    }}
                  />
                  <div className="project-card-pattern" style={{ color: project.color }}>
                    {[...Array(24)].map((_, j) => (
                      <div
                        key={j}
                        className="pattern-dot"
                        style={{
                          animationDelay: `${j * 0.05}s`,
                          opacity: hoveredProject === project.id ? 0.3 + Math.random() * 0.5 : 0.15,
                          transition: "opacity 0.5s ease",
                          transform: `scale(${0.5 + Math.random() * 0.8})`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="project-card-category">{project.category}</div>
                  <div className="project-card-year">{project.year}</div>
                  <div
                    className="project-card-icon"
                    style={{ background: project.color }}
                  >
                    →
                  </div>
                </div>
                <div className="project-card-info">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.description}</p>
                  <div className="project-tech-tags">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="section-separator"><div className="separator-line" /></div>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className={`section-header ${isVisible("skills") ? "visible" : ""}`}>
            <div className="section-label">03 — Compétences</div>
            <h2 className="section-title">
              Mon <span className="highlight">arsenal</span> technique
            </h2>
          </div>
          <div className="skills-container">
            <div className="skills-list">
              {skills.map((skill, i) => (
                <div
                  key={skill.name}
                  className={`skill-item ${isVisible("skills") ? "visible" : ""}`}
                  style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className={`skill-bar-fill ${isVisible("skills") ? "animate" : ""}`}
                      style={{
                        width: isVisible("skills") ? `${skill.level}%` : "0%",
                        transitionDelay: `${0.3 + i * 0.1}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="skills-visual">
              {[
                { icon: "🎨", title: "Design UI/UX", desc: "Interfaces intuitives et esthétiques centrées utilisateur" },
                { icon: "⚡", title: "Développement Web", desc: "Applications performantes avec les technologies modernes" },
                { icon: "📱", title: "Mobile First", desc: "Expériences responsives et adaptées à tous les écrans" },
                { icon: "🚀", title: "Optimisation", desc: "Performance, SEO et accessibilité au cœur de chaque projet" },
              ].map((service, i) => (
                <div
                  key={service.title}
                  className={`services-card ${isVisible("skills") ? "visible" : ""}`}
                  style={{ transitionDelay: `${0.2 + i * 0.12}s` }}
                >
                  <div className="services-card-icon">{service.icon}</div>
                  <div className="services-card-title">{service.title}</div>
                  <div className="services-card-desc">{service.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-separator"><div className="separator-line" /></div>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <div className={`section-header ${isVisible("experience") ? "visible" : ""}`}>
            <div className="section-label">04 — Parcours</div>
            <h2 className="section-title">
              Mon <span className="highlight">expérience</span>
            </h2>
          </div>
          <div className="timeline">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`timeline-item ${isVisible("experience") ? "visible" : ""}`}
                style={{ transitionDelay: `${0.2 + i * 0.2}s` }}
              >
                <div className="timeline-dot" />
                <div className="timeline-period">{exp.period}</div>
                <div className="timeline-role">{exp.role}</div>
                <div className="timeline-company">{exp.company}</div>
                <div className="timeline-desc">{exp.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="section-separator"><div className="separator-line" /></div>

        {/* CONTACT */}
        <section id="contact" className="section contact-section">
          <div className={`section-header ${isVisible("contact") ? "visible" : ""}`} style={{ textAlign: "center" }}>
            <div className="section-label">05 — Contact</div>
          </div>
          <div style={{ opacity: isVisible("contact") ? 1 : 0, transform: isVisible("contact") ? "none" : "translateY(40px)", transition: "all 0.8s ease 0.2s" }}>
            <div className="contact-big-text">
              Travaillons <span style={{ background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>ensemble</span>
            </div>
            <p className="contact-desc">
              Vous avez un projet en tête ? Une idée à concrétiser ?
              N'hésitez pas à me contacter pour en discuter.
            </p>
            <a href="mailto:hello@alexkhan.dev" className="contact-email">
              hello@alexkhan.dev
            </a>
            <div className="social-links">
              {[
                { label: "GH", href: "#" },
                { label: "LI", href: "#" },
                { label: "TW", href: "#" },
                { label: "DR", href: "#" },
              ].map((social) => (
                <a key={social.label} href={social.href} className="social-link">
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          © 2025 Alex Khan — Crafted with passion & code
        </footer>
      </div>
    </>
  );
};

export default Portfolio;
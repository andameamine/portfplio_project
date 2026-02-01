import { useState, useEffect } from "react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [hoveredProject, setHoveredProject] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
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
      { threshold: 0.15 }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [loaded]);

  const isVisible = (id) => visibleSections.has(id);

  const navItems = [
    ["hero", "Accueil"],
    ["about", "À propos"],
    ["education", "Formation"],
    ["skills", "Compétences"],
    ["certifications", "Certificats"],
    ["projects", "Projets"],
    ["contact", "Contact"],
  ];

  const education = [
    {
      period: "2025 — 2028",
      title: "Génie Logiciel & Digitalisation",
      school: "ENSEM — École Nationale Supérieure d'Électricité et de Mécanique",
      location: "Casablanca",
      desc: "Formation d'ingénieur en Software Engineering and Digitalization. Spécialisation en développement logiciel, architectures modernes et transformation digitale.",
      icon: "🎓",
      current: true,
    },
    {
      period: "2023 — 2025",
      title: "PCSI / PSI",
      school: "Classe Préparatoire aux Grandes Écoles",
      location: "",
      desc: "Classes préparatoires scientifiques — filière Physique et Sciences de l'Ingénieur. Fondamentaux en mathématiques, physique et sciences de l'ingénieur.",
      icon: "📐",
      current: false,
    },
    {
      period: "2022 — 2023",
      title: "Sciences Physiques & Chimie",
      school: "Lycée IBN EL HAYATAM",
      location: "Maroc",
      desc: "Baccalauréat Sciences Physiques et Chimie. Bases solides en sciences fondamentales et raisonnement analytique.",
      icon: "🔬",
      current: false,
    },
  ];

  const certifications = [
    {
      name: "SQL (Intermediate)",
      issuer: "HackerRank",
      color: "#00ea64",
      link: "https://lnkd.in/eWES79wi",
      icon: "🗄️",
    },
    {
      name: "SQL (Basic)",
      issuer: "HackerRank",
      color: "#00ea64",
      link: "https://lnkd.in/e8ed7x7U",
      icon: "🗃️",
    },
    {
      name: "Python (Basic)",
      issuer: "HackerRank",
      color: "#3776ab",
      link: "https://lnkd.in/eC9kQbi7",
      icon: "🐍",
    },
    {
      name: "Problem Solving (Intermediate)",
      issuer: "HackerRank",
      color: "#f0db4f",
      link: "https://lnkd.in/edW34saC",
      icon: "🧩",
    },
    {
      name: "CSS (Basic)",
      issuer: "HackerRank",
      color: "#2965f1",
      link: "https://lnkd.in/eiTnmKnQ",
      icon: "🎨",
    },
    {
      name: "Introduction to HTML & CSS",
      issuer: "Alison",
      color: "#a855f7",
      link: "https://alison.com/verify/77cf97b9e0",
      icon: "🌐",
    },
  ];

  const skillsMastered = [
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "PHP", level: 75 },
    { name: "SQL / MySQL", level: 82 },
    { name: "API REST", level: 70 },
    { name: "XAMPP", level: 78 },
    { name: "Git / GitHub", level: 75 },
  ];

  const skillsLearning = [
    { name: "React", progress: 40 },
    { name: "Next.js", progress: 30 },
    { name: "Laravel", progress: 35 },
    { name: "MongoDB", progress: 25 },
    { name: "Tailwind CSS", progress: 45 },
    { name: "TypeScript", progress: 20 },
  ];

  const projects = [
    {
      id: 1,
      title: "Portfolio Personnel",
      category: "Web Design",
      description: "Ce portfolio — conçu et développé from scratch avec React, animations CSS et design moderne.",
      color: "#6c63ff",
      tech: ["React", "CSS3", "JavaScript"],
    },
    {
      id: 2,
      title: "Projets ENSEM",
      category: "Académique",
      description: "Projets réalisés dans le cadre de ma formation en génie logiciel et digitalisation.",
      color: "#00d4aa",
      tech: ["PHP", "MySQL", "HTML/CSS"],
    },
    {
      id: 3,
      title: "Challenges HackerRank",
      category: "Problem Solving",
      description: "Résolution de problèmes algorithmiques en Python et SQL — certifications obtenues.",
      color: "#00ea64",
      tech: ["Python", "SQL", "Algorithmes"],
    },
    {
      id: 4,
      title: "Projets Web Fullstack",
      category: "Développement",
      description: "Applications web fullstack avec PHP, MySQL et API REST — en constante évolution.",
      color: "#ff6b6b",
      tech: ["PHP", "API REST", "MySQL"],
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@200;300;400;500;600;700&family=General+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        :root {
          --bg: #060611;
          --bg2: #0c0c1d;
          --bg3: #141428;
          --card: #12122a;
          --card-hover: #1a1a3a;
          --text: #e8e6f0;
          --text2: #7a78a0;
          --accent: #6c63ff;
          --accent2: #ff6b6b;
          --accent3: #00d4aa;
          --gradient: linear-gradient(135deg, #6c63ff, #ff6b6b, #ff9a56);
          --gradient2: linear-gradient(135deg, #6c63ff, #00d4aa);
          --glow: rgba(108, 99, 255, 0.25);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'General Sans', -apple-system, sans-serif;
          overflow-x: hidden;
        }

        .root { background: var(--bg); min-height: 100vh; }

        .grain {
          position: fixed; inset: 0; z-index: 9999; pointer-events: none;
          opacity: 0.4;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
        }

        /* NAV */
        .nav {
          position: fixed; top: 0; left: 0; width: 100%; z-index: 100;
          padding: 20px 40px;
          display: flex; justify-content: space-between; align-items: center;
          backdrop-filter: blur(16px); background: rgba(6,6,17,0.8);
          border-bottom: 1px solid rgba(108,99,255,0.08);
        }
        .nav-logo {
          font-family: 'Clash Display', sans-serif;
          font-weight: 700; font-size: 24px;
          background: var(--gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .nav-links { display: flex; gap: 32px; list-style: none; }
        .nav-links a {
          color: var(--text2); text-decoration: none; font-size: 13px;
          font-weight: 500; letter-spacing: 1.2px; text-transform: uppercase;
          transition: all 0.3s; position: relative;
        }
        .nav-links a::after {
          content: ''; position: absolute; bottom: -4px; left: 0;
          width: 0; height: 2px; background: var(--gradient); transition: width 0.3s;
        }
        .nav-links a:hover, .nav-links a.active { color: var(--text); }
        .nav-links a:hover::after, .nav-links a.active::after { width: 100%; }

        .menu-btn {
          display: none; flex-direction: column; gap: 5px; cursor: pointer; z-index: 200;
          background: none; border: none;
        }
        .menu-btn span { width: 26px; height: 2px; background: var(--text); transition: all 0.3s; }
        .menu-btn.open span:nth-child(1) { transform: rotate(45deg) translate(5px,5px); }
        .menu-btn.open span:nth-child(2) { opacity: 0; }
        .menu-btn.open span:nth-child(3) { transform: rotate(-45deg) translate(5px,-5px); }

        .mobile-nav {
          position: fixed; inset: 0; background: rgba(6,6,17,0.97);
          backdrop-filter: blur(30px); display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 28px; z-index: 150;
        }
        .mobile-nav a {
          font-family: 'Clash Display', sans-serif; font-size: 28px; font-weight: 600;
          color: var(--text); text-decoration: none; transition: color 0.3s;
        }
        .mobile-nav a:hover { color: var(--accent); }

        /* HERO */
        .hero {
          min-height: 100vh; display: flex; flex-direction: column;
          justify-content: center; align-items: center;
          position: relative; overflow: hidden; padding: 120px 40px 80px;
        }
        .hero-orb {
          position: absolute; border-radius: 50%; filter: blur(100px); opacity: 0.12;
          animation: orbMove 25s infinite ease-in-out;
        }
        .hero-orb.o1 { width: 500px; height: 500px; background: #6c63ff; top: -150px; right: -100px; }
        .hero-orb.o2 { width: 400px; height: 400px; background: #ff6b6b; bottom: -100px; left: -80px; animation-delay: -8s; }
        .hero-orb.o3 { width: 350px; height: 350px; background: #00d4aa; top: 40%; left: 40%; animation-delay: -16s; }

        @keyframes orbMove {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -30px) scale(1.08); }
          66% { transform: translate(-20px, 25px) scale(0.95); }
        }

        .hero-grid-bg {
          position: absolute; inset: 0; overflow: hidden; opacity: 0.04;
          background-image:
            linear-gradient(rgba(108,99,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(108,99,255,0.3) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .hero-content { text-align: center; position: relative; z-index: 2; max-width: 900px; }

        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 2px;
          text-transform: uppercase; color: var(--accent);
          padding: 8px 20px; border-radius: 40px;
          border: 1px solid rgba(108,99,255,0.25); background: rgba(108,99,255,0.06);
          margin-bottom: 28px;
          opacity: 0; transform: translateY(20px);
          animation: fadeUp 0.7s ease forwards 0.2s;
        }
        .hero-badge .dot {
          width: 6px; height: 6px; border-radius: 50%; background: var(--accent3);
          animation: pulse 2s infinite;
        }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

        .hero-name {
          font-family: 'Clash Display', sans-serif;
          font-size: clamp(44px, 7vw, 100px); font-weight: 700;
          line-height: 1.05; letter-spacing: -2px; margin-bottom: 10px;
          opacity: 0; transform: translateY(30px);
          animation: fadeUp 0.9s ease forwards 0.4s;
        }
        .hero-name .grad {
          background: var(--gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }

        .hero-title {
          font-family: 'Clash Display', sans-serif;
          font-size: clamp(18px, 3vw, 32px); font-weight: 400;
          color: var(--text2); margin-bottom: 24px;
          opacity: 0; transform: translateY(25px);
          animation: fadeUp 0.8s ease forwards 0.6s;
        }

        .hero-sub {
          font-size: 16px; color: var(--text2); max-width: 550px;
          margin: 0 auto 40px; line-height: 1.7;
          opacity: 0; transform: translateY(20px);
          animation: fadeUp 0.8s ease forwards 0.8s;
        }

        .hero-btns {
          display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;
          opacity: 0; transform: translateY(20px);
          animation: fadeUp 0.8s ease forwards 1s;
        }

        .btn-main {
          padding: 14px 36px; background: var(--gradient); border: none;
          border-radius: 50px; color: #fff; font-family: 'General Sans', sans-serif;
          font-size: 14px; font-weight: 600; cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1); position: relative; overflow: hidden;
        }
        .btn-main:hover { transform: translateY(-3px); box-shadow: 0 15px 40px var(--glow); }

        .btn-ghost {
          padding: 14px 36px; background: transparent;
          border: 1.5px solid rgba(108,99,255,0.3); border-radius: 50px;
          color: var(--text); font-family: 'General Sans', sans-serif;
          font-size: 14px; font-weight: 500; cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .btn-ghost:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-3px); }

        .hero-scroll {
          position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%);
          opacity: 0; animation: fadeUp 0.8s ease forwards 1.3s;
        }
        .scroll-bar {
          width: 1px; height: 50px;
          background: linear-gradient(to bottom, var(--accent), transparent);
          animation: scrollAnim 2s infinite;
        }
        @keyframes scrollAnim { 0%,100% { opacity: 0.3; } 50% { opacity: 1; } }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }

        /* SECTIONS */
        .section { padding: 100px 40px; position: relative; max-width: 1300px; margin: 0 auto; }
        .sec-head {
          margin-bottom: 64px; opacity: 0; transform: translateY(30px);
          transition: all 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .sec-head.vis { opacity: 1; transform: translateY(0); }
        .sec-label {
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          letter-spacing: 3px; text-transform: uppercase; color: var(--accent); margin-bottom: 12px;
        }
        .sec-title {
          font-family: 'Clash Display', sans-serif;
          font-size: clamp(32px, 4.5vw, 56px); font-weight: 700;
          letter-spacing: -1.5px; line-height: 1.1;
        }
        .sec-title .hl {
          background: var(--gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .divider { max-width: 1300px; margin: 0 auto; padding: 0 40px; }
        .divider-line { height: 1px; background: linear-gradient(to right, transparent, rgba(108,99,255,0.15), transparent); }

        /* ABOUT */
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
        .about-text p { font-size: 16px; line-height: 1.8; color: var(--text2); margin-bottom: 20px; }
        .about-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 36px; }
        .stat {
          background: var(--card); border: 1px solid rgba(108,99,255,0.08);
          border-radius: 16px; padding: 24px; text-align: center;
          transition: all 0.4s; opacity: 0; transform: translateY(20px);
        }
        .stat.vis { opacity: 1; transform: translateY(0); }
        .stat:hover { border-color: rgba(108,99,255,0.25); transform: translateY(-4px); }
        .stat-num {
          font-family: 'Clash Display', sans-serif; font-size: 36px; font-weight: 700;
          background: var(--gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .stat-lbl { font-size: 12px; color: var(--text2); margin-top: 4px; }
        .about-visual {
          display: flex; align-items: center; justify-content: center;
          position: relative; height: 420px;
        }
        .avatar-frame {
          width: 280px; height: 340px; border-radius: 24px;
          background: var(--gradient); padding: 3px; position: relative; z-index: 2;
          animation: floatAnim 6s infinite ease-in-out;
        }
        .avatar-inner {
          width: 100%; height: 100%; border-radius: 22px;
          background: var(--bg2); display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
        }
        .avatar-inner::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(108,99,255,0.08), rgba(255,107,107,0.05));
        }
        .avatar-initials {
          font-family: 'Clash Display', sans-serif; font-weight: 700; font-size: 72px;
          background: var(--gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          position: relative; z-index: 2;
        }
        .about-deco1 {
          position: absolute; width: 180px; height: 180px;
          border: 2px solid rgba(108,99,255,0.1); border-radius: 20px;
          transform: rotate(12deg); top: 10px; right: 40px;
          animation: floatAnim 8s infinite ease-in-out reverse;
        }
        .about-deco2 {
          position: absolute; width: 120px; height: 120px;
          border: 2px solid rgba(0,212,170,0.1); border-radius: 50%;
          bottom: 20px; left: 50px; animation: floatAnim 10s infinite ease-in-out;
        }
        @keyframes floatAnim { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }

        /* EDUCATION */
        .edu-timeline { position: relative; padding-left: 50px; }
        .edu-timeline::before {
          content: ''; position: absolute; left: 16px; top: 8px; bottom: 8px; width: 2px;
          background: linear-gradient(to bottom, var(--accent), var(--accent3), transparent);
        }
        .edu-item {
          position: relative; margin-bottom: 48px;
          opacity: 0; transform: translateX(-20px);
          transition: all 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .edu-item.vis { opacity: 1; transform: translateX(0); }
        .edu-dot {
          position: absolute; left: -42px; top: 8px;
          width: 18px; height: 18px; border-radius: 50%;
          background: var(--accent); border: 3px solid var(--bg);
          box-shadow: 0 0 16px var(--glow);
        }
        .edu-dot.current { background: var(--accent3); box-shadow: 0 0 16px rgba(0,212,170,0.3); }
        .edu-card {
          background: var(--card); border: 1px solid rgba(108,99,255,0.08);
          border-radius: 20px; padding: 28px 32px; transition: all 0.4s;
        }
        .edu-card:hover {
          border-color: rgba(108,99,255,0.2); transform: translateX(6px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.3);
        }
        .edu-head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px; flex-wrap: wrap; gap: 8px; }
        .edu-icon { font-size: 28px; margin-bottom: 8px; }
        .edu-title-text { font-family: 'Clash Display', sans-serif; font-size: 20px; font-weight: 600; }
        .edu-school { font-size: 14px; color: var(--accent); margin-bottom: 6px; }
        .edu-period {
          font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--text2); letter-spacing: 1px;
          padding: 4px 12px; border-radius: 20px;
          background: rgba(108,99,255,0.08); border: 1px solid rgba(108,99,255,0.12); white-space: nowrap;
        }
        .edu-current-badge {
          font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--accent3); letter-spacing: 1px;
          padding: 4px 12px; border-radius: 20px;
          background: rgba(0,212,170,0.08); border: 1px solid rgba(0,212,170,0.2);
          margin-left: 8px; white-space: nowrap;
        }
        .edu-desc { font-size: 14px; color: var(--text2); line-height: 1.7; }

        /* SKILLS */
        .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
        .skills-col-title {
          font-family: 'Clash Display', sans-serif; font-size: 22px; font-weight: 600;
          margin-bottom: 28px; display: flex; align-items: center; gap: 10px;
        }
        .skills-col-title .badge {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          padding: 3px 10px; border-radius: 20px; letter-spacing: 1px;
        }
        .badge-master { background: rgba(108,99,255,0.1); color: var(--accent); border: 1px solid rgba(108,99,255,0.2); }
        .badge-learn { background: rgba(0,212,170,0.1); color: var(--accent3); border: 1px solid rgba(0,212,170,0.2); }
        .skill-row {
          margin-bottom: 22px; opacity: 0; transform: translateX(-20px);
          transition: all 0.5s cubic-bezier(0.16,1,0.3,1);
        }
        .skill-row.vis { opacity: 1; transform: translateX(0); }
        .skill-info { display: flex; justify-content: space-between; margin-bottom: 8px; }
        .skill-name { font-size: 14px; font-weight: 500; }
        .skill-pct { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--accent); }
        .skill-track { height: 5px; background: rgba(255,255,255,0.04); border-radius: 3px; overflow: hidden; }
        .skill-fill {
          height: 100%; border-radius: 3px; width: 0;
          transition: width 1.2s cubic-bezier(0.16,1,0.3,1);
        }
        .skill-fill.master { background: var(--gradient); }
        .skill-fill.learn { background: var(--gradient2); }

        /* CERTS */
        .certs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .cert-card {
          background: var(--card); border: 1px solid rgba(108,99,255,0.06);
          border-radius: 20px; padding: 28px; position: relative; overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
          opacity: 0; transform: translateY(25px);
          cursor: pointer; text-decoration: none; display: block; color: inherit;
        }
        .cert-card.vis { opacity: 1; transform: translateY(0); }
        .cert-card:hover {
          transform: translateY(-6px); border-color: rgba(108,99,255,0.2);
          box-shadow: 0 20px 50px rgba(0,0,0,0.3);
        }
        .cert-glow {
          position: absolute; top: -40px; right: -40px;
          width: 100px; height: 100px; border-radius: 50%;
          filter: blur(50px); opacity: 0.15; transition: opacity 0.4s;
        }
        .cert-card:hover .cert-glow { opacity: 0.3; }
        .cert-icon { font-size: 32px; margin-bottom: 14px; position: relative; z-index: 1; }
        .cert-name {
          font-family: 'Clash Display', sans-serif; font-size: 17px; font-weight: 600;
          margin-bottom: 6px; position: relative; z-index: 1;
        }
        .cert-issuer { font-size: 13px; color: var(--text2); margin-bottom: 16px; position: relative; z-index: 1; }
        .cert-link {
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          color: var(--accent); display: flex; align-items: center; gap: 6px;
          position: relative; z-index: 1; transition: gap 0.3s;
        }
        .cert-card:hover .cert-link { gap: 10px; }

        /* PROJECTS */
        .projects-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .proj-card {
          background: var(--card); border: 1px solid rgba(108,99,255,0.06);
          border-radius: 20px; overflow: hidden;
          transition: all 0.5s cubic-bezier(0.16,1,0.3,1);
          opacity: 0; transform: translateY(30px); cursor: pointer;
        }
        .proj-card.vis { opacity: 1; transform: translateY(0); }
        .proj-card:hover {
          transform: translateY(-6px); border-color: rgba(108,99,255,0.15);
          box-shadow: 0 25px 50px rgba(0,0,0,0.35);
        }
        .proj-visual { height: 200px; position: relative; overflow: hidden; }
        .proj-bg { position: absolute; inset: 0; opacity: 0.12; transition: all 0.5s; }
        .proj-card:hover .proj-bg { opacity: 0.22; transform: scale(1.05); }
        .proj-dots {
          position: absolute; inset: 0;
          display: grid; grid-template-columns: repeat(8, 1fr); grid-template-rows: repeat(4, 1fr);
          gap: 6px; padding: 20px; opacity: 0.35;
        }
        .pdot {
          width: 100%; aspect-ratio: 1; border-radius: 50%;
          background: currentColor; opacity: 0.2; transition: opacity 0.3s;
        }
        .proj-card:hover .pdot { opacity: 0.35; }
        .proj-cat {
          position: absolute; top: 16px; left: 16px;
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          letter-spacing: 2px; text-transform: uppercase;
          padding: 5px 12px; border-radius: 30px;
          background: rgba(6,6,17,0.7); backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .proj-arrow {
          position: absolute; bottom: 16px; right: 16px;
          width: 40px; height: 40px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 16px; opacity: 0; transform: translate(8px, 8px); transition: all 0.4s;
        }
        .proj-card:hover .proj-arrow { opacity: 1; transform: translate(0,0); }
        .proj-info { padding: 24px; }
        .proj-title { font-family: 'Clash Display', sans-serif; font-size: 20px; font-weight: 600; margin-bottom: 8px; }
        .proj-desc { font-size: 13px; color: var(--text2); line-height: 1.6; margin-bottom: 16px; }
        .proj-tags { display: flex; gap: 6px; flex-wrap: wrap; }
        .proj-tag {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          padding: 4px 10px; border-radius: 16px;
          background: rgba(108,99,255,0.06); border: 1px solid rgba(108,99,255,0.1); color: var(--text2);
        }

        /* CONTACT */
        .contact-wrap { text-align: center; }
        .contact-title {
          font-family: 'Clash Display', sans-serif;
          font-size: clamp(32px, 5vw, 64px); font-weight: 700;
          letter-spacing: -1.5px; margin-bottom: 20px;
        }
        .contact-title .hl {
          background: var(--gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .contact-desc {
          font-size: 17px; color: var(--text2); max-width: 480px;
          margin: 0 auto 48px; line-height: 1.7;
        }
        .contact-cards {
          display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-bottom: 48px;
        }
        .contact-card {
          background: var(--card); border: 1px solid rgba(108,99,255,0.06);
          border-radius: 20px; padding: 28px 36px; text-decoration: none; color: inherit;
          transition: all 0.4s; display: flex; flex-direction: column; align-items: center; gap: 10px;
          min-width: 200px;
        }
        .contact-card:hover {
          border-color: rgba(108,99,255,0.25); transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.3);
        }
        .contact-card-icon { font-size: 28px; }
        .contact-card-label { font-size: 12px; color: var(--text2); text-transform: uppercase; letter-spacing: 1px; }
        .contact-card-value { font-family: 'Clash Display', sans-serif; font-size: 15px; font-weight: 500; }

        .socials { display: flex; gap: 16px; justify-content: center; }
        .social-btn {
          width: 50px; height: 50px; border-radius: 50%;
          border: 1px solid rgba(108,99,255,0.12); background: var(--card);
          display: flex; align-items: center; justify-content: center;
          color: var(--text2); text-decoration: none; font-size: 14px;
          font-weight: 600; transition: all 0.3s;
        }
        .social-btn:hover {
          border-color: var(--accent); color: var(--accent);
          transform: translateY(-4px); box-shadow: 0 10px 25px var(--glow);
        }

        .footer {
          text-align: center; padding: 36px 40px;
          border-top: 1px solid rgba(108,99,255,0.06);
          font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--text2);
        }

        .marquee {
          overflow: hidden; padding: 36px 0;
          border-top: 1px solid rgba(108,99,255,0.06);
          border-bottom: 1px solid rgba(108,99,255,0.06);
        }
        .marquee-track { display: flex; animation: mScroll 35s linear infinite; width: max-content; }
        .marquee-word {
          font-family: 'Clash Display', sans-serif; font-size: 64px; font-weight: 700;
          white-space: nowrap; padding: 0 32px;
          color: transparent; -webkit-text-stroke: 1px rgba(108,99,255,0.1); letter-spacing: -2px;
        }
        @keyframes mScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        @media (max-width: 1024px) {
          .about-grid { grid-template-columns: 1fr; gap: 40px; }
          .about-visual { height: 300px; }
          .skills-grid { grid-template-columns: 1fr; gap: 40px; }
          .certs-grid { grid-template-columns: repeat(2, 1fr); }
          .projects-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .nav { padding: 14px 20px; }
          .nav-links { display: none; }
          .menu-btn { display: flex; }
          .hero { padding: 100px 20px 60px; }
          .section { padding: 70px 20px; }
          .about-stats { grid-template-columns: 1fr 1fr; }
          .certs-grid { grid-template-columns: 1fr; }
          .contact-cards { flex-direction: column; align-items: center; }
        }
      `}</style>

      <div className="root">
        <div className="grain" />

        <nav className="nav">
          <div className="nav-logo">AA.</div>
          <ul className="nav-links">
            {navItems.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className={activeSection === id ? "active" : ""}>{label}</a>
              </li>
            ))}
          </ul>
          <button className={`menu-btn ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>
        </nav>

        {menuOpen && (
          <div className="mobile-nav">
            {navItems.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </div>
        )}

        {/* HERO */}
        <section id="hero" className="hero">
          <div className="hero-orb o1" />
          <div className="hero-orb o2" />
          <div className="hero-orb o3" />
          <div className="hero-grid-bg" />
          <div className="hero-content">
            <div className="hero-badge"><span className="dot" /> Étudiant Ingénieur · ENSEM Casablanca</div>
            <h1 className="hero-name">Amine<br /><span className="grad">Andame</span></h1>
            <div className="hero-title">Software Engineering & Digitalization</div>
            <p className="hero-sub">
              Étudiant en 1ère année Génie Logiciel & Digitalisation à l'ENSEM.
              Développeur fullstack passionné, je construis des expériences web modernes et performantes.
            </p>
            <div className="hero-btns">
              <button className="btn-main" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                Voir mes projets
              </button>
              <button className="btn-ghost" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                Me contacter
              </button>
            </div>
          </div>
          <div className="hero-scroll"><div className="scroll-bar" /></div>
        </section>

        <div className="marquee">
          <div className="marquee-track">
            {[...Array(2)].map((_, i) => (
              <span key={i} style={{ display: "flex" }}>
                {["FULLSTACK", "HTML", "CSS", "JAVASCRIPT", "PHP", "SQL", "REACT", "LARAVEL", "ENSEM"].map((w, j) => (
                  <span key={j} className="marquee-word">{w} ✦</span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className={`sec-head ${isVisible("about") ? "vis" : ""}`}>
            <div className="sec-label">01 — À propos</div>
            <h2 className="sec-title">Qui suis-je<span className="hl"> ?</span></h2>
          </div>
          <div className="about-grid">
            <div style={{ opacity: isVisible("about") ? 1 : 0, transform: isVisible("about") ? "none" : "translateY(30px)", transition: "all 0.8s ease 0.2s" }}>
              <div className="about-text">
                <p>
                  Salut ! Je suis <strong style={{ color: "var(--text)" }}>Amine Andame</strong>, étudiant ingénieur
                  en <strong style={{ color: "var(--text)" }}>Génie Logiciel & Digitalisation</strong> à l'ENSEM de Casablanca.
                </p>
                <p>
                  Passionné par le développement web fullstack, je maîtrise HTML, CSS, JavaScript, PHP et SQL,
                  et je suis actuellement en train d'approfondir React, Next.js, Laravel et MongoDB.
                  J'aime créer des interfaces modernes, propres et performantes.
                </p>
                <p>
                  Après deux années intenses en classes préparatoires PCSI/PSI, je mets aujourd'hui
                  ma rigueur scientifique au service de la création digitale.
                </p>
              </div>
              <div className="about-stats">
                {[
                  { num: "6", lbl: "Certifications" },
                  { num: "1ère", lbl: "Année ENSEM" },
                  { num: "∞", lbl: "Motivation" },
                ].map((s, i) => (
                  <div key={i} className={`stat ${isVisible("about") ? "vis" : ""}`} style={{ transitionDelay: `${0.3 + i * 0.12}s` }}>
                    <div className="stat-num">{s.num}</div>
                    <div className="stat-lbl">{s.lbl}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-visual" style={{ opacity: isVisible("about") ? 1 : 0, transition: "opacity 0.8s ease 0.3s" }}>
              <div className="avatar-frame">
                <div className="avatar-inner">
                  <span className="avatar-initials">AA</span>
                </div>
              </div>
              <div className="about-deco1" />
              <div className="about-deco2" />
            </div>
          </div>
        </section>

        <div className="divider"><div className="divider-line" /></div>

        {/* EDUCATION */}
        <section id="education" className="section">
          <div className={`sec-head ${isVisible("education") ? "vis" : ""}`}>
            <div className="sec-label">02 — Formation</div>
            <h2 className="sec-title">Mon <span className="hl">parcours</span> académique</h2>
          </div>
          <div className="edu-timeline">
            {education.map((edu, i) => (
              <div key={i} className={`edu-item ${isVisible("education") ? "vis" : ""}`} style={{ transitionDelay: `${0.2 + i * 0.18}s` }}>
                <div className={`edu-dot ${edu.current ? "current" : ""}`} />
                <div className="edu-card">
                  <div className="edu-icon">{edu.icon}</div>
                  <div className="edu-head">
                    <div>
                      <div className="edu-title-text">{edu.title}</div>
                      <div className="edu-school">{edu.school}{edu.location ? ` · ${edu.location}` : ""}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span className="edu-period">{edu.period}</span>
                      {edu.current && <span className="edu-current-badge">EN COURS</span>}
                    </div>
                  </div>
                  <div className="edu-desc">{edu.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider"><div className="divider-line" /></div>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className={`sec-head ${isVisible("skills") ? "vis" : ""}`}>
            <div className="sec-label">03 — Compétences</div>
            <h2 className="sec-title">Mon <span className="hl">arsenal</span> technique</h2>
          </div>
          <div className="skills-grid">
            <div>
              <div className="skills-col-title">Maîtrisées <span className="badge badge-master">STACK</span></div>
              {skillsMastered.map((sk, i) => (
                <div key={sk.name} className={`skill-row ${isVisible("skills") ? "vis" : ""}`} style={{ transitionDelay: `${0.1 + i * 0.07}s` }}>
                  <div className="skill-info">
                    <span className="skill-name">{sk.name}</span>
                    <span className="skill-pct">{sk.level}%</span>
                  </div>
                  <div className="skill-track">
                    <div className={`skill-fill master`} style={{ width: isVisible("skills") ? `${sk.level}%` : "0%", transitionDelay: `${0.3 + i * 0.08}s` }} />
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="skills-col-title">En cours <span className="badge badge-learn">LEARNING</span></div>
              {skillsLearning.map((sk, i) => (
                <div key={sk.name} className={`skill-row ${isVisible("skills") ? "vis" : ""}`} style={{ transitionDelay: `${0.1 + i * 0.07}s` }}>
                  <div className="skill-info">
                    <span className="skill-name">{sk.name}</span>
                    <span className="skill-pct" style={{ color: "var(--accent3)" }}>{sk.progress}%</span>
                  </div>
                  <div className="skill-track">
                    <div className={`skill-fill learn`} style={{ width: isVisible("skills") ? `${sk.progress}%` : "0%", transitionDelay: `${0.3 + i * 0.08}s` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider"><div className="divider-line" /></div>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="section">
          <div className={`sec-head ${isVisible("certifications") ? "vis" : ""}`}>
            <div className="sec-label">04 — Certificats</div>
            <h2 className="sec-title">Mes <span className="hl">certifications</span></h2>
          </div>
          <div className="certs-grid">
            {certifications.map((cert, i) => (
              <a key={i} href={cert.link} target="_blank" rel="noopener noreferrer"
                className={`cert-card ${isVisible("certifications") ? "vis" : ""}`}
                style={{ transitionDelay: `${0.1 + i * 0.1}s` }}>
                <div className="cert-glow" style={{ background: cert.color }} />
                <div className="cert-icon">{cert.icon}</div>
                <div className="cert-name">{cert.name}</div>
                <div className="cert-issuer">{cert.issuer}</div>
                <div className="cert-link">Voir le certificat →</div>
              </a>
            ))}
          </div>
        </section>

        <div className="divider"><div className="divider-line" /></div>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className={`sec-head ${isVisible("projects") ? "vis" : ""}`}>
            <div className="sec-label">05 — Projets</div>
            <h2 className="sec-title">Mes <span className="hl">réalisations</span></h2>
          </div>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <div key={p.id} className={`proj-card ${isVisible("projects") ? "vis" : ""}`}
                style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
                onMouseEnter={() => setHoveredProject(p.id)}
                onMouseLeave={() => setHoveredProject(null)}>
                <div className="proj-visual">
                  <div className="proj-bg" style={{
                    background: `radial-gradient(circle at 30% 50%, ${p.color}35, transparent 70%), radial-gradient(circle at 80% 80%, ${p.color}18, transparent)`
                  }} />
                  <div className="proj-dots" style={{ color: p.color }}>
                    {[...Array(32)].map((_, j) => (
                      <div key={j} className="pdot" style={{
                        opacity: hoveredProject === p.id ? 0.2 + Math.random() * 0.4 : 0.12,
                        transform: `scale(${0.4 + Math.random() * 0.8})`, transition: "opacity 0.4s"
                      }} />
                    ))}
                  </div>
                  <div className="proj-cat">{p.category}</div>
                  <div className="proj-arrow" style={{ background: p.color }}>→</div>
                </div>
                <div className="proj-info">
                  <div className="proj-title">{p.title}</div>
                  <div className="proj-desc">{p.description}</div>
                  <div className="proj-tags">
                    {p.tech.map(t => <span key={t} className="proj-tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider"><div className="divider-line" /></div>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="contact-wrap">
            <div className={`sec-head ${isVisible("contact") ? "vis" : ""}`} style={{ textAlign: "center" }}>
              <div className="sec-label">06 — Contact</div>
            </div>
            <div style={{ opacity: isVisible("contact") ? 1 : 0, transform: isVisible("contact") ? "none" : "translateY(30px)", transition: "all 0.8s ease 0.2s" }}>
              <div className="contact-title">Travaillons <span className="hl">ensemble</span></div>
              <p className="contact-desc">
                Un projet, une collaboration, ou juste envie de discuter tech ?
                N'hésitez pas à me contacter !
              </p>
              <div className="contact-cards">
                <a href="mailto:andameamine7@gmail.com" className="contact-card">
                  <div className="contact-card-icon">📧</div>
                  <div className="contact-card-label">Email</div>
                  <div className="contact-card-value">andameamine7@gmail.com</div>
                </a>
                <a href="tel:+212774235890" className="contact-card">
                  <div className="contact-card-icon">📱</div>
                  <div className="contact-card-label">Téléphone</div>
                  <div className="contact-card-value">+212 7 74 23 58 90</div>
                </a>
                <div className="contact-card">
                  <div className="contact-card-icon">📍</div>
                  <div className="contact-card-label">Localisation</div>
                  <div className="contact-card-value">Casablanca, Maroc</div>
                </div>
              </div>
              <div className="socials">
                <a href="https://github.com/andameamine" target="_blank" rel="noopener noreferrer" className="social-btn" title="GitHub">GH</a>
                <a href="https://www.linkedin.com/in/amine-andame-500673280/" target="_blank" rel="noopener noreferrer" className="social-btn" title="LinkedIn">LI</a>
                <a href="https://www.instagram.com/andameamine/" target="_blank" rel="noopener noreferrer" className="social-btn" title="Instagram">IG</a>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          © 2025 Amine Andame — Built with passion & code ✦ ENSEM Casablanca
        </footer>
      </div>
    </>
  );
};

export default Portfolio;
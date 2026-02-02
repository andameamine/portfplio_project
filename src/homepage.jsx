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
          z-index: 2;
        }
        .avatar-photo {
          width: 100%; height: 100%; object-fit: cover; object-position: center 15%;
          position: relative; z-index: 1;
          filter: contrast(1.05) brightness(1.02);
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
                  <img className="avatar-photo" src="data:image/jpeg;base64,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" alt="Amine Andame" />
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
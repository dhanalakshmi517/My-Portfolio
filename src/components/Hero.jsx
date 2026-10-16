
import { useEffect, useState, useRef } from "react";
import "./../styles/Hero.css";

function Hero() {
  const roles = [
    "Frontend Developer",
    "Manual QA Tester",
    "React Developer",
    "UI Problem Solver",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [dots, setDots] = useState([]);
  const heroSectionRef = useRef(null);
  const dotsContainerRef = useRef(null);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let delay = deleting ? 45 : 90;

    if (!deleting && displayText === currentRole) {
      delay = 1400;
    } else if (deleting && displayText === "") {
      delay = 350;
    }

    const timer = setTimeout(() => {
      if (!deleting && displayText === currentRole) {
        setDeleting(true);
      } else if (deleting && displayText === "") {
        setDeleting(false);
        setRoleIndex((previous) => (previous + 1) % roles.length);
      } else if (deleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayText, deleting, roleIndex]);

  // Initialize dots
  useEffect(() => {
    const generateDots = () => {
      const newDots = [];
      const dotCount = 120;
      
      for (let i = 0; i < dotCount; i++) {
        newDots.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          vx: (Math.random() - 0.5) * 0.1,
          vy: (Math.random() - 0.5) * 0.1,
          size: Math.random() * 2 + 1,
          color: ['accent', 'cyan', 'purple'][Math.floor(Math.random() * 3)],
          scattered: false,
        });
      }
      setDots(newDots);
    };
    
    generateDots();
  }, []);

  // Animate dots
  useEffect(() => {
    const animationInterval = setInterval(() => {
      setDots(prevDots =>
        prevDots.map(dot => {
          let newX = dot.x + dot.vx;
          let newY = dot.y + dot.vy;
          let newVx = dot.vx;
          let newVy = dot.vy;

          // Bounce off edges smoothly
          if (newX <= 0 || newX >= 100) {
            newVx *= -1;
            newX = Math.max(0, Math.min(100, newX));
          }
          if (newY <= 0 || newY >= 100) {
            newVy *= -1;
            newY = Math.max(0, Math.min(100, newY));
          }

          // Check distance from mouse
          const distance = Math.sqrt(
            Math.pow((newX - (mousePos.x / window.innerWidth) * 100), 2) +
            Math.pow((newY - (mousePos.y / window.innerHeight) * 100), 2)
          );

          // Smooth repulsion when cursor is near
          if (distance < 20 && distance > 0) {
            const angle = Math.atan2(
              newY - (mousePos.y / window.innerHeight) * 100,
              newX - (mousePos.x / window.innerWidth) * 100
            );
            const force = (20 - distance) / 20; // 0 to 1
            newVx += Math.cos(angle) * force * 0.8;
            newVy += Math.sin(angle) * force * 0.8;
          }

          // Apply damping to slow down over time
          newVx *= 0.98;
          newVy *= 0.98;

          // Limit velocity
          const maxSpeed = 0.15;
          const speed = Math.sqrt(newVx * newVx + newVy * newVy);
          if (speed > maxSpeed) {
            newVx = (newVx / speed) * maxSpeed;
            newVy = (newVy / speed) * maxSpeed;
          }

          return {
            ...dot,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
          };
        })
      );
    }, 30); // Increased interval for smoother animation

    return () => clearInterval(animationInterval);
  }, [mousePos]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroSectionRef.current) {
        const rect = heroSectionRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePos({ x, y });
      }
    };

    const heroSection = heroSectionRef.current;
    if (heroSection) {
      heroSection.addEventListener("mousemove", handleMouseMove);
      return () => heroSection.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <section 
      className="hero-section" 
      id="home"
      ref={heroSectionRef}
      style={{
        '--mouse-x': `${mousePos.x}px`,
        '--mouse-y': `${mousePos.y}px`,
      }}
    >
      <div className="hero-background">
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>
        <div className="hero-grid"></div>
        
        <div className="hero-dots-container" ref={dotsContainerRef}>
          {dots.map(dot => (
            <div
              key={dot.id}
              className={`floating-dot dot-${dot.color}`}
              style={{
                left: `${dot.x}%`,
                top: `${dot.y}%`,
                width: `${dot.size}px`,
                height: `${dot.size}px`,
                opacity: dot.scattered ? 0.8 : 0.5,
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}
        </div>

        <span className="hero-particle particle-one"></span>
        <span className="hero-particle particle-two"></span>
        <span className="hero-particle particle-three"></span>
        <span className="hero-particle particle-four"></span>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-intro-pill">
            <span className="hero-status-dot"></span>
            <span>WELCOME TO MY DIGITAL SPACE</span>
            <span className="pill-sparkle">✦</span>
          </div>

          <p className="hero-kicker">
            HELLO WORLD <span className="wave">👋</span> I'M
          </p>

          <h1 className="hero-title">
            Dhanalakshmi <span className="hero-gradient-name">Jinka.</span>
          </h1>

          <div className="hero-role-line">
            <span className="role-prefix">I'm a</span>
            <span className="typing-role">{displayText}</span>
            <span className="typing-cursor" aria-hidden="true"></span>
          </div>

          <p className="hero-description">
            I build beautiful, responsive web experiences and test them
            with a detail-oriented mindset. I bring frontend development
            and quality assurance together to make the web work better.
          </p>

          <div className="hero-actions">
            <a className="hero-btn hero-btn-primary" href="#projects">
              <span>Explore my work</span>
              <span className="btn-arrow">↗</span>
            </a>

            <a className="hero-btn hero-btn-secondary" href="#contact">
              <span className="contact-icon">✉</span>
              <span>Let's connect</span>
            </a>
          </div>

          <div className="hero-social-proof">
            <div className="hero-social-icon">
              <span>⌘</span>
            </div>

            <div>
              <p className="social-proof-title">Developer by craft</p>
              <p className="social-proof-subtitle">
                Tester by mindset · Learner by nature
              </p>
            </div>

            <div className="hero-proof-divider"></div>

            <div className="hero-scroll-indicator">
              <span className="scroll-mouse">
                <span></span>
              </span>
              <span>SCROLL TO EXPLORE</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bottom-line"></div>
    </section>
  );
}

export default Hero;

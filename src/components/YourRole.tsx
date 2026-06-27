import { useEffect, useRef, useState } from "react";
import { Users, Lightbulb, Radio, Briefcase, BookOpen } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import "./YourRole.css";

interface StatItem {
  icon: LucideIcon;
  target: number;
  suffix: string;
  label: string;
}

interface ContribCard {
  icon: LucideIcon;
  title: string;
  points: string[];
}

const contribCards: ContribCard[] = [
  {
    icon: Users,
    title: "Learn, lead, grow with us",
    points: [
      "Build tech communities by bringing your peers together",
      "Host regular workshops and events focused on skill building",
      "Learn design, technology, and business from industry professionals",
    ],
  },
  {
    icon: Lightbulb,
    title: "Make a difference",
    points: [
      "Close the gap between industry and academia",
      "Take new learnings to build solutions for real life problems",
      "Strengthen your skill set while building future leaders",
    ],
  },
];

const stats: StatItem[] = [
  { icon: Users, target: 95, suffix: "", label: "Student Partners enrolled" },
  {
    icon: Radio,
    target: 80,
    suffix: "+",
    label: "Knowledge sharing sessions delivered",
  },
  { icon: Briefcase, target: 5, suffix: "", label: "Student Partners hired" },
  {
    icon: BookOpen,
    target: 2100,
    suffix: "+",
    label: "Students impacted by LSPs",
  },
];

function RingCounter({
  target,
  suffix,
  animate,
}: {
  target: number;
  suffix: string;
  animate: boolean;
}) {
  const [count, setCount] = useState(0);
  const [offset, setOffset] = useState(0);
  const radius = 15.9;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (!animate) return;
    const duration = 1800;
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(ease * target));
      setOffset(circumference * (1 - ease));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [animate, target, circumference]);

  return (
    <div className="yr-ring-wrap">
      <svg
        width="64"
        height="64"
        viewBox="0 0 36 36"
        style={{ transform: "rotate(-90deg)" }}
        aria-hidden="true"
      >
        <circle className="yr-ring-track" cx="18" cy="18" r={radius} />
        <circle
          className="yr-ring-fill"
          cx="18"
          cy="18"
          r={radius}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: animate ? offset : circumference,
          }}
        />
      </svg>
      <span className="yr-stat-number">
        {count}
        {suffix}
      </span>
    </div>
  );
}

export default function YourRole() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="yr-section">
      <div className="yr-contrib-block">
        <p className="yr-eyebrow">Your role</p>
        <h2 className="yr-heading">How will you be contributing?</h2>
        <div className="yr-cards-grid">
          {contribCards.map((card) => (
            <div className="yr-card" key={card.title}>
              <card.icon
                className="yr-card-icon"
                size={24}
                aria-hidden="true"
              />
              <h3 className="yr-card-title">{card.title}</h3>
              <ul className="yr-card-points">
                {card.points.map((pt) => (
                  <li key={pt}>
                    <span className="yr-dot" aria-hidden="true" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="yr-divider" />

      <div className="yr-stats-block" ref={statsRef}>
        <h2 className="yr-heading">Building it, bit by bit</h2>
        <p className="yr-stats-sub">Our impact so far</p>
        <div className="yr-stats-grid">
          {stats.map((s, i) => (
            <div className="yr-stat-card" key={i}>
              <div className="yr-stat-top-bar" />
              <s.icon className="yr-stat-icon" size={22} aria-hidden="true" />
              <RingCounter
                target={s.target}
                suffix={s.suffix}
                animate={animate}
              />
              <p className="yr-stat-label">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

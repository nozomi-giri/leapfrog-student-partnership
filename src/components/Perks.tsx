import { Users, Briefcase, Gift, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import "./Perks.css";

interface Perk {
  title: string;
  description: string;
  icon: ReactNode;
}

const perks: Perk[] = [
  {
    title: "Become a Leader",
    description:
      "Get mentorship from industry experts and empower your peers through knowledge sharing sessions.",
    icon: <Users size={28} />,
  },
  {
    title: "Professional Exposure",
    description:
      "Step into the professional world and network with experienced tech professionals.",
    icon: <Briefcase size={28} />,
  },
  {
    title: "Exclusive Rewards",
    description:
      "Access curated trainings, courses, and resources, plus certificates and goodies.",
    icon: <Gift size={28} />,
  },
  {
    title: "Personal Growth",
    description:
      "Get guidance on your own projects while developing essential soft skills.",
    icon: <Sparkles size={28} />,
  },
];

function Perks() {
  return (
    <section className="perks" id="perks">
      <h2>What are the perks?</h2>
      <div className="perks-grid">
        {perks.map((perk) => (
          <div className="perk-card" key={perk.title}>
            <div className="perk-icon">{perk.icon}</div>
            <h3>{perk.title}</h3>
            <p>{perk.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Perks;

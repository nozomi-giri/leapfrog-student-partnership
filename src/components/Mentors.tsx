import { useState } from "react";
import { X } from "lucide-react";
import "./Mentors.css";

import mentor1 from "../assets/gallery/Mentor1.png";
import mentor2 from "../assets/gallery/Mentor2.png";
import mentor3 from "../assets/gallery/Mentor3.png";
import mentor4 from "../assets/gallery/Mentor4.png";
import mentor5 from "../assets/gallery/Mentor5.png";
import mentor6 from "../assets/gallery/Mentor6.png";
import mentor7 from "../assets/gallery/Mentor7.png";
import mentor8 from "../assets/gallery/Mentor8.png";
import mentor9 from "../assets/gallery/Mentor9.png";
import mentor10 from "../assets/gallery/Mentor10.png";
import mentor11 from "../assets/gallery/Mentor11.png";
import mentor12 from "../assets/gallery/Mentor12.png";
import mentor13 from "../assets/gallery/Mentor13.png";
import mentor14 from "../assets/gallery/Mentor14.png";

interface Mentor {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const mentors: Mentor[] = [
  {
    name: "Adarsha Regmi",
    role: "Senior Software Engineer",
    image: mentor1,
    bio: "Experienced professional specializing in backend development with a passion for travelling and exploring new places",
  },
  {
    name: "Ayush Bajracharya",
    role: "Senior Software Engineer",
    image: mentor2,
    bio: "Tech-savvy and passionate about creating practical solutions, currently exploring Generative AI and cloud technologies. Off the keyboard, he enjoys football, gaming, and watching crime and thriller movies",
  },
  {
    name: "Bijen Shrestha",
    role: "Software Engineer",
    image: mentor3,
    bio: "Returning as a facilitator for LSPP for the second time with 1.5+ years of experience. Enjoys meeting new people, eating good food, boxing and weightlifting.",
  },
  {
    name: "Dimple Saraogi",
    role: "Software Engineer",
    image: mentor4,
    bio: "Passionate expert with 2 years of experience skilled in Spring Boot, Python, and JavaScript. Besides work, she loves dancing, music, and having movie marathons.",
  },
  {
    name: "Jenish Twayana",
    role: "Software Engineer, AI",
    image: mentor5,
    bio: "AI engineer with 2 years of experience building intelligent systems. Sci-fi movie enthusiast who enjoys trekking and exploring new destinations.",
  },
  {
    name: "Khem Raj Upreti",
    role: "Senior Software Engineer",
    image: mentor6,
    bio: "Software engineer with 5+ years of experience in the JavaScript ecosystem. Passionate about building products and an avid reader.",
  },
  {
    name: "Pranav Dhoj Joshi",
    role: "Senior QA Engineer",
    image: mentor7,
    bio: "Software Quality Assurance professional with 5+ years of experience delivering high-quality web and mobile applications through manual, functional, automation, and exploratory testing.",
  },
  {
    name: "Priyanka Tuladhar",
    role: "Software Engineer, DevOps",
    image: mentor8,
    bio: "DevOps Engineer with a creative side. When she's not deploying code, she's hiking, painting, reading, or keeping her plants alive.",
  },
  {
    name: "Purna Shrestha",
    role: "Associate Software Engineer",
    image: mentor9,
    bio: "Software Engineer focused on development, building software with a solid foundation in Generative AI. Off the clock, he is into design, music, art, Marvel, and everything related to bikes.",
  },
  {
    name: "Sandriya Malla",
    role: "Project Manager",
    image: mentor10,
    bio: "Project Manager leading cross-functional teams to develop software products and turn ideas into results during weekdays, while exploring creativity through painting on weekends.",
  },
  {
    name: "Saru Manandhar",
    role: "Software Engineer",
    image: mentor11,
    bio: "Software Engineer with 2+ years of experience. Outside of work, she enjoys watching K-dramas and anime, exploring new shows, good horror stories, and content with strong character development.",
  },
  {
    name: "Sayomi Prajapati",
    role: "Associate Manager, Marketing & Communications",
    image: mentor12,
    bio: "Seasoned marketer with 7+ years of experience in digital marketing, content creation, and events. Interests: Anime, art, Formula 1.",
  },
  {
    name: "Siza Adhikari",
    role: "Senior Software Engineer",
    image: mentor13,
    bio: "Proactive data engineer building LLM/GenAI healthcare solutions. Barista at heart, anime and manga lover, known for sharing talks and coffee across multiple socials.",
  },
  {
    name: "Suichhya Tamrakar",
    role: "Officer, Marketing & Communications",
    image: mentor14,
    bio: "Marketing, content & events creative with 6+ years of experience. Part-time organizational freak, full-time book hoarder with a soft spot for journaling and calligraphy.",
  },
];

export default function Mentors() {
  const [selected, setSelected] = useState<Mentor | null>(null);

  return (
    <section className="mn-section" id="mentors">
      <div className="mn-header">
        <p className="mn-eyebrow">The people behind it</p>
        <h2 className="mn-heading">Meet our mentors</h2>
        <p className="mn-sub">
          The industry experts shaping the student partners to learn, lead and
          grow.
        </p>
      </div>

      <div className="mn-grid">
        {mentors.map((mentor) => (
          <div
            className="mn-card"
            key={mentor.name}
            onClick={() => setSelected(mentor)}
          >
            <div className="mn-img-wrap">
              <img src={mentor.image} alt={mentor.name} />
              <div className="mn-card-overlay">
                <div className="mn-card-overlay">
                  <span>{mentor.name}</span>
                  <small>{mentor.role}</small>
                  <small className="mn-overlay-bio">{mentor.bio}</small>
                </div>
              </div>
            </div>
            <p className="mn-name">{mentor.name}</p>
            <p className="mn-role">{mentor.role}</p>
          </div>
        ))}
      </div>

      {selected && (
        <div className="mn-lightbox" onClick={() => setSelected(null)}>
          <div className="mn-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="mn-close"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <div className="mn-modal-img">
              <img src={selected.image} alt={selected.name} />
            </div>
            <div className="mn-modal-info">
              <h3 className="mn-modal-name">{selected.name}</h3>
              <p className="mn-modal-role">{selected.role}</p>
              <p className="mn-modal-bio">{selected.bio}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

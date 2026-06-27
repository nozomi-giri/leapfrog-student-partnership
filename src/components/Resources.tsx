import type { ReactNode } from "react";
import { Video, Presentation, FolderGit2, Newspaper } from "lucide-react";
import "./Resources.css";

interface Resource {
  title: string;
  linkText: string;
  icon: ReactNode;
  cardColor: string;
}
const resources: Resource[] = [
  {
    title: "Event & Insights Videos",
    linkText: "Watch on YouTube",
    icon: <Video size={32} />,
    cardColor: "card-blue",
  },
  {
    title: "Workshops",
    linkText: "Checkout Recordings",
    icon: <Presentation size={32} />,
    cardColor: "card-green",
  },
  {
    title: "Projects by Partners",
    linkText: "Checkout Latest Projects",
    icon: <FolderGit2 size={32} />,
    cardColor: "card-yellow",
  },
  {
    title: "Look at the Byte Side",
    linkText: "Checkout on LinkedIn",
    icon: <Newspaper size={32} />,
    cardColor: "card-pink",
  },
];

function Resources() {
  return (
    <section className="resources" id="resources">
      <h2>Resources</h2>
      <p className="resources-subtitle">
        Take a 'byte' into what we cook — explore some great resources to get
        started.
      </p>
      <div className="resources-grid">
        {resources.map((resource) => (
          <div
            className={`resource-card ${resource.cardColor}`}
            key={resource.title}
          >
            <div className="resource-icon">{resource.icon}</div>
            <h3>{resource.title}</h3>
            <span className="resource-link">{resource.linkText} →</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Resources;

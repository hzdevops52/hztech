import React from "react";
import { ArrowUpRight, ShoppingBag, UtensilsCrossed, Monitor } from "lucide-react";

const projects = [
  {
    id: "novacart",
    image: "/images/projects/novacart.png",
    name: "NovaCart",
    category: "E-COMMERCE",
    description:
      "A modern e-commerce storefront for browsing products through a clean, responsive shopping interface.",
    stack: ["Online Store", "Product UI", "Responsive Design"],
    url: "https://hzdevops52.github.io/novacart/",
    icon: ShoppingBag,
    previewClass: "work-preview-novacart",
    previewLabel: "YOUR NEXT FAVORITE FIND",
    previewTitle: "Discover something new.",
    previewDetail: "Thoughtful shopping, made simple.",
  },
  {
    id: "restoflow",
    image: "/images/projects/restoflow.png",
    name: "RestoFlow",
    category: "RESTAURANT OPERATIONS",
    description:
      "A restaurant order-taking interface designed to help staff handle customer orders efficiently.",
    stack: ["Restaurant UI", "Order Taking", "Operations"],
    url: "https://hzdevops52.github.io/Restoflow/order-taker",
    icon: UtensilsCrossed,
    previewClass: "work-preview-restoflow",
    previewLabel: "RESTAURANT WORKFLOW",
    previewTitle: "Orders, organized.",
    previewDetail: "A clearer view of the order-taking experience.",
  },
  {
    id: "retailshop",
    image: "/images/projects/retailshop.png",
    name: "HZ Retail POS",
    category: "RETAIL OPERATIONS",
    description:
      "A retail point-of-sale interface for managing sales, inventory, returns, and business reports.",
    stack: ["POS Interface", "Inventory Management", "Sales & Reports"],
    url: "https://hzdevops52.github.io/POS_System/",
    icon: Monitor,
    previewClass: "work-preview-retailshop",
    previewLabel: "RETAIL OPERATIONS",
    previewTitle: "Sales, simplified.",
    previewDetail: "A clearer view of everyday retail operations.",
  },
  {
    id: "cravory",
    image: "/images/projects/cravory.png",
    name: "Cravory",
    category: "RESTAURANT WEBSITE",
    description:
      "A restaurant website showcasing the Cravory dining experience and customer ordering journey.",
    stack: ["Restaurant Website", "Online Ordering", "Responsive Design"],
    url: "https://hzdevops52.github.io/cravory_restaurant/",
    icon: UtensilsCrossed,
    previewClass: "work-preview-cravory",
    previewLabel: "RESTAURANT EXPERIENCE",
    previewTitle: "Good food, beautifully presented.",
    previewDetail: "Explore the Cravory restaurant website.",
  },
];

function ProjectCard({ project, index }) {
  const Icon = project.icon;

  return (
    <article className="work-card">
      <div className={`work-project-preview ${project.previewClass}`}>
        <div className="work-preview-heading">
          <span className="work-project-category">{project.category}</span>
          <h3>{project.name}</h3>
        </div>
        <img
          className="work-project-screenshot"
          src={project.image}
          alt={`Full-page screenshot of the ${project.name} website`}
          loading="lazy"
        />
      </div>

      <div className="work-card-body">
        <p className="work-project-description">{project.description}</p>

        <div className="work-project-tags">
          {project.stack.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <a
          className="work-demo-link"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open the live ${project.name} demo in a new tab`}
        >
          Explore Live Demo
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section className="work-section" id="work">
      <div className="section-shell">
        <div className="section-heading work-section-heading">
          <div>
            <span className="section-kicker">
              <span />
              SELECTED PROJECTS
            </span>
            <h2>
              Our Work<span className="text-gradient">.</span>
            </h2>
          </div>
          <p>
            Explore live showcases of digital experiences built for online
            shopping and everyday business operations.
          </p>
        </div>

        <div className="work-project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <p className="work-section-note">
          Each showcase opens separately so you can explore the project.
        </p>
      </div>
    </section>
  );
}

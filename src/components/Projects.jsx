
import "./../styles/Projects.css";

function Projects() {
  const projects = [
    {
      number: "01",
      category: "FRONTEND DEVELOPMENT",
      title: "Responsive web interfaces",
      description:
        "Built and improved responsive landing pages and web interfaces, focusing on clean layouts, consistent styling, and mobile-friendly experiences.",
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      icon: "</>",
      theme: "blue",
      type: "Development",
    },
    {
      number: "02",
      category: "WEB APPLICATION",
      title: "Live storefront experience",
      description:
        "Worked on storefront interface improvements, responsive layouts, UI consistency, and frontend bug fixes across different screen sizes.",
      technologies: ["React", "CSS", "Responsive UI"],
      icon: "↗",
      theme: "pink",
      type: "Development",
    },
    {
      number: "03",
      category: "QUALITY ASSURANCE",
      title: "Manual testing & bug tracking",
      description:
        "Tested application workflows, documented defects with reproduction steps, verified fixes, and updated issue statuses.",
      technologies: ["Manual QA", "Jira", "Regression Testing"],
      icon: "✓",
      theme: "blue",
      type: "Testing",
    },
    {
      number: "04",
      category: "RESPONSIVE TESTING",
      title: "Cross-device UI validation",
      description:
        "Checked layouts on different screen sizes, identified visual issues, and validated responsive behavior across web pages.",
      technologies: ["UI Testing", "Mobile Testing", "CSS"],
      icon: "▣",
      theme: "pink",
      type: "Testing",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <header className="projects-heading">
          <span className="projects-eyebrow">MY WORK</span>

          <h2>
            Projects & <span>contributions.</span>
          </h2>

          <p>
            A collection of my frontend development work and quality
            assurance experience, from responsive interfaces to
            testing real-world application workflows.
          </p>
        </header>

        <div className="projects-filter-label">
          <span className="projects-filter-dot"></span>
          FRONTEND DEVELOPMENT <span>+</span> QUALITY ASSURANCE
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`project-card project-card-${project.theme}`}
              key={project.number}
            >
              <div className="project-card-top">
                <span className="project-number">{project.number}</span>

                <span className="project-type">{project.type}</span>
              </div>

              <div className="project-visual">
                <div className="project-visual-glow"></div>

                <div className="project-visual-icon">
                  {project.icon}
                </div>

                {project.type === "Development" ? (
                  <div className="project-code-lines" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                ) : (
                  <div className="project-check-circle" aria-hidden="true">
                    <span>✓</span>
                  </div>
                )}
              </div>

              <div className="project-card-content">
                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>

              <div className="project-card-footer">
                <span className="project-footer-line"></span>
                <span>{project.type}</span>
                <span className="project-footer-star">✳</span>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-bottom">
          <span className="projects-bottom-icon">✦</span>

          <h3>Every project is a chance to improve.</h3>

          <p>
            I enjoy building user-friendly interfaces and making
            applications more reliable through careful testing.
          </p>

          <a href="#contact" className="projects-contact-link">
            Let's connect <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;

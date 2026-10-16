
import "./../styles/Skills.css";

function Skills() {
  const skillGroups = [
    {
      number: "01",
      title: "Frontend development",
      description: "Building responsive and interactive web interfaces.",
      skills: [
        { name: "HTML5", level: "Markup" },
        { name: "CSS3", level: "Styling" },
        { name: "JavaScript", level: "Programming" },
        { name: "React", level: "UI development" },
        { name: "Responsive design", level: "All screens" },
      ],
      icon: "</>",
      theme: "blue",
    },
    {
      number: "02",
      title: "Manual testing",
      description: "Checking application functionality and user experience.",
      skills: [
        { name: "Test case execution", level: "Testing" },
        { name: "Functional testing", level: "Validation" },
        { name: "Regression testing", level: "Retesting" },
        { name: "UI testing", level: "Interface" },
        { name: "Responsive testing", level: "Devices" },
      ],
      icon: "✓",
      theme: "pink",
    },
    {
      number: "03",
      title: "QA & collaboration",
      description: "Identifying defects and communicating issues clearly.",
      skills: [
        { name: "Bug reporting", level: "Documentation" },
        { name: "Jira", level: "Issue tracking" },
        { name: "Bug verification", level: "Validation" },
        { name: "End-to-end testing", level: "Workflows" },
        { name: "Team collaboration", level: "Communication" },
      ],
      icon: "⌘",
      theme: "blue",
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <header className="skills-heading">
          <span className="skills-eyebrow">MY EXPERTISE</span>

          <h2>
            Skills & <span>technologies.</span>
          </h2>

          <p>
            The tools and skills I use to build better interfaces
            and deliver reliable web experiences.
          </p>
        </header>

        <div className="skills-summary">
          <div className="skills-summary-item">
            <span className="summary-symbol">&lt;/&gt;</span>
            <h3>Development</h3>
            <p>Designing and building interfaces</p>
          </div>

          <div className="skills-summary-item">
            <span className="summary-symbol summary-pink">✓</span>
            <h3>Quality assurance</h3>
            <p>Testing and verifying functionality</p>
          </div>

          <div className="skills-summary-item">
            <span className="summary-symbol">&lt;↗&gt;</span>
            <h3>Continuous learning</h3>
            <p>Improving skills through practice</p>
          </div>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article
              className={`skill-card skill-card-${group.theme}`}
              key={group.number}
              style={{ "--skill-index": index }}
            >
              <div className="skill-card-icon">{group.icon}</div>

              <span className="skill-card-number">
                AREA {group.number}
              </span>

              <h3>{group.title}</h3>
              <p className="skill-card-description">
                {group.description}
              </p>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <div className="skill-tag" key={skill.name}>
                    <span className="skill-tag-name">{skill.name}</span>
                    <span className="skill-tag-level">{skill.level}</span>
                  </div>
                ))}
              </div>

              <div className="skill-card-footer">
                <span className="skill-footer-dot"></span>
                <span>Always improving</span>
              </div>
            </article>
          ))}
        </div>

        <div className="skills-note">
          <span className="skills-note-star">✳</span>
          <p>
            Strong foundations, attention to detail, and a mindset
            focused on continuous improvement.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;

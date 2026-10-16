import "./../styles/Experience.css";

function Experience() {
  const responsibilities = [
    "Develop and improve responsive web interfaces using React, JavaScript, HTML, and CSS.",
    "Build mobile-friendly layouts and maintain consistent UI design across screen sizes.",
    "Perform manual testing of web applications, including end-to-end and regression testing.",
    "Write clear bug reports with steps to reproduce, expected results, and actual results.",
    "Verify bug fixes and update issue statuses using Jira.",
  ];

  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Responsive Design",
    "Manual Testing",
    "Regression Testing",
    "Jira",
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <header className="experience-heading">
          <span className="experience-eyebrow">MY JOURNEY</span>

          <h2>
            Work <span>Experience.</span>
          </h2>

          <p>
            My experience combines frontend development with software
            quality assurance to build and test reliable web applications.
          </p>
        </header>

        <div className="experience-grid">
          <div className="experience-card">
            <div className="experience-card-header">
              <div className="experience-company-icon">A</div>
              <div className="experience-company-badge">Frontend + QA</div>
            </div>

            <div className="experience-card-content">
              <span className="experience-type">PROFESSIONAL EXPERIENCE</span>

              <h3>Aforo.ai</h3>

              <p className="experience-role">
                Frontend Development & Manual QA Testing
              </p>

              <p className="experience-description">
                Working on web application interfaces and quality assurance,
                with a focus on responsive design, user experience, bug
                identification, and verification of fixes.
              </p>

              <div className="experience-section-divider"></div>

              <h4 className="experience-subheading">
                What I work on
              </h4>

              <ul className="experience-responsibilities">
                {responsibilities.map((item, index) => (
                  <li key={index}>
                    <span className="experience-check">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="experience-subheading experience-tech-heading">
                Technologies & tools
              </h4>

              <div className="experience-tags">
                {skills.map((skill) => (
                  <span className="experience-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="experience-bottom">
          <span className="experience-bottom-icon">✦</span>
          <p>
            Building better interfaces. Testing every detail.
            Improving with every project.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;

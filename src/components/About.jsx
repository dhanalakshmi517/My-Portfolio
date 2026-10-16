
import "./../styles/About.css";

function About() {
  const highlights = [
    {
      number: "01",
      title: "Frontend development",
      description:
        "Building responsive, user-friendly web interfaces with React, JavaScript, HTML, and CSS.",
      icon: "</>",
    },
    {
      number: "02",
      title: "Manual testing",
      description:
        "Testing application workflows, checking UI behavior, and identifying issues before users encounter them.",
      icon: "✓",
    },
    {
      number: "03",
      title: "Quality & reliability",
      description:
        "Writing clear bug reports, executing test cases, performing regression testing, and verifying fixes.",
      icon: "⌘",
    },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-heading">
          <span className="about-eyebrow">ABOUT ME</span>

          <h2>
            Get to know <span>me.</span>
          </h2>

          <p className="about-subtitle">
            A little about who I am and how I work.
          </p>
        </div>

        <div className="about-content">
          <div className="about-intro">
            <div className="about-label">
              <span className="about-label-dot"></span>
              MY INTRODUCTION
            </div>

            <h3>
              I enjoy building things that
              <span className="about-highlight"> look good</span> and
              <span className="about-highlight-pink"> work right.</span>
            </h3>

            <p>
              Hi, I'm Dhanalakshmi Jinka, a frontend developer and
              manual QA tester at Aforo. I enjoy creating responsive
              web interfaces and making sure they work as expected.
            </p>

            <p>
              Along with development, I test application workflows,
              identify UI issues, document bugs, and verify fixes.
              Working across both areas helps me pay attention to
              usability, functionality, and detail.
            </p>

            <p>
              I'm always learning, improving my technical skills, and
              looking for better ways to build reliable web experiences.
            </p>

            <a href="#contact" className="about-contact-link">
              Let's work together
              <span>↗</span>
            </a>
          </div>

          <div className="about-highlights">
            {highlights.map((item, index) => (
              <article
                className="about-card"
                key={item.number}
                style={{ "--card-index": index }}
              >
                <div className="about-card-top">
                  <div className="about-card-icon">{item.icon}</div>
                  <span className="about-card-number">{item.number}</span>
                </div>

                <h4>{item.title}</h4>
                <p>{item.description}</p>

                <div className="about-card-line"></div>
              </article>
            ))}
          </div>
        </div>

        <div className="about-bottom">
          <span className="about-bottom-mark">✳</span>
          <p>
            <strong>My approach:</strong> Build with purpose. Test with
            care. Improve every day.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

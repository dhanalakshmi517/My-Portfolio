
import "./../styles/Contact.css";

function Contact() {
  const contactMethods = [
    {
      icon: "✉",
      title: "Email",
      description: "Have a project or opportunity?",
      value: "Let's talk",
      href: "mailto:your.email@example.com",
      theme: "blue",
    },
    {
      icon: "in",
      title: "LinkedIn",
      description: "Let's connect professionally.",
      value: "Connect with me",
      href: "https://www.linkedin.com/",
      theme: "pink",
    },
    {
      icon: "</>",
      title: "GitHub",
      description: "Explore my development work.",
      value: "View my code",
      href: "https://github.com/",
      theme: "blue",
    },
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <header className="contact-heading">
          <span className="contact-eyebrow">GET IN TOUCH</span>

          <h2>
            Let's connect<span className="contact-title-dot">.</span>
          </h2>

          <p>
            Have an opportunity, a project idea, or just want to say hello?
            I'd love to hear from you.
          </p>
        </header>

        <div className="contact-status">
          <span className="contact-status-dot"></span>
          OPEN TO CONNECT AND COLLABORATE
        </div>

        <div className="contact-main">
          <div className="contact-orbit contact-orbit-one"></div>
          <div className="contact-orbit contact-orbit-two"></div>

          <span className="contact-decoration contact-decoration-one">✳</span>
          <span className="contact-decoration contact-decoration-two">✦</span>

          <div className="contact-center-icon">&lt;/&gt;</div>

          <h3>
            Have something in <span>mind?</span>
          </h3>

          <p>
            I'm a frontend developer and manual QA tester who enjoys
            building responsive interfaces and making web experiences
            work better. Let's create something meaningful together.
          </p>

          <a
            className="contact-primary-button"
            href="mailto:your.email@example.com"
          >
            Get in touch
            <span>↗</span>
          </a>
        </div>

        <div className="contact-methods">
          {contactMethods.map((method, index) => (
            <a
              key={method.title}
              className={`contact-card contact-card-${method.theme}`}
              href={method.href}
              target={method.title === "Email" ? undefined : "_blank"}
              rel={method.title === "Email" ? undefined : "noreferrer"}
              style={{ "--contact-index": index }}
            >
              <div className="contact-card-icon">{method.icon}</div>

              <h4>{method.title}</h4>

              <p>{method.description}</p>

              <span className="contact-card-link">
                {method.value}
                <span className="contact-card-arrow">↗</span>
              </span>
            </a>
          ))}
        </div>

        <footer className="contact-footer">
          <span className="contact-footer-logo">D.</span>

          <p>Designed and built by Dhanalakshmi Jinka.</p>

          <a href="#home">Back to top ↑</a>
        </footer>
      </div>
    </section>
  );
}

export default Contact;

export default function Hero() {
  return (
    <section id="home" className="hero-section py-5 border-bottom bg-light">
  <div className="container py-5">
    <div className="row align-items-center">

      {/* LEFT CONTENT */}
      <div className="col-lg-6 mb-5 mb-lg-0">

        <span className="badge bg-primary-subtle text-primary fw-semibold mb-3">
          👋 Welcome to my portfolio
        </span>

        <h1 className="display-5 fw-bold mb-3">
          Hello, I’m <span className="text-primary">Saif Uddin</span>
        </h1>

        <h4 className="text-muted mb-4">
          Senior Software Engineer • Full-Stack Developer
        </h4>

        <p className="lead mb-4">
          Senior Software Engineer with <strong>9+ years</strong> of experience
          designing and scaling high-performance systems with a strong focus on
          cloud-native architecture and business-driven solutions.
        </p>

        {/* DOMAIN BADGES */}
        <div className="d-flex flex-wrap gap-2 mb-4">
          {[
            "AdTech",
            "FinTech",
            "E-commerce",
            "Chatbot",
            "Healthcare",
            "Logistics",
            "Virtual Recharge (VR)",
            "SMS & Email Service",
            "Billing Solutions",
            "GPS Tracking"
          ].map((domain) => (
            <span
              key={domain}
              className="badge bg-dark-subtle text-dark px-3 py-2"
            >
              {domain}
            </span>
          ))}
        </div>

        {/* TECH STACK */}
        <div className="mb-4">
          <p className="text-muted fw-semibold mb-2">Current Tech Stack</p>
          <div className="d-flex flex-wrap gap-2">
            {[
              "Laravel",
              "WordPress",
              "FastAPI",
              "Node.js",
              "NestJS",
              "Next.js",
              "MySQL",
              "MongoDB",
              "Redis",
              "Elasticsearch",
              "AWS",
              "OpenAI",
              "Jira",
              "GitHub",
              "Bitbucket",
            ].map((tech) => (
              <span
                key={tech}
                className="badge bg-light border text-secondary px-2 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="d-flex flex-wrap gap-3 mt-4">
          {/* <a href="#projects" className="btn btn-primary btn-lg px-4">
            View Projects
          </a> */}
          <a
            href="/docs/cv/MD-SAIF-UDDIN-Resume-2025.pdf"
            className="btn btn-outline-dark btn-lg px-4"
            download
          >
            Download CV
          </a>
        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="col-lg-6 text-center position-relative">
        <div className="hero-image-wrapper">
        <div className="col-lg-6 text-center"> 
      <img src="/img/profile.png" alt="Saif Uddin - Senior Software Engineer" className="img-fluid hero-image" loading="lazy" /> 
      </div>
        </div>
      </div>

    </div>
  </div>
</section>
  );
}

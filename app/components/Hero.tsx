export default function Hero() {
  return (
    <section id="home" className="hero-section py-5 border-bottom">
  <div className="container py-5">
    <div className="row align-items-center">

      <div className="col-lg-6 mb-5 mt-5 mb-lg-0">

        <h1 className="display-4 fw-bold mb-3">
          Hello, I’m <span className="text-primary">Saif Uddin</span>
        </h1>

        <h4 className="text-muted mb-4">
          Senior Software Engineer & Full-Stack Developer
        </h4>

        <p className="lead mb-4">
          I’m a Senior Software Engineer with 9+ years of experience designing and
          scaling high-performance systems across <b>AdTech, FinTech, E-commerce,
          Chatbot, Health Care Solution and Logistics</b> domains. I specialize in full-stack development,
          cloud-native architecture, and building solutions that deliver real
          business impact.
        </p>

        <p className="text-muted tech-stack mb-4">
          Python • Java • PHP (Laravel) • React • Next.js • MySQL • MongoDB • Redis •
          Elasticsearch • AWS • Google Cloud
        </p>

        <div className="d-flex flex-wrap gap-3">
          <a href="#projects" className="btn btn-outline-dark btn-lg px-4">
            View My Work
          </a>
          <a
            href="/Saif-CV.pdf"
            className="btn btn-outline-dark btn-lg px-4"
            download
          >
            Download CV
          </a>
        </div>

      </div>
      <div className="col-lg-6 text-center">
        <img
          src="/img/profile.png"
          alt="Saif Uddin - Senior Software Engineer"
          className="img-fluid hero-image"
          loading="lazy"
        />
      </div>

    </div>
  </div>
</section>
  );
}

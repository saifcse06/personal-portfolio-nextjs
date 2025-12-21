export default function Contact() {
  return (
    <section id="contact" className="py-5 contact-gradient">
      <div className="container text-dark">

        {/* Stats */}
        <div className="row text-center mb-5">
          <div className="col-md-3 col-6 mb-4">
            <i className="bi bi-lightning-charge-fill fs-2 text-primary"></i>
            <h3 className="fw-bold mt-2">9+</h3>
            <p className="text-muted">Years of Experience</p>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <i className="bi bi-kanban-fill fs-2 text-primary"></i>
            <h3 className="fw-bold mt-2">20+</h3>
            <p className="text-muted">Successful Projects</p>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <i className="bi bi-star-fill fs-2 text-primary"></i>
            <h3 className="fw-bold mt-2">99%</h3>
            <p className="text-muted">Client Satisfaction</p>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <i className="bi bi-book-fill fs-2 text-primary"></i>
            <h3 className="fw-bold mt-2">Continuous</h3>
            <p className="text-muted">Learning</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Get In Touch</h2>
          <p className="text-muted mt-3">
          I'm always willing to have meaningful conversations about impactful work, creative partnerships, and unique ideas.
          </p>
          <a
            href="mailto:contact@saif-uddin.com"
            className="btn btn-primary btn-lg mt-3 px-4"
          >
            Let’s Connect
          </a>
        </div>

        {/* Contact Info */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="row g-4">

              <div className="col-md-6">
                <div className="contact-box">
                  <i className="bi bi-envelope-fill"></i>
                  <div>
                    <h6>Email</h6>
                    <a href="mailto:contact@saif-uddin.com">
                      contact@saif-uddin.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="contact-box">
                  <i className="bi bi-telephone-fill"></i>
                  <div>
                    <h6>Phone</h6>
                    <span>+880 1827 230806</span>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="contact-box">
                  <i className="bi bi-whatsapp contact-icon whatsapp"></i>
                  <div>
                    <h6>WhatsApp</h6>
                    <a
                      href="https://wa.me/8801827230806"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="stretched-link"
                    >
                      Message Me
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="contact-box">
                  <i className="bi bi-geo-alt-fill"></i>
                  <div>
                    <h6>Location</h6>
                    <span>Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="contact-box">
                  <i className="bi bi-linkedin"></i>
                  <div>
                    <h6>LinkedIn</h6>
                    <a
                      href="https://www.linkedin.com/in/saifuddin1992/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/saifuddin1992
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Engagement Areas */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8 text-center">
            <h5 className="fw-semibold mb-4">
              Open to Discussions About
            </h5>

            <ul className="list-unstyled d-grid gap-3">
              <li className="d-flex align-items-center justify-content-center gap-2 text-muted">
                <i className="bi bi-code-slash"></i>
                Full-stack software engineering roles and collaborations
              </li>

              <li className="d-flex align-items-center justify-content-center gap-2 text-muted">
                <i className="bi bi-diagram-3"></i>
                Technical consulting and system architecture reviews
              </li>

              <li className="d-flex align-items-center justify-content-center gap-2 text-muted">
                <i className="bi bi-people"></i>
                Team leadership, mentoring, and engineering growth
              </li>

              <li className="d-flex align-items-center justify-content-center gap-2 text-muted">
                <i className="bi bi-laptop"></i>
                Remote or hybrid work opportunities
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>

  );
}

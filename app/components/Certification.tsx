export default function Training() {
  return (
    <section id="certification" className="py-5 border-top bg-light">
      <div className="container">
        <h2 className="section-title text-center mb-5">
          <i className="bi bi-award-fill me-2 text-primary"></i>
          Training & Certifications
        </h2>

        <div className="row g-4 justify-content-center">

          {/* Training Item */}
          <div className="col-md-6 col-lg-4">
            <div className="card training-card h-100 shadow-sm border-0">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-patch-check-fill text-primary fs-3 me-3"></i>
                  <h5 className="card-title mb-0">Training on JEE Programming</h5>
                </div>
                <p className="card-text text-muted">
                  Completed hands-on training for designing and deploying scalable cloud architectures using AWS services.
                </p>
                <small className="text-muted">Issued: March 2024</small>
              </div>
            </div>
          </div>

          {/* Training Item */}
          <div className="col-md-6 col-lg-4">
            <div className="card training-card h-100 shadow-sm border-0">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-patch-check-fill text-primary fs-3 me-3"></i>
                  <h5 className="card-title mb-0">Application Development in ASP.Ne</h5>
                </div>
                <p className="card-text text-muted">
                  Deep dive into React and Next.js for building modern, high-performance front-end applications.
                </p>
                <small className="text-muted">Issued: January 2025</small>
              </div>
            </div>
          </div>

          {/* Training Item */}
          <div className="col-md-6 col-lg-4">
            <div className="card training-card h-100 shadow-sm border-0">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-patch-check-fill text-primary fs-3 me-3"></i>
                  <h5 className="card-title mb-0">OOP (MVC) PHP with CodeIgniter Framework</h5>
                </div>
                <p className="card-text text-muted">
                  Hands-on training in Python, machine learning, NLP, and building AI-powered solutions.
                </p>
                <small className="text-muted">Issued: April 2025</small>
              </div>
            </div>
          </div>

          {/* Training Item */}
          <div className="col-md-6 col-lg-4">
            <div className="card training-card h-100 shadow-sm border-0">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-patch-check-fill text-primary fs-3 me-3"></i>
                  <h5 className="card-title mb-0">Android Application Development</h5>
                </div>
                <p className="card-text text-muted">
                  Hands-on training in Python, machine learning, NLP, and building AI-powered solutions.
                </p>
                <small className="text-muted">Issued: April 2025</small>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

  );
}
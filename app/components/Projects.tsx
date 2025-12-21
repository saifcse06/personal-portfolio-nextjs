export default function Projects() {
    return (
      <section id="projects" className="py-5 border-bottom">
  <div className="container py-5">

    {/* Header */}
    <div className="text-center mb-5">
      <h2 className="fw-bold">Projects</h2>
      <p className="text-muted">
        Selected projects showcasing system design, scalability, and business impact
      </p>
    </div>

    <div className="row g-4">

      {/* Project 1 */}
      <div className="col-md-6 col-lg-4">
        <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
          <div className="card-body p-4">
            <h5 className="fw-semibold">Personal Portfolio Platform</h5>
            <p className="text-muted small mb-3">
              Designed and developed a modern, SEO-optimized portfolio to showcase
              professional experience, projects, and technical expertise.
            </p>

            <div className="d-flex flex-wrap gap-2 mb-3">
              <span className="badge bg-light text-dark border">Next.js</span>
              <span className="badge bg-light text-dark border">Bootstrap</span>
              <span className="badge bg-light text-dark border">Framer Motion</span>
            </div>

            <div className="d-flex gap-2">
              <a href="#" className="btn btn-sm btn-primary">Live</a>
              <a href="#" className="btn btn-sm btn-outline-dark">Details</a>
            </div>
          </div>

        </div>
      </div>

      {/* Project 2 */}
      <div className="col-md-6 col-lg-4">
        <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
          <div className="card-body p-4">
            <h5 className="fw-semibold">E-Commerce Platform</h5>
            <p className="text-muted small mb-3">
              Built a scalable e-commerce system with secure payments, inventory
              management, and performance optimization.
            </p>

            <div className="d-flex flex-wrap gap-2 mb-3">
              <span className="badge bg-light text-dark border">Laravel</span>
              <span className="badge bg-light text-dark border">MySQL</span>
              <span className="badge bg-light text-dark border">Redis</span>
              <span className="badge bg-light text-dark border">AWS</span>
            </div>

            <div className="d-flex gap-2">
              <a href="#" className="btn btn-sm btn-primary">Live</a>
              <a href="#" className="btn btn-sm btn-outline-dark">Case Study</a>
            </div>
          </div>

        </div>
      </div>

      {/* Project 3 */}
      <div className="col-md-6 col-lg-4">
        <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
          <div className="card-body p-4">
            <h5 className="fw-semibold">Real-Time Chat Application</h5>
            <p className="text-muted small mb-3">
              Developed a real-time messaging platform with authentication,
              scalable socket connections, and low-latency communication.
            </p>

            <div className="d-flex flex-wrap gap-2 mb-3">
              <span className="badge bg-light text-dark border">Node.js</span>
              <span className="badge bg-light text-dark border">Socket.io</span>
              <span className="badge bg-light text-dark border">MongoDB</span>
            </div>

            <div className="d-flex gap-2">
              <a href="#" className="btn btn-sm btn-primary">Demo</a>
              <a href="#" className="btn btn-sm btn-outline-dark">GitHub</a>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
    );
  }
  
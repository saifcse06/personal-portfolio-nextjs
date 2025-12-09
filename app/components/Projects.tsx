export default function Projects() {
    return (
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
  
          <div className="project-grid">
  
            <div className="project-card">
              <img src="/img/project1.jpg" alt="Project 1" />
              <div className="project-info">
                <h3>Portfolio Website</h3>
                <p>Modern and responsive personal portfolio website.</p>
                <a href="#" className="btn-small">View More</a>
              </div>
            </div>
  
            <div className="project-card">
              <img src="/img/project2.jpg" alt="Project 2" />
              <div className="project-info">
                <h3>E-Commerce App</h3>
                <p>Full-stack shopping platform with payment system.</p>
                <a href="#" className="btn-small">View More</a>
              </div>
            </div>
  
            <div className="project-card">
              <img src="/img/project3.jpg" alt="Project 3" />
              <div className="project-info">
                <h3>Chat App</h3>
                <p>Real-time messaging app using Socket.io.</p>
                <a href="#" className="btn-small">View More</a>
              </div>
            </div>
  
          </div>
        </div>
      </section>
    );
  }
  
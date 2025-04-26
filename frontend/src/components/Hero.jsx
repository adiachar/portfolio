import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="mb-4">
              <h1 className="display-4 fw-bold mb-3">
                Hi, I'm <span className="text-primary">Adithya G</span>
              </h1>
              <h2 className="h3 text-muted mb-4">
                B.E. Undergraduate | Computer Science and Engineering
              </h2>
              <p className="lead mb-4">
                A passionate software developer with expertise in building modern web applications and solving complex problems through code.
              </p>
            </div>
            
            <div className="d-flex flex-wrap gap-3 mb-4">
              <a 
                href="https://github.com/adiachar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-primary"
              >
                <FaGithub className="me-2" />
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/adithyag257" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-primary"
              >
                <FaLinkedin className="me-2" />
                LinkedIn
              </a>
              <a 
                href="mailto:adithyaacharya710@gmail.com" 
                className="btn btn-outline-primary"
              >
                <FaEnvelope className="me-2" />
                Email
              </a>
              <a 
                href="tel:+917892589461" 
                className="btn btn-outline-primary"
              >
                <FaPhone className="me-2" />
                Call
              </a>
            </div>

            <div className="d-flex gap-4">
              <div className="text-center">
                <h3 className="fw-bold mb-1">5+</h3>
                <p className="text-muted mb-0">Projects</p>
              </div>
              <div className="text-center">
                <h3 className="fw-bold mb-1">2+</h3>
                <p className="text-muted mb-0">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="fw-bold mb-1">10+</h3>
                <p className="text-muted mb-0">Technologies</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h4 className="mb-4">Technical Skills</h4>
                <div className="row g-3">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div className="icon-circle bg-primary text-white me-3">
                        <i className="bi bi-code-slash"></i>
                      </div>
                      <div>
                        <h6 className="mb-1">Frontend</h6>
                        <p className="mb-0 small text-muted">React, HTML, CSS, JavaScript</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div className="icon-circle bg-primary text-white me-3">
                        <i className="bi bi-server"></i>
                      </div>
                      <div>
                        <h6 className="mb-1">Backend</h6>
                        <p className="mb-0 small text-muted">Node.js, Express, MongoDB</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div className="icon-circle bg-primary text-white me-3">
                        <i className="bi bi-tools"></i>
                      </div>
                      <div>
                        <h6 className="mb-1">Tools</h6>
                        <p className="mb-0 small text-muted">Git, VS Code, Postman</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div className="icon-circle bg-primary text-white me-3">
                        <i className="bi bi-cloud"></i>
                      </div>
                      <div>
                        <h6 className="mb-1">Deployment</h6>
                        <p className="mb-0 small text-muted">Render, Vercel, GitHub Pages</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
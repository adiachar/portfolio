import { FaGithub, FaCode, FaServer, FaDatabase, FaGamepad, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Projects</h2>
          <p className="lead text-muted">
            A showcase of my technical projects and contributions
          </p>
        </div>

        <div className="row g-4">
          {/* Airbnb Replica */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h4 className="mb-0">Airbnb Replica</h4>
                  <div className="d-flex gap-2">
                    <a 
                      href="https://github.com/adiachar/Airbnb" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      <FaGithub className="me-2" />
                      GitHub
                    </a>
                    <a 
                      href="https://airbnb-pec4.onrender.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-primary"
                    >
                      <FaExternalLinkAlt className="me-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
                <p className="text-muted mb-3">
                  A full-stack web application replicating Airbnb's core functionality with secure authentication and efficient data management.
                </p>
                <div className="mb-3">
                  <h6 className="mb-2">Key Features:</h6>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-secondary me-2"></i>
                      RESTful API implementation
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-secondary me-2"></i>
                      Secure authentication with Passport.js
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-secondary me-2"></i>
                      MongoDB data management
                    </li>
                  </ul>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-primary">Node.js</span>
                  <span className="badge bg-primary">Express.js</span>
                  <span className="badge bg-primary">MongoDB</span>
                  <span className="badge bg-primary">Passport.js</span>
                </div>
              </div>
            </div>
          </div>

          {/* Guest Accommodation Management System */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h4 className="mb-0">Guestify</h4>
                  <div className="d-flex gap-2">
                    <a 
                      href="https://github.com/adiachar/Guestify" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      <FaGithub className="me-2" />
                      GitHub
                    </a>
                    <a 
                      href="https://guestify-1.onrender.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-primary"
                    >
                      <FaExternalLinkAlt className="me-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
                <p className="text-muted mb-3">
                  A web-based system designed to modernize and streamline guest accommodation processes in educational institutions.
                </p>
                <div className="mb-3">
                  <h6 className="mb-2">Key Features:</h6>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-secondary me-2"></i>
                      Digital transformation of offline processes
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-secondary me-2"></i>
                      Efficient MongoDB-based data management
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-secondary me-2"></i>
                      Streamlined user experience
                    </li>
                  </ul>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-success">MongoDB</span>
                  <span className="badge bg-success">Web Development</span>
                  <span className="badge bg-success">Database Management</span>
                </div>
              </div>
            </div>
          </div>

          {/* Game Space */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h4 className="mb-0">Game Space with Interactive Games</h4>
                  <div className="d-flex gap-2">
                    <a 
                      href="https://github.com/adiachar/GameSpace" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      <FaGithub className="me-2" />
                      GitHub
                    </a>
                    <a 
                      href="https://gamespace-3fwi.onrender.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-primary"
                    >
                      <FaExternalLinkAlt className="me-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
                <p className="text-muted mb-3">
                  A collection of interactive games demonstrating problem-solving skills and engaging user interfaces.
                </p>
                <div className="mb-3">
                  <h6 className="mb-2">Key Features:</h6>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-secondary me-2"></i>
                      Multiple interactive games
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-secondary me-2"></i>
                      Engaging gameplay mechanics
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-secondary me-2"></i>
                      Intuitive user interfaces
                    </li>
                  </ul>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-warning text-dark">JavaScript</span>
                  <span className="badge bg-warning text-dark">Game Development</span>
                  <span className="badge bg-warning text-dark">UI/UX</span>
                </div>
              </div>
            </div>
          </div>

          {/* Realtime Chatting Application */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h4 className="mb-0">Realtime Chatting Application</h4>
                  <div className="d-flex gap-2">
                    <a 
                      href="https://github.com/adiachar/No-Chat" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      <FaGithub className="me-2" />
                      GitHub
                    </a>
                    <a 
                      href="https://nochat-iqi1.onrender.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-primary"
                    >
                      <FaExternalLinkAlt className="me-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
                <p className="text-muted mb-3">
                  A modern real-time chat application with instant messaging capabilities and dynamic user interactions.
                </p>
                <div className="mb-3">
                  <h6 className="mb-2">Key Features:</h6>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-secondary me-2"></i>
                      Real-time bidirectional communication
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-secondary me-2"></i>
                      WebSocket implementation
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-secondary me-2"></i>
                      Dynamic user interface
                    </li>
                  </ul>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-info">React.js</span>
                  <span className="badge bg-info">WebSocket</span>
                  <span className="badge bg-info">Real-time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 
import { FaCode, FaServer, FaDatabase, FaGitAlt, FaLaptopCode } from 'react-icons/fa';

const Skills = () => {
  return (
    <section id="skills" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Technical Skills</h2>
          <p className="lead text-muted">
            A comprehensive overview of my technical expertise and knowledge
          </p>
        </div>

        <div className="row g-4">
          {/* Programming Languages */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="icon-circle bg-light text-secondary me-3">
                    <FaCode size={20} />
                  </div>
                  <h4 className="mb-0">Programming Languages</h4>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-primary p-2">C</span>
                  <span className="badge bg-primary p-2">Java</span>
                  <span className="badge bg-primary p-2">Python</span>
                  <span className="badge bg-primary p-2">JavaScript</span>
                </div>
              </div>
            </div>
          </div>

          {/* Web Technologies */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="icon-circle bg-light text-secondary me-3">
                    <FaLaptopCode size={20} />
                  </div>
                  <h4 className="mb-0">Web Technologies</h4>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-success p-2">HTML5</span>
                  <span className="badge bg-success p-2">CSS3</span>
                  <span className="badge bg-success p-2">Tailwind CSS</span>
                  <span className="badge bg-success p-2">Bootstrap</span>
                </div>
              </div>
            </div>
          </div>

          {/* Frontend & Backend */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="icon-circle bg-light text-secondary me-3">
                    <FaServer size={20} />
                  </div>
                  <h4 className="mb-0">Frameworks & Backend</h4>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-info p-2">React.js</span>
                  <span className="badge bg-info p-2">Node.js</span>
                  <span className="badge bg-info p-2">Express.js</span>
                </div>
              </div>
            </div>
          </div>

          {/* Databases */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="icon-circle bg-light text-secondary me-3">
                    <FaDatabase size={20} />
                  </div>
                  <h4 className="mb-0">Databases</h4>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-warning text-dark p-2">MongoDB</span>
                  <span className="badge bg-warning text-dark p-2">MySQL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Version Control */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="icon-circle bg-light text-secondary me-3">
                    <FaGitAlt size={20} />
                  </div>
                  <h4 className="mb-0">Version Control</h4>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-secondary p-2">Git</span>
                  <span className="badge bg-secondary p-2">GitHub</span>
                </div>
              </div>
            </div>
          </div>

          {/* Coursework */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="icon-circle bg-light text-secondary me-3">
                    <FaCode size={20} />
                  </div>
                  <h4 className="mb-0">Relevant Coursework</h4>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-dark p-2">Data Structures & Algorithms</span>
                  <span className="badge bg-dark p-2">OOPs</span>
                  <span className="badge bg-dark p-2">DBMS</span>
                  <span className="badge bg-dark p-2">Operating Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 
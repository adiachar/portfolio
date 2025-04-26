import { FaGraduationCap, FaCode, FaLightbulb } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">About Me</h2>
          <p className="lead text-muted">
            Get to know more about my journey, passion, and what drives me in the world of technology
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="icon-circle bg-light me-3">
                    <FaGraduationCap className="text-primary" size={24} />
                  </div>
                  <h4 className="mb-0">Education & Background</h4>
                </div>
                <p className="text-muted">
                  I am currently pursuing my Bachelor's degree in Computer Science and Engineering. 
                  My academic journey has been focused on building a strong foundation in software 
                  development and problem-solving.
                </p>
                <p className="text-muted">
                  As a Teaching Assistant at Apna College, I've had the opportunity to help others 
                  learn and grow in their programming journey, which has further strengthened my 
                  understanding of various technologies.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="icon-circle bg-light me-3">
                    <FaCode className="text-primary" size={24} />
                  </div>
                  <h4 className="mb-0">Development Journey</h4>
                </div>
                <p className="text-muted">
                  My journey in software development began with a curiosity about how things work 
                  behind the scenes. Over time, I've developed a passion for creating efficient, 
                  user-friendly applications that solve real-world problems.
                </p>
                <p className="text-muted">
                  I specialize in full-stack development, with expertise in both frontend and 
                  backend technologies. My projects reflect my commitment to writing clean, 
                  maintainable code and creating intuitive user experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="icon-circle bg-light me-3">
                    <FaLightbulb className="text-primary" size={24} />
                  </div>
                  <h4 className="mb-0">My Approach</h4>
                </div>
                <div className="row g-4">
                  <div className="col-md-4">
                    <div className="text-center">
                      <h5 className="text-primary mb-3">Problem Solving</h5>
                      <p className="text-muted">
                        I believe in breaking down complex problems into manageable parts and 
                        finding elegant solutions through systematic thinking.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="text-center">
                      <h5 className="text-primary mb-3">Continuous Learning</h5>
                      <p className="text-muted">
                        Technology evolves rapidly, and I'm committed to staying updated with 
                        the latest trends and best practices in software development.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="text-center">
                      <h5 className="text-primary mb-3">Collaboration</h5>
                      <p className="text-muted">
                        I value teamwork and believe that the best solutions come from 
                        collaborative efforts and diverse perspectives.
                      </p>
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

export default About; 
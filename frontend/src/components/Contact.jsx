import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Get In Touch</h2>
          <p className="lead text-muted">
            Let's connect and discuss opportunities
          </p>
        </div>

        <div className="row g-4">
          {/* Contact Information */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body p-4">
                <h4 className="mb-4">Contact Information</h4>
                <div className="d-flex flex-column gap-4">
                  <div className="d-flex align-items-center">
                    <div className="icon-circle bg-primary text-white me-3">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h6 className="mb-1">Email</h6>
                      <a href="mailto:adithyaacharya710@gmail.com" className="text-decoration-none">
                        adithyaacharya710@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="icon-circle bg-primary text-white me-3">
                      <FaPhone />
                    </div>
                    <div>
                      <h6 className="mb-1">Phone</h6>
                      <a href="tel:+917892589461" className="text-decoration-none">
                        +91 7892589461
                      </a>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="icon-circle bg-primary text-white me-3">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h6 className="mb-1">Location</h6>
                      <p className="mb-0">Mangalore, Karnataka, India</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="icon-circle bg-primary text-white me-3">
                      <FaGithub />
                    </div>
                    <div>
                      <h6 className="mb-1">GitHub</h6>
                      <a 
                        href="https://github.com/adiachar" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-decoration-none"
                      >
                        github.com/adiachar
                      </a>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="icon-circle bg-primary text-white me-3">
                      <FaLinkedin />
                    </div>
                    <div>
                      <h6 className="mb-1">LinkedIn</h6>
                      <a 
                        href="https://www.linkedin.com/in/adithyag257" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-decoration-none"
                      >
                        linkedin.com/in/adithyag257
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body p-4">
                <h4 className="mb-4">Send Me a Message</h4>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="name" 
                      placeholder="Your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      placeholder="Your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="subject" 
                      placeholder="Subject"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea 
                      className="form-control" 
                      id="message" 
                      rows="4" 
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    <FaPaperPlane className="me-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
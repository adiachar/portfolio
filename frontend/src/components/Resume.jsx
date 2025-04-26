import { FaDownload, FaFilePdf, FaSpinner } from 'react-icons/fa';
import { useState } from 'react';
import resume from '../assets/AdithyaG_Resume.pdf';

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setError('Failed to load resume. Please try downloading it instead.');
  };

  return (
    <section id="resume" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Resume</h2>
          <p className="lead text-muted">
            View or download my resume to learn more about my qualifications and experience
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="d-flex align-items-center">
                    <div className="icon-circle bg-primary text-white me-3">
                      <FaFilePdf size={24} />
                    </div>
                    <div>
                      <h4 className="mb-1">Adithya G - Resume</h4>
                      <p className="text-muted mb-0">Last updated: March 2024</p>
                    </div>
                  </div>
                  <a 
                    href={resume} 
                    className="btn btn-primary"
                    download="Adithya_G_Resume.pdf"
                  >
                    <FaDownload className="me-2" />
                    Download PDF
                  </a>
                </div>

                <div className="resume-preview position-relative">
                  {isLoading && (
                    <div className="position-absolute top-50 start-50 translate-middle">
                      <div className="d-flex flex-column align-items-center">
                        <FaSpinner className="spinner-icon text-primary mb-2" size={32} />
                        <p className="text-muted">Loading resume...</p>
                      </div>
                    </div>
                  )}
                  
                  {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}

                  <iframe 
                    src={`${resume}#toolbar=0&navpanes=0&scrollbar=0`} 
                    className="w-100" 
                    style={{ 
                      height: '800px', 
                      border: 'none',
                      opacity: isLoading ? 0 : 1,
                      transition: 'opacity 0.3s ease-in-out'
                    }}
                    title="Resume Preview"
                    onLoad={handleIframeLoad}
                    onError={handleIframeError}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 
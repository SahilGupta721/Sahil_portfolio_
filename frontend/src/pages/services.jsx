import React from "react";
import "../css/services.css";

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="text-center">
          <p className="services-badge">Our Values</p>
          <h2 className="services-title">The Principles That Guide Us</h2>
          <p className="services-description">
            We are committed to building a platform that is ethical, transparent,
            and respectful of the cultures we feature.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <dt className="service-heading">
              <div className="icon-circle terracotta">
                <svg
                  className="icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 
                    9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 
                    4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-
                    4.5-9S9.515 3 12 3"
                  />
                </svg>
              </div>
              Authenticity
            </dt>
            <dd className="service-text">
              We guarantee that every destination on our platform is genuinely curated from local cultures, offering a true piece of their heritage.
            </dd>
          </div>

          <div className="service-card">
            <dt className="service-heading">
              <div className="icon-circle ocean">
                <svg
                  className="icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 
                    1.268-.63 2.39-1.593 3.068a3.745 
                    3.745 0 01-1.043 3.296"
                  />
                </svg>
              </div>
              Responsible Travel
            </dt>
            <dd className="service-text">
              We promote sustainable tourism that respects local communities and preserves cultural integrity.
            </dd>
          </div>

          <div className="service-card">
            <dt className="service-heading">
              <div className="icon-circle gold">
                <svg
                  className="icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 
                    3.75c-1.052 0-2.062.18-3 
                    .512v14.25"
                  />
                </svg>
              </div>
              Cultural Preservation
            </dt>
            <dd className="service-text">
              Supporting authentic travel experiences to help preserve heritage for future generations.
            </dd>
          </div>

          <div className="service-card">
            <dt className="service-heading">
              <div className="icon-circle olive">
                <svg
                  className="icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 
                    003.741-.479 3 3 0 
                    00-4.682-2.72"
                  />
                </svg>
              </div>
              Community
            </dt>
            <dd className="service-text">
              We’re building a global community of conscious travelers united by culture and exploration.
            </dd>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

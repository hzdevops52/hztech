
import React, { useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Code2,
  Cloud,
  Activity,
  ArrowDown,
} from "lucide-react";

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    section.classList.add("is-observing");

    if (!("IntersectionObserver" in window)) {
      section.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="about-section"
      id="about"
      ref={sectionRef}
    >
      <div className="section-shell about-layout about-simple">
        <div className="about-main">
          <span className="section-kicker">
            <span /> ABOUT HZTECHCLOUD
          </span>

          <h2>
            Simple Technology.{" "}
            <span className="text-gradient">
              Real Business Value.
            </span>
          </h2>

          <p className="about-description">
            We help businesses build responsive websites and practical
            web applications, while supporting the cloud hosting,
            deployment, and DevOps workflows behind them. Our focus
            is on reliable, maintainable solutions that make
            technology easier to use and manage.
          </p>

          <a className="button-primary" href="#request">
            Tell Us What You Need <ArrowUpRight size={17} />
          </a>
        </div>

        <div
          className="about-visual"
          aria-label="Our approach: build, deploy, monitor and improve"
        >
          <div className="about-visual-heading">
            <div>
              <span className="about-visual-eyebrow">
                OUR APPROACH
              </span>
              <h3>From build to operations</h3>
            </div>
            <span className="about-status">
              <span /> PRACTICAL BY DESIGN
            </span>
          </div>

          <div className="about-workflow">
            <div className="about-workflow-step">
              <span className="about-step-number">01</span>
              <span className="about-step-icon">
                <Code2 size={20} />
              </span>
              <div className="about-step-copy">
                <h4>Build</h4>
                <p>Websites &amp; applications</p>
              </div>
            </div>

            <div className="about-workflow-connector">
              <ArrowDown size={17} />
            </div>

            <div className="about-workflow-step">
              <span className="about-step-number">02</span>
              <span className="about-step-icon">
                <Cloud size={20} />
              </span>
              <div className="about-step-copy">
                <h4>Deploy</h4>
                <p>Cloud &amp; CI/CD workflows</p>
              </div>
            </div>

            <div className="about-workflow-connector">
              <ArrowDown size={17} />
            </div>

            <div className="about-workflow-step">
              <span className="about-step-number">03</span>
              <span className="about-step-icon">
                <Activity size={20} />
              </span>
              <div className="about-step-copy">
                <h4>Monitor &amp; improve</h4>
                <p>Visibility &amp; reliable operations</p>
              </div>
            </div>
          </div>

          <div className="about-visual-footer">
            <span className="about-footer-indicator" />
            Practical solutions. Reliable workflows.
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

import "../css/Bottom.css";

function Bottom() {
  const protocol = "https";
  return (
    <div className="footer">
      <div className="footer__grid">
        <section className="footer__grid__card">
          <p id="main">Mathew Joseph</p>
          <p id="links">
            6510 High Meadow Ct, <br /> Long Grove, IL-60047, USA <br />
            ph: +1 3158029788
          </p>
        </section>
        <section className="footer__grid__card">
          <div>
            <div>
              <p id="main">Links</p>
              <p
                id="links"
                onClick={() =>
                  window.location.assign(
                    protocol +
                      "://" +
                      window.location.hostname +
                      ":" +
                      window.location.port +
                      "/project-portfolio/"
                  )
                }
              >
                Home
              </p>
              <p
                id="links"
                onClick={() =>
                  window.location.assign(protocol + "://scuoler.com/aboutus")
                }
              >
                About Us
              </p>
              <p
                id="links"
                onClick={() =>
                  window.location.assign(protocol + "://scuoler.com/contactUs")
                }
              >
                Contact Us
              </p>
            </div>
          </div>
        </section>
        <section className="footer__grid__card">
          <header id="main">Follow us:</header>
          <main id="iconPanel">
            <nav id="iconCircle">
              <a
                href={"https://www.facebook.com/scuoler/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon id="iconIcon" />
              </a>
            </nav>
            <nav id="iconCircle">
              <a
                href={"https://www.instagram.com/scuoler.elearning/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon id="iconIcon" />
              </a>
            </nav>
            <nav id="iconCircle">
              <a
                href={"https://www.linkedin.com/company/scuoler"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon id="iconIcon" />
              </a>
            </nav>
            <nav id="iconCircle">
              <a
                href={"https://www.twitter.com/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon id="iconIcon" />
              </a>
            </nav>
          </main>
        </section>
        <section className="footer__grid__card">
          <header id="main">Support us:</header>
          <button
            id="button"
            onClick={() =>
              window.location.assign(protocol + "://scuoler.com/donate")
            }
          >
            Donate
          </button>
        </section>
      </div>
    </div>
  );
}

export default Bottom;

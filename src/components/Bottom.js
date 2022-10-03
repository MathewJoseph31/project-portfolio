import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

import "../css/Bottom.css";

function Bottom() {
  return (
    <div className="footer">
      <div className="footer__grid">
        <div className="footer__grid__card">
          <p id="main">mathewjoseph.com</p>
          <p id="links">
            605 W Genesse St, <br /> Syracuse, NY-13204, USA <br />
            ph: +1 3158029788
          </p>
        </div>
        <div className="footer__grid__card">
          <div>
            <div>
              <p id="main">Links</p>
              <p
                id="links"
                onClick={() =>
                  window.location.assign(
                    "https" +
                      "://" +
                      window.location.hostname +
                      ":" +
                      window.location.port +
                      "/"
                  )
                }
              >
                Home
              </p>
              <p
                id="links"
                onClick={() =>
                  window.location.assign(
                    "https" +
                      "://" +
                      window.location.hostname +
                      ":" +
                      window.location.port +
                      "/aboutus"
                  )
                }
              >
                About Us
              </p>
              <p
                id="links"
                onClick={() =>
                  window.location.assign(
                    "https" +
                      "://" +
                      window.location.hostname +
                      ":" +
                      window.location.port +
                      "/contactUs"
                  )
                }
              >
                Contact Us
              </p>
            </div>
          </div>
        </div>
        <div className="footer__grid__card">
          <p id="main">Follow us:</p>
          <div id="iconPanel">
            <p id="iconCircle">
              <a
                href={"https://www.facebook.com/scuoler/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon id="iconIcon" />
              </a>
            </p>
            <p id="iconCircle">
              <a
                href={"https://www.instagram.com/scuoler.elearning/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon id="iconIcon" />
              </a>
            </p>
            <p id="iconCircle">
              <a
                href={"https://www.linkedin.com/company/scuoler"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon id="iconIcon" />
              </a>
            </p>
            <p id="iconCircle">
              <a
                href={"https://www.twitter.com/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon id="iconIcon" />
              </a>
            </p>
          </div>
        </div>
        <div className="footer__grid__card">
          <p id="main">Support us:</p>
          <button id="button">Donate</button>
        </div>
      </div>
    </div>
  );
}

export default Bottom;


import { Container } from "react-bootstrap";
import ScrollDownBtn from "../ScrollUpBtn/scrollUpBtn";
import Logo from "../lyncc-logo/LynccLogo"
import "./footer.css"

export default function Footer() {
  return (
    <div className="footer-outer-layer">
      <div className="scroll-up-pos">
        <ScrollDownBtn />
      </div>
      <div className="footer-main-outer">

        <div className="footer-overlay">
          <Container>
            <div className="footer-main-centent">
              <div className="wrapper-logo-social">
                <div className="logo-section-footer">
                  <div className="logo-in-footer">
                  <Logo />
                  </div>
                 
                  <div className="social-icons">
                    <div className="social-icon">
                      <img src="./linkedin.png" alt="linkedin" />
                    </div>
                    <div className="social-icon">
                      <img src="./insta.png" alt="linkedin" />
                    </div>
                    <div className="social-icon">
                      <img src="./twitter.png" alt="linkedin" />
                    </div>
                    <div className="social-icon">
                      <img src="./tiktok.png" alt="linkedin" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-price-section">
                <p className="footer-start-first-style">Solutions</p>
               
                <p className="footer-bottom-words-style">Order Management</p>
                <p className="footer-bottom-words-style">Menu Engineering</p>
                <p className="footer-bottom-words-style">Analytics Dashboard</p>
                
              </div>
              <div className="footer-price-section">
                <p className="footer-start-first-style">Resources</p>
                <p className="footer-bottom-words-style">Who We Are</p>
                <p className="footer-bottom-words-style">Product Demo</p>
                <p className="footer-bottom-words-style">Success Stories</p>
                <p className="footer-bottom-words-style">Blogs</p>
              </div>
              <div className="footer-price-section">
                <p className="footer-start-first-style">Integrations</p>
                <p className="footer-bottom-words-style">Delivery Apps</p>
                <p className="footer-bottom-words-style">Point of Sales </p>
                <p className="footer-bottom-words-style">Online Ordering</p>
                <p className="footer-bottom-words-style">Third Party Logistic</p>
              </div>
              <div className="footer-price-section">
                <p className="footer-start-first-style">Pricing</p>
                <div className="sub-footer-price-section">
                  <p style={{marginBottom:"10px"}} className="footer-start-first-style">Contact Page</p>
                  <p className="footer-bottom-words-style">FAQ</p>
                  <p className="footer-bottom-words-style">Careers</p>
                </div>
              </div>
            </div>
            <hr className="hr-line" />
            <div className="footer-copy-rights">
              <div className="copy-rights-text">
                <p>Copyright © 2024 Lynnc. All rights reserved.</p>
              </div>
              <div className="section-terms-privacy">
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
              </div>
            </div>
          </Container>
        </div>
        <img src="./footer_img.png" alt="footer img" />
      </div>
    </div>

  );
}

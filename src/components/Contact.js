import '../styles/Contact.css';
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaBloggerB,
  FaRedditAlien,
  FaStackOverflow,
  FaCodepen,
  FaInstagram,
  FaGitlab,
  FaMediumM,
} from "react-icons/fa";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import React, { useState } from "react";
import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai";
const Contact = () => {
    const success = useState(false);
  
    const contactsData = {
      email: "garvitdadheech9170@gmail.com",
      phone: "+91 800580xxxx",
      address: "Scaler School Of Technology, Bangalore, India",
  
      sheetAPI: "",
    };
  
    const socialsData = {
      github: "https://github.com/",
      facebook: "https://www.facebook.com/",
      linkedIn: "https://www.linkedin.com/in",
      instagram: "https://www.instagram.com/",
      codepen: "https://codepen.io/",
      twitter: "https://twitter.com/",
      reddit: "https://www.reddit.com/user/",
      blogger: "https://www.blogger.com/",
      medium: "https://medium.com/@",
      stackOverflow: "https://stackoverflow.com/users/",
      gitlab: "https://gitlab.com/",
      youtube: "https://youtube.com/",
    };
  
    return (
      <div className="contacts" id="Contact">
        <div className="contacts--container">
          <h1 className='contact-heading'>Contact</h1>
          <div className="contacts-body">
            <div className="contacts-form">
              <form>
                <div className="input-container">
                  <label htmlFor="Name">Name</label>
                  <input
                    placeholder="John Doe"
                    type="text"
                    name="Name"
                    className="form-input"
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="Email">Email</label>
                  <input
                    placeholder="John@doe.com"
                    type="email"
                    name="Email"
                    className="form-input"
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="Message">Message</label>
                  <textarea
                    placeholder="Type your message...."
                    type="text"
                    name="Message"
                    className="form-message"
                  />
                </div>
                <div className="submit-btn">
                  <button type="submit">
                    <p>{!success ? "Send" : "Sent"}</p>
                    <div className="submit-icon">
                      <AiOutlineSend
                        className="send-icon"
                        style={{
                          display: !success ? "none" : "inline-flex",
                          opacity: !success ? "0" : "1",
                        }}
                      />
                      <AiOutlineCheckCircle
                        className="success-icon"
                        style={{
                          display: success ? "none" : "inline-flex",
                          opacity: !success ? "0" : "1",
                        }}
                      />
                    </div>
                  </button>
                </div>
              </form>
            </div>
  
            <div className="contacts-details">
              <a
                href={`mailto:${contactsData.email}`}
                className="personal-details"
              >
                <div>
                  <FiAtSign className="iconsDetails"/>
                </div>
                <p>{contactsData.email}</p>
              </a>
              <a href={`tel:${contactsData.phone}`} className="personal-details">
                <div>
                  <FiPhone className="iconsDetails" />
                </div>
                <p>{contactsData.phone}</p>
              </a>
              <div className="personal-details">
                <div>
                  <HiOutlineLocationMarker className="iconsDetails" />
                </div>
                <p>{contactsData.address}</p>
              </div>
  
              <div className="socialmedia-icons">
                {socialsData.twitter && (
                  <a href={socialsData.twitter} target="_blank" rel="noreferrer">
                    <FaTwitter aria-label="Twitter"  className="SocialIconsDetails"/>
                  </a>
                )}
                {socialsData.github && (
                  <a href={socialsData.github} target="_blank" rel="noreferrer">
                    <FaGithub aria-label="GitHub" className="SocialIconsDetails" />
                  </a>
                )}
                {socialsData.linkedIn && (
                  <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                    <FaLinkedinIn aria-label="LinkedIn" className="SocialIconsDetails" />
                  </a>
                )}
                {socialsData.instagram && (
                  <a
                    href={socialsData.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram aria-label="Instagram"  className="SocialIconsDetails"/>
                  </a>
                )}
                {socialsData.medium && (
                  <a href={socialsData.medium} target="_blank" rel="noreferrer">
                    <FaMediumM aria-label="Medium"  className="SocialIconsDetails"/>
                  </a>
                )}
                {socialsData.blogger && (
                  <a href={socialsData.blogger} target="_blank" rel="noreferrer">
                    <FaBloggerB aria-label="Blogger"  className="SocialIconsDetails"/>
                  </a>
                )}
                {socialsData.youtube && (
                  <a href={socialsData.youtube} target="_blank" rel="noreferrer">
                    <FaYoutube aria-label="YouTube"  className="SocialIconsDetails"/>
                  </a>
                )}
                {socialsData.reddit && (
                  <a href={socialsData.reddit} target="_blank" rel="noreferrer">
                    <FaRedditAlien aria-label="Reddit" className="SocialIconsDetails" />
                  </a>
                )}
                {socialsData.stackOverflow && (
                  <a
                    href={socialsData.stackOverflow}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaStackOverflow aria-label="Stack Overflow" className="SocialIconsDetails" />
                  </a>
                )}
                {socialsData.codepen && (
                  <a href={socialsData.codepen} target="_blank" rel="noreferrer">
                    <FaCodepen aria-label="CodePen" className="SocialIconsDetails" />
                  </a>
                )}
                {socialsData.gitlab && (
                  <a href={socialsData.gitlab} target="_blank" rel="noreferrer">
                    <FaGitlab aria-label="GitLab" className="SocialIconsDetails" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
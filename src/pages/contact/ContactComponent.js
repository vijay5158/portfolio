import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="greeting-image-div d-flex align-items-center justify-content-center" 
              style={{
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
              }}
              >
     
            <div className="col-lg-4 text-center my-auto pb-5  rounded-circle"
            style={{
  display:'inline-block',
              position: 'relative',
  width: '200px',
  height: '200px',
  overflow: 'hidden',
  borderRadius: '50%'
  
            }}
            >
              <img alt="profile" className="img-fluid rounded-circle"  src={require(`../../assests/images/profile.jpg`).default}
              style={{
                 width: 'auto',
  height: '100%',
  marginLeft:'-20px'
              }}
              />
            </div>
            {/* <FeelingProud theme={theme} /> */}
          </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia theme={theme} />
                <div className="resume-btn-div">
                  <Button
                    text="See My Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>
                </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;

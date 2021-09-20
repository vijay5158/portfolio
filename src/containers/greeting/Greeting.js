import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
  Hello!
              </h1>
            <p
                className="greeting-text-p subTitle"
                style={{ color: theme.text }}
              >

                My name is 
                <span style={{ fontSize: '30px' }} >

  Vijay

</span>
. {greeting.subTitle}              </p>
           

               <SocialMedia theme={theme} />
              <div className="button-greeting-div">
              <Button theme={theme} text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div>
            </div>
          </div>
          <div className="greeting-image-div">
             </div>
        </div>
      </div>
    </Fade>
  );
}

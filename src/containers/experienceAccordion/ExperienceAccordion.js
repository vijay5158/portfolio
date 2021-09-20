import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
          {this.props.sections.map((section,index) => {
            return (
            <div key={index}>
              <h2> {section['title']}</h2>
                {section["experiences"].map((experience,index) => {
                  return (
                    <ExperienceCard experience={experience} key={index} theme={theme} />
                  );
                })}
                </div>
            );
          })}
        </div>
    );
  }
}

export default ExperienceAccordion;

import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { projectsHeader} from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

const ProjectsData = {"data":[
{"id":"MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=", "live":"https://paathshaala.me/","name":"PaathShaala","createdAt":"September 2021-Present","url":"https://github.com/vijay5158/paathshaala","description":"Developed a platform using React/Redux and Django, Implemented robust video conferencing, assessment/assignment management, and live data sharing features resulting in a 40% increase in student engagement and a 25% improvement in academic performance.","isFork":false,"languages":[{"name":"React.JS","iconifyClass":"logos:react"},{"name":"Redux","iconifyClass":"logos:redux"},{"name":"Django Rest Framework","iconifyClass":"logos:django-icon"},{"name":"Material UI","iconifyClass":"logos:material-ui"}]},
{"id":"MDEwOlJlcG9zaXRvcnkyNjkwNzUwMjM=", "live": "", "name":"QuicKart","createdAt":"March 2021","url":"https://github.com/vijay5158/QuicKart","description":"This project is meant to provide buying and selling service. This is a very simple e-commerce web application and have a bunch of features. You can visit project by:","isFork":false,"languages":[{"name":"HTML","iconifyClass":"logos-html-5"},{"name":"CSS","iconifyClass":"logos-css-3"},{"name":"JavaScript","iconifyClass":"logos-javascript"},{"name":"Django","iconifyClass":"logos:django-icon"}]},
{"id":"MDEwOlJlcG9zaXRvcnkyNzM1MTI1NTE=", "live": "", "name":"Smart Attendance System","createdAt":"November 2020","url":"https://github.com/vijay5158/Face_Recognition_Based_Attendance_System","description":"This project is Face Recognition based system which detects students frontal face in the classroom and mark their attendance.It is GUI based project. It automatically detects students present in class through camera and marks their attendance in the database.","isFork":false,"languages":[{"name":"Python","iconifyClass":"logos-python"},{"name":"OpenCV","iconifyClass":"logos:opencv"}]},
{"id":"MDEwOlJlcG9zaXRvcnkyMDIxNDc4ODA=", "live": "", "name":"EDA","createdAt":"July 2020","url":"https://github.com/vijay5158/Covid-19-Exploratory-Data-Analysis-and-Predictions-","description":"Exploratory Data Analysis and predictions of Covid-19 data collected from Kaggle.","isFork":false,"languages":[{"name":"Python","iconifyClass":"logos-python"},{"name":"Pandas","iconifyClass":"simple-icons:pandas"},{"name":"Numpy","iconifyClass":"logos:numpy"},{"name":"Scikit-learn","iconifyClass":"simple-icons:scikitlearn"}]},
{"id":"MDEwOlJlcG9zaXRvcnkxODIxMjk3NTQ=", "live": "", "name":"Diabetes Prediction","createdAt":"June 2020","url":"https://github.com/vijay5158/diabetes-Prediction","description":"Diabetes Prediction using different Machine Learning algorithms.","isFork":false,"languages":[{"name":"Python","iconifyClass":"logos-python"},{"name":"Pandas","iconifyClass":"simple-icons:pandas"},{"name":"Pandas","iconifyClass":"simple-icons:scipy"},{"name":"Numpy","iconifyClass":"logos:numpy"},{"name":"Scikit-learn","iconifyClass":"simple-icons:scikitlearn"}]}
]}


class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
											src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo,index) => {
            return <GithubRepoCard key={index} repo={repo} theme={theme} />;
          })}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href="https://github.com/vijay5158"
          newTab={true}
          theme={theme}
        />



        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;

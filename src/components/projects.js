import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText,
} from "react-mdl";
import DigitalGlove from "./img/digitalGlove.png";
import { Link } from "react-router-dom";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://res.cloudinary.com/dvnkqa41b/image/upload/v1595620408/Screen_Shot_2020-07-24_at_1.22.56_PM_y66bgd.png) center / cover",
              }}
            >
              React Projects
            </CardTitle>
            <CardText>
              DGB is a repository for your vehicle and all of its identifying
              information, plus the ability to add as many vehicles as you'd
              like. Easy access to your documents from a secure cloud-based
              database.
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/alanqicao/DigitalGloveBox"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </Button>
              <Button colored
              colored
              href="https://www.youtube.com/watch?v=uAMlLoYLoSo"
              rel="noopener noreferrer"
              target="_blank"
               >YouTube</Button>
              <Button
                colored
                href="https://my-digital-glove-box.herokuapp.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

    

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://res.cloudinary.com/dvnkqa41b/image/upload/v1595622684/Screen_Shot_2020-07-24_at_2.20.43_PM_w4sk5d.png) center / cover",
              }}
            >
              {/* React Projects */}
            </CardTitle>
            <CardText>
              DevPoint Social Media is a platform for DevPoint students to share
              their favorite movies, books, and music.
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/alanqicao/Social-Media-for-DevPoint-Student"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </Button>
              {/* <Button colored>CodePen</Button>
    <Button colored>LiveD</Button> */}
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "white",
                height: "176px",
                background:
                  "url(https://res.cloudinary.com/dvnkqa41b/image/upload/v1595622694/Screen_Shot_2020-07-24_at_2.27.58_PM_wxjgcq.png) center / cover",
              }}
            >
              Ruby On Rails
            </CardTitle>
            <CardText>
              Utoob A movies trailer webapp
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/alanqicao/Social-Media-for-DevPoint-Student"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </Button>
              {/* <Button colored>CodePen</Button>
              <Button colored>LiveD</Button> */}
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>



          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "white",
                height: "176px",
                background:
                  "url(https://res.cloudinary.com/dvnkqa41b/image/upload/v1595626114/Screenshot_72_vzpqtq.png) center / cover",
              }}
            >
              {/* Java */}
            </CardTitle>
            <CardText>
           Java-DOW  Day of week temperature recording and average 
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/alanqicao/JAVA-DOW"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </Button>
              {/* {/* <Button colored>CodePen</Button> */}
              <Button colored 
              colored
              href="https://www.youtube.com/watch?v=tnslP7fmolM"
              rel="noopener noreferrer"
              target="_blank"
              >YouTube</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>




        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "white",
                height: "176px",
                background:
                  "url(https://res.cloudinary.com/dvnkqa41b/image/upload/v1595622694/Screen_Shot_2020-07-24_at_2.27.58_PM_wxjgcq.png) center / cover",
              }}
            >
              Ruby On Rails
            </CardTitle>
            <CardText>
              Utoob A movies trailer webapp
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/alanqicao/Social-Media-for-DevPoint-Student"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </Button>
              {/* <Button colored>CodePen</Button>
              <Button colored>LiveD</Button> */}
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "white",
                height: "176px",
                background:
                  "url(https://res.cloudinary.com/dvnkqa41b/image/upload/v1595626114/Screenshot_72_vzpqtq.png) center / cover",
              }}
            >
              {/* Java */}
            </CardTitle>
            <CardText>
           Java-DOW  Day of week temperature recording and average 
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/alanqicao/JAVA-DOW"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </Button>
              {/* {/* <Button colored>CodePen</Button> */}
              <Button colored 
              colored
              href="https://www.youtube.com/watch?v=tnslP7fmolM"
              rel="noopener noreferrer"
              target="_blank"
              >YouTube</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Projects</Tab>
          {/* <Tab>Ruby On Rails</Tab>
          <Tab>Java</Tab> */}
        </Tabs>

        <Grid style={{marin:'auto'}}>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;

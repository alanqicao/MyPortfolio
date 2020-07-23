import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import resumeicon from "./img/resumeicon.png";
import Education from './education';
import Experience from './experience';
import Skills from './skills'
class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img src={resumeicon} alt="avatar" style={{ height: "200px" }} />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Alan Cao</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Salt Lake City, UT</p>
            <h5>Phone</h5>
            <p>(801)410-3832</p>
            <h5>Email</h5>
            <p>alanqicao@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />


          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            
            <Education 
            startYear ={2002}
            endYear ={2006}
            schoolName="MySchool"
            schoolDescription="lkjinveryi good schooldasdfasdfasdf"
            />

          <Education 
            startYear ={2007}
            endYear ={2009}
            schoolName="MySchool no2"
            schoolDescription="lkjinveryi good schooldasdfasdfasdf"
            />

            <hr style={{borderTop:'3px solid #e22947'}}/>
            <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="dasdfasdfasdfa good sdfasdfasdf"
            />

             <Experience
              startYear={2012}
              endYear={2016}
              jobName="Second Job"
              jobDescription="dasdfasdfasdfa good sdfasdfasdf"
            />

            <hr style={{borderTop:'3px solid #e22947'}}/>

            <h2>Skills</h2>

            <Skills 
              skill="javascript"
              progress={100}
            />
            <Skills 
              skill="Ruby"
              progress={60}
            />
            <Skills 
              skill="java"
              progress={50}
            />
            <Skills 
              skill="HTML/CSS"
              progress={70}
            />

          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;

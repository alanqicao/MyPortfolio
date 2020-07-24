import React, { Component } from "react";
import { Grid, Cell,Button } from "react-mdl";
import resumeicon from "./img/resumeicon.png";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import AlanResume from"./file/Qi_Cao_Resume.pdf"
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
            <p className= "resumeAbout">
              I’ve always loved to build things. Still do. To me, building
              violins and building software are the same — I get the chance to
              mold a block of wood or a line of code from the ground up into
              something intricate and beautiful. When it comes to debugging code
              or restoring violins, using creative ways to solve problems and
              thinking outside the box is key. I’ve always been interested in
              computer science and I’m finally taking the leap into this great
              wide world of coding.
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
            {/* <Button ripple style ={{color:"white",marginLeft:"65%"}} onClick={<a src={AlanResume}></a>}><i class="fas fa-download" ></i> Download Resume</Button> */}
            <h2>Education</h2>
            <Education
              // startYear={2020}
              // endYear={"Present"}
              schoolName="Salt Lake Community College"
              schoolDescription="Studied computer science major,
              working towards a Bachelor’s degree"
            />

            <Education
              // startYear={2020}
              // endYear={2020}
              schoolName="The University of Utah"
              schoolDescription="Full-Stack Web Developer Certificate"
            />
            <Education
              // startYear={2007}
              // endYear={2009}
              schoolName="Violin Making School of America"
              schoolDescription="Luthier Master of Violin Making"
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={"Present"}
              jobTitle ="Founder"
              jobName="Apollo Strings LLC"
              jobDescription1="Set up online violin store and brand using Amazon and Shopify."
              jobDescription2="Produced and designed the digital branding with Adobe."
              jobDescription3="Analyzed buyer data using a third-party software to direct marketing strategies."
              jobDescription4="https://amzn.to/2YR47Ew"
              jobDescription5="https://www.viottimusic.com/"
            />
            <div className="resumeLink">
            <a href="https://amzn.to/2YR47Ew" rel ="noopener noreferrer" target="_blank" >
                <i className="fa fa-amazon" aria-hidden="true"></i>
              </a>
            <a href="https://www.viottimusic.com/" rel ="noopener noreferrer" target="_blank" >
                <i class="fab fa-shopify" aria-hidden="true"></i>
              </a>
            </div>

            <Experience
              startYear={2018}
              endYear={2019}
              jobName="CMC Strings LLC"
              jobTitle ="Co-Founder"
              jobDescription1="Repaired and hand-crafted violins and cellos while managing shop inventory."
              jobDescription2="Assisted customers with purchases."
              jobDescription3="Ensured customer satisfaction and shop’s quality of our work."
            />

<Experience
              startYear={2016}
              endYear={2018}
              jobName="Peter Prier & Sons Violins"
              jobTitle ="Violin Maker and Restoration"
              jobDescription1="Restored high-end strings instruments."
              jobDescription2="Coordinated client and internal shop projects and assigned them to employees."
              jobDescription3="Trained interns in shop processes."
            />



            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Skills</h2>

            <Skills skill="Javascript" progress={70} />
            <Skills skill="React" progress={80} />
            <Skills skill="Ruby" progress={60} />
            <Skills skill="Ruby On Rails" progress={60} />
            <Skills skill="Java" progress={50} />
            <Skills skill="HTML/CSS" progress={70} />
            <Skills skill="GIT" progress={60} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;

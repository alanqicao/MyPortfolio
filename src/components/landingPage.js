import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl'
import me from './img/me.png'
class LandingPage extends Component {
  render(){
    return(
      <div style ={{width:'100%', margin:'auto'}}>
        <Grid className ='landing-grid'>
          <Cell col={12}>
            <img
              src={me}
              alt="avatar"
              className ="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr/>

              <p>HTML/CSS | JavaScript | React | Ruby | RubyOnRails | Java |</p>
              
              <div className="social-links">
                {/*LindIn */}
              <a href="https://www.linkedin.com/in/alanqicao/" rel ="noopener noreferrer" target="_blank" >
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
                {/*GitHub */}
              <a href="https://github.com/alanqicao" rel ="noopener noreferrer" target="_blank" >
                <i className="fa fa-github-square" aria-hidden="true"></i>
              </a>

              </div>
            </div>
          </Cell>
        </Grid>
      </div>

      
    )
  }
}

export default LandingPage;
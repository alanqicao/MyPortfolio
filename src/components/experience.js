import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';

class Experience extends Component {
  render(){
    return(
      <Grid>
        <Cell col={4}>
         <p>{this.props.startYear} - {this.props.endYear}</p>
          </Cell>
        <Cell col={8}>
    <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
    <ul className="jobDescription">
      <li>{this.props.jobDescription1}</li>
      <li>{this.props.jobDescription2}</li>
      <li>{this.props.jobDescription3}</li>
      
    </ul>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;
import React, {Component} from 'react';
import { Tabs,Tab,Grid,Cell,Card,CardTitle,CardActions,Button,CardMenu,IconButton, CardText} from 'react-mdl';


class Projects extends Component {
  constructor(props){
    super(props);
    this.state={ activeTab: 0 };

  }

  toggleCategories(){

  if (this.state.activeTab === 0){
    return(
       <div className="projects-grid">
      {/* <Card shadow={5} style={{minWidth:'450',margin: 'auto'}}>
        <CardTitle style={{color: '#fff',height:'176px',background:'url() center / cover'}}>React Project #1</CardTitle>
        <CardText>
          sldkfjalskdjflaskdfjlks stome
        </CardText>
        <CardActions border>
          <Button colored>Github</Button>
          <Button colored>CodePen</Button>
          <Button colored>Live</Button>
        </CardActions>
        <CardMenu style={{color:'#fff'}}>
          <IconButton name="share"/>
        </CardMenu>
      </Card>
  
<Card shadow={5} style={{minWidth:'450',margin: 'auto'}}>
  <CardTitle style={{color: '#fff',height:'176px',background:'url() center / cover'}}>React Project #2</CardTitle>
  <CardText>
    sldkfjalskdjflaskdfjlks stome
  </CardText>
  <CardActions border>
    <Button colored>Github</Button>
    <Button colored>CodePen</Button>
    <Button colored>LiveD</Button>
  </CardActions>
  <CardMenu style={{color:'#fff'}}>
    <IconButton name="share"/>
  </CardMenu>
</Card> */}
<p>React</p>
</div>
    
    )
  } else if (this.state.activeTab ===1){
  return(
  // project 2
  <div>
      {/* <Card shadow={5} style={{minWidth:'450',margin: 'auto'}}>
        <CardTitle style={{color: '#fff',height:'176px',background:'url() center / cover'}}>Ruby Project #2</CardTitle>
        <CardText>
          sldkfjalskdjflaskdfjlks stome
        </CardText>
        <CardActions border>
          <Button colored>Github</Button>
          <Button colored>CodePen</Button>
          <Button colored>LiveDemo</Button>
        </CardActions>
        <CardMenu style={{color:'#fff'}}>
          <IconButton name="share"/>
        </CardMenu>
      </Card>   */}
      <p>Ruby</p>
      </div>
      )} else if (this.state.activeTab === 2){
  return(
    <div><h1>this is Java</h1></div>
  )}
}

  render(){
    return(
      <div className="category-tabs">
      <Tabs activeTab ={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab: tabId})} ripple>
        <Tab>React</Tab>
        <Tab>Ruby On Rails</Tab>
        <Tab>Java</Tab>
      </Tabs>

        <Grid >
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>

      </div>
    )
  }
}

export default Projects;
import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import contactMe from './img/contactMe.jpg'

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Alan Cao</h2>
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
            I'm a Salt Lake City based Software Engineer.
              Experience with React, JS, Ruby, RubyOnRails.
            </p>
            <img
              src={contactMe}
              alt="avatar"
              style={{ height: "250px" }}
            />
          </Cell>
          <Cell col={6}>
            {/* <h2>Contact Me</h2> */}
            {/* <hr /> */}
            {/* <hr /> */}

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (801) 557-3216
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    alanqicao@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-skype" aria-hidden="true" />
                    MySkypeID: alanqicao
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;

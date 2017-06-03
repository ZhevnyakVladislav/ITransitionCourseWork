import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { List, ListItem } from 'material-ui/List';
import './Profile.scss';

export default class Main extends React.Component {

  render() {
    var sectionStyle = {
      backgroundImage: 'url(' + 'https://pp.userapi.com/c637921/v637921451/4afed/YQLjcdSzWyU.jpg' + ')',
      height:'250px',
      backgroundColor:"red"
    };
    var rfrf = {
      backgroundColor:"red"
    };
    return (
      <Grid fluid>
        <Row>
          <Col xsOffset={3} xs={2} id='profile-img' style={sectionStyle}/>
          <Col xxsOffset={5} xs={4}>
            
          </Col>
        </Row>
      </Grid>
    );
  }
}

import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { List, ListItem } from 'material-ui/List';
import './Profile.scss';

export default class Main extends React.Component {

  render() {
    var sectionStyle = {
      backgroundImage: 'url(' + 'https://pp.userapi.com/c637921/v637921451/4afed/YQLjcdSzWyU.jpg' + ')',
      height:"200px"
    };
    return (
      <Grid fluid>
        <Row center="xs">
          <Col xs={10} md={3}>
            <Row id='profile-img' style={sectionStyle}/>
            <Row center="xs"> Change photo</Row>
          </Col>
          <Col  xs={10} md={4}>
          <Row center="xs">
            <h2>User FirstName</h2>
          </Row>
          <Row center="xs">
            <h2>User LastName</h2>
          </Row>
          <Row center="xs">
            <h2>User LastName</h2>
          </Row>
          <Row center="xs">
            <h2>User LastName</h2>
          </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

import React from 'react';
import { Paper }  from 'material-ui';
import { Grid,Row,Col } from 'react-flexbox-grid';
import {List, ListItem} from 'material-ui/List';

const news = [];
export default class News extends React.Component {

  constructor(props){
    super(props);
    for (var i = 0; i < 10; i++) {
      news[i] = { title:"title", discription:"fdfdsefesfs" };
    }
  }
 listItems(){
   return(
     <List>
       news.map((new) =>
         <ListItem>fefe</ListItem>
       );
     </List>
  );
}
  render() {
    console.log(news);
		return (
      <Grid fluid>
        <Row>
          <Col xs={12} sm={6} md={6} lg={3}>
            <Paper zDepth={2}>
              <List>
                {this.listItems()}
              </List>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

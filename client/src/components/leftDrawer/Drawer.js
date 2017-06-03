import React from 'react';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';
import {Link } from 'react-router-dom';

export default class DrawerSimpleExample extends React.Component {

  handleClose() {
    this.setState({open: false});
    this.props.drawerState.open = !this.props.drawerState.open;
  }
  render() {
    return (
      <div>
          <Drawer
            docked={false}
            open={this.props.drawerState.open}
            containerStyle={{'position': 'absolute', 'top': '64px'}}
            onRequestChange={this.handleClose.bind(this)}
          >
            <Link className="menu-link" to="/profile">
              <ListItem
                onTouchTap={this.handleClose.bind(this)}
                leftAvatar={
                  <Avatar src="https://pp.userapi.com/c638029/v638029957/441c/US2iWHCXtH4.jpg" />
                }
              >
              Image Avatar
              </ListItem>
            </Link>
            <Link className="menu-link" to="/profile">
              <ListItem onTouchTap={this.handleClose.bind(this)}>
                News
              </ListItem>
            </Link>
            <Link className="menu-link" to="/profile">
              <ListItem onTouchTap={this.handleClose.bind(this)}>
                Projects
              </ListItem>
            </Link>
            <Link className="menu-link" to="/profile">
              <ListItem onTouchTap={this.handleClose.bind(this)}>
                News
              </ListItem>
            </Link>
          </Drawer>
      </div>
    );
  }
}

import React from 'react';
import Header from './Header';
import Drawer from './leftDrawer/Drawer';
import Main from './main/Main';
import Profile from './profile/Profile';
import LogInForm from './logIn/LogInForm';
import LogUpForm from './logUp/LogUpForm';
import News from './news/News';
import { HashRouter, Route, Link } from 'react-router-dom';

export default class Content extends React.Component {
  constructor(props){
		super(props);
		this.drawerState = {open:false};
	}

  leftButtonTouch(){
		this.setState({open: !this.drawerState.open});
		this.drawerState.open = !this.drawerState.open;
	}

  render() {
		return (
      <HashRouter>
        <div>
          <Header showDrawer={this.leftButtonTouch.bind(this)}/>
          <Drawer drawerState={this.drawerState}/>
          <Route path='/main' component={Main} />
          <Route path='/profile' component={Profile} />
          <Route path='/logIn' component={LogInForm} />
          <Route path='/logUp' component={LogUpForm} />
          <Route path='/news' component={News} />
        </div>
      </HashRouter>
    );
  }
}

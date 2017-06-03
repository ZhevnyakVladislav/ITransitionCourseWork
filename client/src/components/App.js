import React from 'react';
import Header from './Header';
import Drawer from './leftDrawer/Drawer';
import Main from './Main';
import Profile from './Profile';
import Registration from './registrWin/Registration';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { HashRouter, Route, Link } from 'react-router-dom';

const THEME = getMuiTheme();

export default class App extends React.Component {

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
							<MuiThemeProvider muiTheme={THEME}>
									<Header showDrawer={this.leftButtonTouch.bind(this)}/>
							</MuiThemeProvider>
							<MuiThemeProvider muiTheme={THEME}>
									<Drawer drawerState={this.drawerState}/>
							</MuiThemeProvider>
								<Route path='/main' component={Main} />
								<Route path='/profile' component={Profile} />
							<MuiThemeProvider muiTheme={THEME}>
								<Route path='/registr' component={Registration} />
							</MuiThemeProvider>
					</div>
				</HashRouter>
		);
	}
}

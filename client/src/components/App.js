import React from 'react';
import Content from './Content'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const THEME = getMuiTheme();

export default class App extends React.Component {
	render() {
		return (
			<div>
				<MuiThemeProvider muiTheme={THEME}>
					<Content/>
				</MuiThemeProvider>
			</div>
		);
	}
}

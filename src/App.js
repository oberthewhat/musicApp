import React, { Component } from 'react'
import ButtonAppBar from "./navBar"
import Dashboard2 from './dashboard2'


export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			logStatus: false,

		}
		this.loggedIn = this.loggedIn.bind(this);
	}

  loggedIn() {
		this.setState(state => ({
			logStatus: !state.logStatus,
    }));
	}



	render() {
		if(this.state.logStatus) {
			return (
			<div>
						<ButtonAppBar loggedIn={this.loggedIn} value={this.state.logStatus}>
						</ButtonAppBar>	
						<Dashboard2/>
			</div>)
		}
		return (
			<div>
				<ButtonAppBar loggedIn={this.loggedIn} value={this.state.logStatus}>
				</ButtonAppBar>		
			</div>
		)
	}
}

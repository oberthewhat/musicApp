import React, { Component } from 'react'
import Online from './cards/online'
import QualityCard from './cards/quality'
import VolumeCard from './cards/volumecard'


export default class dashboard2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			online: false,
			quality: 20,
			notifications: [],
		}
		this.handleSwitch = this.handleSwitch.bind(this)
		this.handleSlider = this.handleSlider.bind(this)
		this.handleQuality = this.handleQuality.bind(this)
	}

//online card

	
handleSwitch = () => {
	let online = !this.state.online
	this.setState({online})
  let note = this.state.notifications
	if(online === true) {
			this.setState({
				notifications: ["You are online",...note]
		})
	} else {
		this.setState({
			notifications: ["You are not online",...note]
		})
	}
}  


//volume card

handleSlider = (value) => {
	let volume = value.target.textContent
	let note = this.state.notifications
   if(volume > 80) {
		this.setState({
			notifications: ["Thats way too loud buddy!",...note]
	})
	 } else {
		 this.setState({
			 notifications: ["Comfortable listening level.",...note]
		 })
	 }
}

// quality card
handleQuality = (e) => {
 console.log('penis')
 let quality = e.target.value
 let note = this.state.notifications
if(quality === 30) {
	this.setState({
		notifications: ["High quality listening",...note]
	})
} else if(quality === 20) {
	this.setState({
		notifications: ["Medium quality listening",...note]
	})
} else if(quality === 10) {
	this.setState({
		notifications: ["Low quality listening",...note]
	})
}
}


	render() {
			console.log(this.state.notifications)
		return (
     <div className="bottom">
			<h2>Welcome User!</h2>
		   <div className="cardContainer">
			<Online className="card" handleSwitch={this.handleSwitch} status={this.state.online}/>
			<VolumeCard className="card" handleSlider={this.handleSlider}/>
			<QualityCard className="card" handleQuality={this.handleQuality}/>
			</div>
			<div className="notifications">
				<h3>Notifications:</h3>
				{this.state.notifications.map((item, index) => (
					<p key={index}>{item}</p>
				) )}
				</div>
		</div>
		)
	}
}


import React, { Component } from 'react';
import SearchContainer from './SearchContainer'

class Home extends Component {
	render() {
		return (
			<div>
				<h1> GIPHY LAB! </h1>
				<SearchContainer query={""}/>
			</div>
		)
	}
}

export default Home;

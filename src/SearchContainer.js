import React, { Component } from 'react';
import Search from './Search'
import axios from 'axios';

class SearchContainer extends Component {
	constructor() {
		super();

		this.state = {
			query: "",
			response: []
		}
		this.API_KEY = "JGfbC7y8JHqPfeAGfQRVUOxo2Vz7UNWS";
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleChange(e) {
		this.setState({
			query: e.target.value,
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const rootUrl = "http://api.giphy.com/v1/gifs/search?q="
		let response = axios.get(rootUrl+ this.state.query + "&api_key=" + this.API_KEY + "&limit=10");
		let self = this;

		response.then(function(data){
			self.setState({
				response: data.data.data
			});
		});
	}

	render() {
		let results;
		if (this.state.response) {
      results = this.state.response.map((item,index) =>
			  <img key={index} src={item.images.fixed_height_small.url} alt="results" />
			)
    }

		return (
			<div>

				<Search query={this.state.query}
						handleSubmit={(e) => {this.handleSubmit(e)}}
						handleChange={(e) => {this.handleChange(e)}}/>
				<br />
				<div>{ results }</div>
			</div>
		)
	}
}

export default SearchContainer;

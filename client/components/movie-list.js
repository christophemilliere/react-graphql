import React, { Component } from 'react';
import { graphql } from "react-apollo";
import gql from 'graphql-tag';

class MovieList extends Component {
	render() {
		console.log('props', this.props);
		return (
			<div>
				Liste de films
				<ul>
					{this.renderMovies()}
				</ul>
			</div>
		)
	}
	renderMovies() {
		if (!this.props.data.loading) {
			return this.props.data.movies.map(movie => {
				return <li key={movie.id}>{movie.title}</li>;
			});
		} else {
			return 'Chargement...';
		}
	}
}
const query = gql`{
	movies{
		id,
		title
	}
}`
export default graphql(query)(MovieList);
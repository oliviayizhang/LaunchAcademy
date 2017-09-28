import React, { Component } from 'react';
import MoviesIndex from '../components/MoviesIndex'
import FormContainer from '../components/FormContainer'

class MoviesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
    this.addMovies = this.addMovies.bind(this)
  }

  componentDidMount() {
    fetch('/api/v1/movies')
    .then(response => {
      if(response.ok) {
        return response
      } else {
        throw Error('Network Requires Failed')
      }
    }).then(response => response.json())
    .then(body => {
      //insert logic here if you have
      let allMovies = body.movies
      let selectedMovies = allMovies.filter(movie => {
        return movie.release_year < 1960
      })
      this.setState({movies: allMovies})
    })
  }

  addMovies(newMovie) {
    //IMPORTANT fetch default to GET
    fetch('/api/v1/movies',{
      method: 'POST',
      body: JSON.stringify(newMovie) //body is the key
    }).then(response => response.json())
    .then(body => {
      this.setState({movies: this.state.movies.concat(body)})
    }) //append the new movie to the data
  }

  render() {
    return(
      <div className="container">
        <h1>My Favorite Disney Movies</h1>
        <hr />
        <MoviesIndex
          movies={this.state.movies}
        />
        <FormContainer
          addMovies={this.addMovies}
        />
      </div>
    )
  }
}

export default MoviesContainer;

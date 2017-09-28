import React from 'react';
import MovieTile from './MovieTile'
import FormContainer from './FormContainer'

const MoviesIndex = props => {

  let movies = props.movies.map(movie => {
    return(
      <MovieTile
        key={movie.id}
        title={movie.title}
        releaseYear={movie.release_year}
        runtime={movie.runtime}
      />
    )
  })
  return(
    <ul>
      {movies}
    </ul>
  );
}

export default MoviesIndex;

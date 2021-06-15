import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import '../style/MovieList.css'
const MovieList = ({ movies, totalResults, currentPage, loadMore }) => {
     const [loadButton, setLoadButton] = useState(true);

  useEffect(() => {
    if (Math.ceil(totalResults) / 20 <= currentPage || totalResults <= 20) {
      setLoadButton(false);
    } else {
      setLoadButton(true);
    }
  }, [totalResults, currentPage]);

     return (
          <section className="movie-list">
          <div className="list">
        {totalResults > 0 ? (
          movies.map(movie => <Movie key={movie.id} {...movie} />)
        ) : (
          <h2>No movies found</h2>
        )}
      </div>
      {loadButton && (
        <button onClick={() => loadMore(currentPage + 1)}>Load More</button>
      )}
               
          </section>
     );
};

export default MovieList;
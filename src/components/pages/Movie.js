import React from 'react';
import { Link } from 'react-router-dom';
import NoImage from '../../image/no-image.png';
const Movie = ({ id, title, poster_path }) => {
  return (
    <>
      <Link to={`/movie/${id}`}>
        <div className='content'>
          {poster_path == null ? (
            <img
              className='no-image'
              src={NoImage}
              alt='placeholder thumbnail'
            />
          ) : (
            <img
              src={`http://image.tmdb.org/t/p/w200${poster_path}`}
              alt='movie thumbnail'
            />
          )}
          <h2>{title}</h2>
        </div>
      </Link>
    </>
  );
};

export default Movie;

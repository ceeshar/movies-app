import React from 'react';
import { IMG_API } from '../variables';

const Movie = ({ title, poster_path, overview, vote_average }) => (
  <div className='movie'>
    <img src={IMG_API + poster_path} alt={title} />
  </div>
);

export default Movie;

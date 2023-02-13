import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../services/Api.js';


export const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      const movieCast = await fetchCast(movieId);
      setMovieCast(movieCast.cast);
    };
    getCast(movieId);
  }, [movieId]);

  return (
    <>
      <h2>Cast</h2>
      <ul>
        {movieCast.map(cast => (
          <li key={cast.id} style={{ listStyle: 'none' }}>
            <img
              style={{ width: '200px', border: '1px solid' }}
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                  : `https://via.placeholder.com/220x330?text=Theres+no+photo`
              }
              alt={`${cast.name}'s portrait`}
            />
            <p>{cast.name}</p>
            <p>character: {cast.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
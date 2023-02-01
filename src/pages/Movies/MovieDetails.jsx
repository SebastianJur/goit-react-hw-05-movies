import { Suspense, useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';
import { fetchDetails } from '../../services/Api';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [movieCategories, setMovieCategories] = useState('');
  const { movieId } = useParams();

  let location = useLocation();
  const date = new Date(movie.release_date);

  const releaseDate = date.getFullYear();
  const image = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const goBackLinkHref = location.state?.from ?? '/';
  

  const getMovieById = async movieId => {
    const movie = await fetchDetails(movieId);
    const categories = movie.genres;
    const genres = categories.map(object => object.name).join(', ');
    setMovie(movie);
    setMovieCategories(genres);
  };

  useEffect(() => {
    getMovieById(movieId);
  }, [movieId]);

  return (
    <>
      <main>
        <Link to={goBackLinkHref}> ⇦ Go Back </Link>
        <h2>
          {movie.title} ({releaseDate})
        </h2>
        <h3>Vote average: {movie.vote_average} ⭐</h3>
        <img className={css.image} src={image} alt={movie.title} />
        <h3>Overview: </h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>{movieCategories} </p>
        <hr />
        <h3> Additional Information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default MovieDetails;
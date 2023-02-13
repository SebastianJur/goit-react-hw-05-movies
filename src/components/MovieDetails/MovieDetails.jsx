import { Suspense, useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';
import { fetchDetails } from '../../services/Api';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [movieCategories, setMovieCategories] = useState('');
  const { movieId } = useParams();

  const location = useLocation();
  const date = new Date(movie.release_date);

  const releaseDate = date.getFullYear();

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
        <img
          className={css.image}
          src={
            movie.poster_path
              ? `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`
              : `https://via.placeholder.com/220x330?text=Theres+no+photo`
          }
          alt={movie.title}
        />
        <h3>Overview: </h3>
        <p className={css.overview}>{movie.overview}</p>
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
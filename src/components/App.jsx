import { lazy, Suspense } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import '../index.css';

const Home = lazy(() => import('../pages/Home/Home.jsx'));
const Movies = lazy(() => import('../pages/Movies/Movies.jsx'));
const MovieDetails = lazy(() => import('../pages/Movies/MovieDetails.jsx'));
const Cast = lazy(() => import('../components/Cast/Cast.jsx'));
const Reviews = lazy(() => import('../components/Reviews/Reviews.jsx'));

export const App = () => {
  return (
    <>
      <div className="App">
        <header>
          <nav>
            <NavLink className="navLink" to="/" end>
              Home
            </NavLink>
            <NavLink className="navLink" to="/movies">
              Movies
            </NavLink>
          </nav>
        </header>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
};
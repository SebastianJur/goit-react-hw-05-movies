import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../services/Api.js';

export const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const movieReviews = await fetchReviews(movieId);
      if (movieReviews.length > 0) {
        setMovieReviews(movieReviews);
      }
    };
    getReviews(movieId);
  }, [movieId]);

  return (
    <>
      <h2>Reviews</h2>
      {movieReviews.length === 0 ? (
        <p>There is no review for this movie</p>
      ) : (
        <ul>
          {movieReviews.map(review => (
            <li key={review.id}>
              <h3>author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
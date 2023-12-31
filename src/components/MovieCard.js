import { POSTER_CDN_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  const { backdrop_path, id, original_title, poster_path, title } = movie;
  return (
    <div className="p-2">
      {/* <img
        className="w-48"
        alt="movie-poster"
        src={POSTER_CDN_URL + backdrop_path}
      /> */}
      <img alt="movie-poster" src={POSTER_CDN_URL + poster_path} />
    </div>
  );
};

export default MovieCard;

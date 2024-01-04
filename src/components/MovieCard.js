import { POSTER_CDN_URL } from "../utils/constants";

const MovieCard = ({ movieDetails }) => {
  const { backdrop_path, id, original_title, poster_path, title } =
    movieDetails;
  return (
    <div className=" w-36 md:w-48 pr-4 hover:">
      <img
        className="rounded-lg"
        alt="movie-poster"
        src={POSTER_CDN_URL + poster_path}
      />
    </div>
  );
};

export default MovieCard;

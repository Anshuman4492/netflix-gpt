import { useSelector } from "react-redux";
import { POSTER_CDN_URL } from "../utils/constants";
import MovieList from "./MovieList";

const GptSearchSuggesstions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  // console.log(movieResults[0][0].poster_path);
  return (
    <div className="m-4 p-2 bg-black text-white bg-opacity-60">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptSearchSuggesstions;

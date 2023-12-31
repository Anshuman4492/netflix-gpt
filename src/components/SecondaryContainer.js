import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // Movies - Released in Past Year => Movies Cards*n
  //        - Trending Now => Movies Cards*n
  //        - Dark US TV Dramas => Movies Cards*n
  //        - Documentaries => Movies Cards*n
  //        - Bingeworthy TV Dramas => Movies Cards*n
  //
  return (
    <div>
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;

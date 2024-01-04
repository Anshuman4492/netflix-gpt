import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const shows = useSelector((store) => store.tvshows);
  // Movies - Released in Past Year => Movies Cards*n
  //        - Trending Now => Movies Cards*n
  //        - Dark US TV Dramas => Movies Cards*n
  //        - Documentaries => Movies Cards*n
  //        - Bingeworthy TV Dramas => Movies Cards*n
  //
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-52 relative z-20">
        <MovieList title="Trending Now" movies={movies.trendingMovies} />
        <MovieList title="Top Rated" movies={movies.topRatedMovies} />
        <MovieList title="Upcoming" movies={movies.upcomingMovies} />
        <MovieList title="TV Shows" movies={shows.tvshows} />
      </div>
    </div>
  );
};

export default SecondaryContainer;

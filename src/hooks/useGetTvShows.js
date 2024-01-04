import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTvShows } from "../utils/tvshowsSlice";

const useGetTvShows = () => {
  // Fetching the Data from TMDB API and updating the redux store
  const dispatch = useDispatch();
  const tvShows = useSelector((store) => store.tvshows.tvshows);
  const getTvShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/tv/week?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTvShows(json.results));
  };
  useEffect(() => {
    !tvShows && getTvShows();
  }, []);
};
export default useGetTvShows;

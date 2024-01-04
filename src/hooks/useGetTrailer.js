import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
const useGetTrailer = (id) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const handleTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data?.json();
    const trailerVideo = json?.results?.filter(
      (video) => video.name === "Official Trailer"
    );
    if (!trailerVideo) trailerVideo = json.results[0];
    dispatch(addTrailerVideo(trailerVideo[0]));
  };
  useEffect(() => {
    !trailerVideo && handleTrailer(id);
  }, []);
};

export default useGetTrailer;

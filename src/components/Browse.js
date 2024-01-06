import React from "react";
import { useSelector } from "react-redux";
import useGetTopRatedMovies from "../hooks/useGetTopRatedMovies";
import useGetTrendingMovies from "../hooks/useGetTrendingMovies";
import useGetTvShows from "../hooks/useGetTvShows";
import useGetUpcomingMovies from "../hooks/useGetUpcomingMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  useGetTrendingMovies();
  useGetTopRatedMovies();
  useGetUpcomingMovies();
  useGetTvShows();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;

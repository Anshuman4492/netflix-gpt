import { BG_URL } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggesstions from "./GptSearchSuggesstions";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover" alt="background" src={BG_URL} />
      </div>
      <div className=" ">
        <GptSearchBar />
        <GptSearchSuggesstions />
      </div>
    </>
  );
};

export default GptSearch;

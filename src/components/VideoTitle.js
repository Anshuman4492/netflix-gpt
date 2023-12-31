const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-4xl">{title}</h1>
      <p className="p-6 w-1/4">{overview}</p>
      <div>
        <button className="bg-white w-28 text-black p-2 font-bold text-xl rounded-md hover:bg-opacity-85">
          ▶️ Play
        </button>
        <button className="bg-slate-600 w-32 text-black mx-2 p-2 font-bold text-xl rounded-md hover:bg-opacity-85">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

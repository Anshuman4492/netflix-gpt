import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeLanguage } from "../utils/configSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { auth } from "../utils/firebase";
import { toggleGptSearchView } from "../utils/gptSlice";
import { addUser, removeUser } from "../utils/userSlice";

function Header() {
  const user = useSelector((store) => store.user);
  const showgptSearch = useSelector((store) => store.gpt.showGptSearch);
  const user_ = auth.currentUser;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            user: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when component umnounts.
    return () => unsubscribe();
  }, []);
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="w-full px-4 absolute bg-gradient-to-b from-black z-10 flex flex-col md:flex-row text-white">
      <img className="w-48 mx-auto md:mx-0" alt="logo" src={LOGO} />
      {user_ && (
        <div className=" flex justify-between">
          <div className="">
            <ul className="flex m-2 p-4 space-x-4 text-nowrap text-sm">
              <li>Home</li>
              <li>TV Programmes</li>
              <li>Films</li>
              <li>Originals</li>
              <li>Recently Added</li>
              <li>My List</li>
            </ul>
          </div>
          <div className="flex ml-[20rem] p-4 space-x-4 mr-4 text-wrap">
            {showgptSearch && (
              <select
                className="p-2 m-2 bg-black text-white rounded-lg"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="bg-green-700 rounded-lg m-2 px-2"
              onClick={handleGptSearchClick}
            >
              {showgptSearch ? "Homepage" : "GPTSearch"}
            </button>
            <h1 className="cursor-pointer">CHILDREN</h1>
            <h1 className="cursor-pointer">🔔</h1>
            <img
              className="hidden md:block w-6 h-6"
              alt="user-icon"
              src={user.photoURL}
            />
            <h1 className="hidden md:block">{user.displayName}</h1>
            <h1
              className="text-sm cursor-pointer font-bold"
              onClick={handleSignOut}
            >
              Sign Out
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;

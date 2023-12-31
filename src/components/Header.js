import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

function Header() {
  const user = useSelector((store) => store.user);
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
  return (
    <div className="w-full px-4 absolute bg-gradient-to-b from-black z-10 flex text-white">
      <img className="w-48 " alt="logo" src={LOGO} />
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
          <div className="flex ml-[20rem] p-4 space-x-4 mr-4 text-nowrap">
            <h1 className="cursor-pointer">🔍</h1>
            <h1 className="cursor-pointer">CHILDREN</h1>
            <h1 className="cursor-pointer">🔔</h1>
            <img className="w-6 h-6" alt="user-icon" src={user.photoURL} />
            <h1>{user.displayName}</h1>
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

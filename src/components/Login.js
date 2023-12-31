import { useRef, useState } from "react";
import { validateSignIn, validateSignUp } from "../utils/validate";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";
const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const first_Name = useRef(null);
  const last_Name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  //Sign In Logic
  const handleSignIn = () => {
    const validation = validateSignIn(
      email.current.value,
      password.current.value
    );
    if (validation != null) setErrorMessage(validation);
    else {
      setErrorMessage("Validation Successfull");
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          setErrorMessage("User verified successfully");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  //Sign Up Logic
  const handleSignUp = () => {
    const validation = validateSignUp(
      first_Name.current.value,
      last_Name.current.value,
      email.current.value,
      password.current.value
    );
    console.log(validation);
    if (validation != null) setErrorMessage(validation);
    else {
      setErrorMessage("Validation Successfull");
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
          console.log(user);
          updateProfile(user, {
            displayName:
              first_Name.current.value + " " + last_Name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  user: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const toggleSignIn = () => {
    setIsSignForm(!isSignInForm);
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          alt="background"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-16 absolute w-4/12 border border-gray-600 bg-black my-24 mx-auto right-0 left-0 text-white rounded-lg opacity-90"
      >
        <h1 className="font-medium text-3xl p-4 ">
          Sign {isSignInForm ? "In" : "Up"}
        </h1>
        {!isSignInForm && (
          <div>
            <input
              ref={first_Name}
              className="my-4 p-4 w-full bg-slate-700 rounded-lg"
              type="text"
              placeholder="First Name"
            />
            <input
              ref={last_Name}
              className="my-4 p-4 w-full bg-slate-700 rounded-lg"
              type="text"
              placeholder="Last Name"
            />
          </div>
        )}
        <input
          ref={email}
          className="my-4 p-4 w-full bg-slate-700 rounded-lg"
          type="text"
          placeholder="Email or phone number"
        />
        <input
          ref={password}
          className="my-4 p-4 w-full bg-slate-700 rounded-lg"
          type="password"
          placeholder="Password"
        />
        <p className="p-2 m-2 text-red-700 font-medium">{errorMessage}</p>
        <button
          className="p-4 my-6 w-full bg-red-700 rounded-lg"
          onClick={isSignInForm ? handleSignIn : handleSignUp}
        >
          Sign {isSignInForm ? "In" : "Up"}
        </button>
        <p className=" text-slate-600 text-sm">
          {isSignInForm ? "New to Netflix? " : "Already a User? "}
          <span
            className="text-white hover:underline cursor-pointer"
            onClick={toggleSignIn}
          >
            {isSignInForm ? "Sign up now." : "Sign in"}
          </span>
        </p>
      </form>
    </>
  );
};

export default Login;

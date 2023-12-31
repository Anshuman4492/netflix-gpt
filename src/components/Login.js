import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);
  const toggleSignIn = () => {
    setIsSignForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="background"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <form className="p-16 absolute w-4/12 border border-gray-600 bg-black my-48 mx-auto right-0 left-0 text-white rounded-lg opacity-90">
        <h1 className="font-medium text-3xl p-4 ">
          Sign {isSignInForm ? "In" : "Up"}
        </h1>
        <input
          className="my-4 p-4 w-full bg-slate-700 rounded-lg"
          type="text"
          placeholder="First Name"
        />
        {!isSignInForm && (
          <div>
            <input
              className="my-4 p-4 w-full bg-slate-700 rounded-lg"
              type="text"
              placeholder="Last Name"
            />
            <input
              className="my-4 p-4 w-full bg-slate-700 rounded-lg"
              type="text"
              placeholder="Email or phone number"
            />
          </div>
        )}
        <input
          className="my-4 p-4 w-full bg-slate-700 rounded-lg"
          type="password"
          placeholder="Password"
        />
        <button className="p-4 my-6 w-full bg-red-700 rounded-lg">
          Sign {isSignInForm ? "In" : "Up"}
        </button>
        <p className=" text-slate-600 text-sm">
          {isSignInForm ? "New to Netflix?" : "Already a User? "}
          <span
            className="text-white hover:underline cursor-pointer"
            onClick={toggleSignIn}
          >
            {isSignInForm ? "Sign up now." : "Sign in"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;

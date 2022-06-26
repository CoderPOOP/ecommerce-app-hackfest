import React, { useState } from "react";
import { auth } from "../firebase-config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login() {
  const Store = "store"
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((re) => {
        console.log(re);
        const user = re.user;
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [user, setUser] = useState({});
  return (
    <>
      <div className="flex justify-center items-center sm:h-screen w-screen mt-28 sm:mt-0">
        <div class="p-14 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 text-center">
          <a href="#">
            <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Login to iTech
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl">
            Check out latest deals from trusted and best selling brands now!
          </p>
          <button
            type="button"
            onClick={signInWithGoogle}
            class="text-white bg-[#ff5151] hover:bg-[rgb(255,156,156)] focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 text-lg duration-150"
          >
            <svg
              class="w-4 h-4 mr-2 -ml-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Sign in with Google
          </button>
          {user.email && (
            <>
            <div className="py-1.5 pb-40 sm:pb-4">
              <h1 className="p-2 sm:text-4xl text-center font-bold text-2xl">
                Welcome {user.displayName}!
              </h1>
              <button
                type="button"
                class="text-white bg-blue-700 mt-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-8 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-200"
              >
                <a href={Store}>
                Check Store
                <svg
                  className="inline w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                </a>
              </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Login;

import React from "react";

function Footer() {
  return (
    <footer className="text-gray-600 body-font fixed inset-x-0 bottom-0 bg-slate-200"
    >
      <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
        <a
          className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-4xl "
          href="/"
        >
          <svg
            className="fill-current text-gray-800 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
          </svg>
          <span className="hover:tracking-widest duration-200">iTech</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2022 iTech — Fantastic Frontend
        </p>
      </div>
    </footer>
  );
}

export default Footer;

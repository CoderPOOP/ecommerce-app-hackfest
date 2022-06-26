import React from "react";

function About() {
  return (
    <>
      <div className="pt-[160px] px-7 lg:pl-[80px] mb-32">
        <div>
          <div>
            <span className="text-3xl sm:text-5xl font-bold">We are </span>
            <br />
            <span className="text-4xl sm:text-6xl font-bold text-purple-700">
              Fantastic Frontend
            </span>
            <p className="pt-[20px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In,
              architecto <br />
              perspiciatis debitis autem repellendus eius nam expedita, aliquid
              distinctio <br />
              molestiae temporibus, quidem voluptates rerum veniam saepe <br />
              laboriosam vel quas asperiores.
            </p>
            <button
              type="button"
              className="hover:transition-colors mt-[10px] text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              <span id="more-text">Learn More</span>
            </button>
          </div>
        </div>
      </div>
      <hr />
      <h1 className="font-bold text-3xl sm:text-5xl text-center mt-32 text-purple-700">Fantastic Frontend</h1>
      <div className="mb-40 sm:flex sm:flex-row space-x-16 justify-center mt-10">
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 inline">
          <div className="flex justify-end px-4 pt-4"></div>
          <div className="flex flex-col items-center pb-10 p-12">
            <img
              className="mb-3 sm:w-48 sm:h-48 rounded-full shadow-lg w-28 h-28"
              src="https://cdn.discordapp.com/attachments/981951424130846730/982915089629872128/img.jpg"
              alt="Arjun"
            />
            <h5 className="mb-1 text-xl sm:text-3xl font-medium text-gray-900 dark:text-white">
              Arjun Prakash
            </h5>
            <span className="text-xl text-yellow-500">
              Leader
            </span>
            <span className="text-lg text-slate-900 dark:text-gray-400">
              Full-Stack Developer
            </span>
          </div>
        </div>
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 inline">
          <div className="flex justify-end px-4 pt-4"></div>
          <div className="flex flex-col items-center pb-10 p-12">
            <img
              className="mb-3 sm:w-48 sm:h-48 rounded-full shadow-lg w-28 h-28"
              src="https://miro.medium.com/max/1187/1*0FqDC0_r1f5xFz3IywLYRA.jpeg"
              alt="Agrim"
            />
            <h5 className="mb-1 text-xl sm:text-3xl font-medium text-gray-900 dark:text-white">
              Agrim Singh
            </h5>
            <span className="text-lg text-slate-900 dark:text-gray-400">
              HTML Developer, Designer
            </span>
          </div>
        </div>
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 inline">
          <div className="flex justify-end px-4 pt-4"></div>
          <div className="flex flex-col items-center pb-10 p-12">
            <img
              className="mb-3 sm:w-48 sm:h-48 rounded-full shadow-lg w-28 h-28"
              src="https://images.weserv.nl/?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa-%2FAOh14Gj9hbkf0_hf44wvnA6iSpz1sIClhi5qX-Ws6XHWwA&w=256&q=75"
              alt="Pratyush"
            />
            <h5 className="mb-1 text-xl sm:text-3xl font-medium text-gray-900 dark:text-white">
              Pratyush Yadav
            </h5>
            <span className="text-lg text-slate-900 dark:text-gray-400">
              Designer, HTML Developer
            </span>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default About;

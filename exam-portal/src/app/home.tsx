"use client";

import React from "react";

const HomePage = () => {
  const sections = [
    {
      heading: "History",
      description: "Dive into historical events and test your knowledge.",
      buttonText: "Solve Questions",
    },
    // {
    //   heading: "English",
    //   description: "Improve your grammar, vocabulary, and comprehension.",
    //   buttonText: "Start Exam",
    // },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 p-4 content-center h-full">
      {sections.map((section, index) => (
        <div
          key={index}
          className="border rounded-lg shadow-md p-4 flex flex-col mx-auto justify-center text-center md:min-w-[500px] md:min-h-[200px] bg-slate-300"
        >
          <h2 className="text-xl font-bold mb-2 dark:text-[#333]">
            {section.heading}
          </h2>
          <p className="text-gray-600 mb-4">{section.description}</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
            onClick={() =>
              (window.location.href = `/${section.heading.toLowerCase()}`)
            }
          >
            {section.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
};

export default HomePage;

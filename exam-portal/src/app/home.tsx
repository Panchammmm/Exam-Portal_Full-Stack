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
    <div className="grid grid-cols-1 gap-4 p-4 content-center h-full bg-neutral-900 rounded-lg">
      {sections.map((section, index) => (
        <div
          key={index}
          className="border rounded-lg shadow-lg p-8 flex flex-col mx-auto justify-center text-center md:min-w-[500px] md:min-h-[200px] bg-neutral-300"
        >
          <h2 className="text-xl font-bold mb-2 dark:text-[#333]">
            {section.heading}
          </h2>
          <p className="text-gray-600 mb-4">{section.description}</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded cursor-pointer transition duration-200 ease-in-out shadow-md shadow-blue-500/50 hover:shadow-lg hover:shadow-blue-500/50"
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

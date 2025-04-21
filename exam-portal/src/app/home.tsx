import React from 'react';

const HomePage = () => {
    const sections = [
        {
            heading: 'Mathematics',
            description: 'Test your skills in algebra, geometry, and calculus.',
            buttonText: 'Start Exam',
        },
        {
            heading: 'Science',
            description: 'Challenge yourself with physics, chemistry, and biology.',
            buttonText: 'Start Exam',
        },
        {
            heading: 'History',
            description: 'Dive into historical events and test your knowledge.',
            buttonText: 'Start Exam',
        },
        {
            heading: 'English',
            description: 'Improve your grammar, vocabulary, and comprehension.',
            buttonText: 'Start Exam',
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {sections.map((section, index) => (
                <div
                    key={index}
                    className="border rounded-lg shadow-md p-4 flex flex-col items-center text-center"
                >
                    <h2 className="text-xl font-bold mb-2">{section.heading}</h2>
                    <p className="text-gray-600 mb-4">{section.description}</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        {section.buttonText}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default HomePage;
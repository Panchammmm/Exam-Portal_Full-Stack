import React from 'react';

const DashboardPage = () => {
    const examRecords = [
        { id: 1, examName: 'Math Test', date: '2023-10-01', time: '13:30', score: 85 },
        { id: 2, examName: 'Science Quiz', date: '2023-09-25', time: '03:30', score: 90 },
        { id: 3, examName: 'History Exam', date: '2023-09-20', time: '09:30', score: 78 },
    ];

    return (
        <div className="dashboard bg-neutral-900 rounded-lg h-full p-14">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 text-gray-600 px-4 py-2">ID</th>
                        <th className="border border-gray-300 text-gray-600 px-4 py-2">Exam Name</th>
                        <th className="border border-gray-300 text-gray-600 px-4 py-2">Date</th>
                        <th className="border border-gray-300 text-gray-600 px-4 py-2">Time</th>
                        <th className="border border-gray-300 text-gray-600 px-4 py-2">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {examRecords.map((record) => (
                        <tr key={record.id} className="text-center">
                            <td className="border border-gray-300 px-4 py-2">{record.id}</td>
                            <td className="border border-gray-300 px-4 py-2">{record.examName}</td>
                            <td className="border border-gray-300 px-4 py-2">{record.date}</td>
                            <td className="border border-gray-300 px-4 py-2">{record.time}</td>
                            <td className="border border-gray-300 px-4 py-2">{record.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DashboardPage;
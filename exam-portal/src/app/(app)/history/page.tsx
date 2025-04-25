"use client";
import { useRouter } from "next/navigation";

// This component displays the exam instructions and a button to start the exam.
export function ExamInstructions() {
  const router = useRouter();

  const handleStartExam = () => {
    router.push("/history/exam");
  };

  return (
    <div className="h-full my-auto mx-auto p-10 pl-14 bg-neutral-300 rounded-md shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Exam Instructions</h1>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Read all questions carefully before answering.</li>
        <li>The exam duration is 20 minutes.</li>
        <li>Do not refresh the page during the exam.</li>
        <li>Ensure a stable internet connection.</li>
        <li>Once submitted, you cannot change your answers.</li>
      </ul>
      <button
        onClick={handleStartExam}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-sm mx-auto cursor-pointer transition duration-200 ease-in-out shadow-md shadow-blue-500/50 hover:shadow-lg hover:shadow-blue-500/50"
      >
        Start Exam
      </button>
    </div>
  );
}

export default function StartHistoryExam() {
  return <ExamInstructions />;
}

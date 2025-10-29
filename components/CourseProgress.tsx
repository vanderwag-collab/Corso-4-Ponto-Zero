
import React from 'react';

interface CourseProgressProps {
  progress: number;
}

const CourseProgress: React.FC<CourseProgressProps> = ({ progress }) => {
  const progressPercentage = Math.round(progress);

  return (
    <div className="my-6 p-4 bg-gray-800 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold text-gray-200">Seu Progresso</h2>
        <span className="text-lg font-bold text-blue-400">{progressPercentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-4">
        <div
          className="bg-gradient-to-r from-blue-500 to-teal-400 h-4 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default CourseProgress;

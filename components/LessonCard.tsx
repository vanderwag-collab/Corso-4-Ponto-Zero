import React from 'react';
import { Lesson } from '../types';

interface LessonCardProps {
  lesson: Lesson;
  isListened: boolean;
  onListen: (lessonId: number) => void;
  isLocked: boolean;
}

const CheckCircleIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const DownloadIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);


const LessonCard: React.FC<LessonCardProps> = ({ lesson, isListened, onListen, isLocked }) => {
  const handleAudioEnded = () => {
    onListen(lesson.id);
  };

  return (
    <div className={`
      bg-gray-800 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/20
      ${isListened ? 'border-2 border-green-500/50' : 'border-2 border-gray-700'}
      ${isLocked ? 'opacity-50 pointer-events-none' : ''}
    `}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-100">{lesson.title}</h3>
          {isListened && <CheckCircleIcon className="w-6 h-6 text-green-400" />}
        </div>

        <div className="my-4">
          {lesson.audioSrc ? (
            <audio
                controls
                controlsList="nodownload"
                onEnded={handleAudioEnded}
                className="w-full"
                src={lesson.audioSrc}
            >
                Seu navegador não suporta o elemento de áudio.
            </audio>
          ) : (
            <div className="w-full h-[54px] bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-400 text-sm font-medium">Áudio indisponível</p>
            </div>
          )}
        </div>

        <a
          href={isLocked ? '#' : lesson.pdfSrc}
          download={!isLocked}
          className={`
            w-full flex items-center justify-center space-x-2 text-center bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg
            transition-colors duration-300
            ${isLocked ? 'cursor-not-allowed bg-gray-600' : 'hover:bg-blue-700'}
          `}
        >
          <DownloadIcon className="w-5 h-5"/>
          <span>Baixar PDF</span>
        </a>
      </div>
    </div>
  );
};

export default LessonCard;

import React, { useState, useEffect, useCallback } from 'react';
import { Lesson } from './types';
import { LESSONS } from './constants';
import Header from './components/Header';
import Banner from './components/Banner';
import LessonCard from './components/LessonCard';
import CourseProgress from './components/CourseProgress';

const App: React.FC = () => {
  const [listenedLessons, setListenedLessons] = useState<Set<number>>(() => {
    try {
      const item = window.localStorage.getItem('listenedLessons');
      return item ? new Set(JSON.parse(item)) : new Set();
    } catch (error) {
      console.error("Error reading from localStorage", error);
      return new Set();
    }
  });

  const [isPaid] = useState<boolean>(false); // Set to true to enable locked state (future feature)

  useEffect(() => {
    try {
      window.localStorage.setItem('listenedLessons', JSON.stringify(Array.from(listenedLessons)));
    } catch (error) {
      console.error("Error writing to localStorage", error);
    }
  }, [listenedLessons]);

  const handleLessonListened = useCallback((lessonId: number) => {
    setListenedLessons(prev => {
      const newSet = new Set(prev);
      newSet.add(lessonId);
      return newSet;
    });
  }, []);

  const progress = (listenedLessons.size / LESSONS.length) * 100;

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        {!isPaid && <Banner />}
        <CourseProgress progress={progress} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
          {LESSONS.map((lesson: Lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              isListened={listenedLessons.has(lesson.id)}
              onListen={handleLessonListened}
              isLocked={isPaid} // For now, nothing is locked
            />
          ))}
        </div>
      </main>
      <footer className="text-center p-6 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Curso 4 Ponto Zero. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;

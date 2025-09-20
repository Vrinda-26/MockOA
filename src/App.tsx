import React from 'react';
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import QuizPage from './components/QuizPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'topics' | 'quiz'>('topics');
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null);

  const handleTopicClick = (topicNumber: number) => {
    setSelectedTopic(topicNumber);
    setCurrentPage('quiz');
  };

  const handleBackToTopics = () => {
    setCurrentPage('topics');
    setSelectedTopic(null);
  };

  if (currentPage === 'quiz' && selectedTopic) {
    return <QuizPage topicNumber={selectedTopic} onBack={handleBackToTopics} />;
  }

  return (
    <div className="min-h-screen bg-slate-800" style={{ backgroundColor: '#2B3544' }}>
      <div className="max-w-md mx-auto bg-slate-800 min-h-screen" style={{ backgroundColor: '#2B3544' }}>
        {/* Header with back button */}
        <div className="px-6 py-6">
          <button className="flex items-center gap-2 px-4 py-2 border-2 border-red-500 rounded-lg text-white bg-slate-900 hover:bg-slate-800 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">back</span>
          </button>
          
          {/* QA Title and Subtitle */}
          <div className="mt-6 mb-8 text-center">
            <h1 className="text-white text-3xl font-semibold mb-3">QA</h1>
            <p className="text-gray-300 text-sm leading-relaxed px-2">
              The following are the topics from which you can practice for Online Assessments.
            </p>
          </div>
        </div>

        {/* Topic Cards Container */}
        <div className="px-6 space-y-4">
          {/* Topic 1 Card */}
          <div 
            className="bg-slate-900 border-2 border-red-500 rounded-2xl p-8 hover:bg-slate-800 transition-colors cursor-pointer"
            onClick={() => handleTopicClick(1)}
          >
            <h2 className="text-white text-lg font-medium text-center">TOPIC 1</h2>
          </div>

          {/* Topic 2 Card */}
          <div 
            className="bg-slate-900 border-2 border-red-500 rounded-2xl p-8 hover:bg-slate-800 transition-colors cursor-pointer"
            onClick={() => handleTopicClick(2)}
          >
            <h2 className="text-white text-lg font-medium text-center">TOPIC 2</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
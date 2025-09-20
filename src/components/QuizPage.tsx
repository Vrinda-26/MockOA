import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import { quizData } from '../data/quizData';
import { Question } from '../types/quiz';

interface QuizPageProps {
  topicNumber: number;
  onBack: () => void;
}

interface FlashMessage {
  type: 'correct' | 'incorrect';
  message: string;
}

const QuizPage: React.FC<QuizPageProps> = ({ topicNumber, onBack }) => {
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [flashMessage, setFlashMessage] = useState<FlashMessage | null>(null);
  
  const quiz = quizData[topicNumber];
  
  useEffect(() => {
    if (flashMessage) {
      const timer = setTimeout(() => {
        setFlashMessage(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [flashMessage]);

  const handleQuestionClick = (questionId: number) => {
    setExpandedQuestion(expandedQuestion === questionId ? null : questionId);
  };

  const handleAnswerClick = (questionId: number, answerIndex: number) => {
    const question = quiz.questions.find(q => q.id === questionId);
    if (!question) return;

    setSelectedAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
    
    if (answerIndex === question.correctAnswer) {
      setFlashMessage({
        type: 'correct',
        message: 'Correct! Well done! 🎉'
      });
    } else {
      setFlashMessage({
        type: 'incorrect',
        message: `Incorrect. The correct answer is: ${question.options[question.correctAnswer]}`
      });
    }
  };

  if (!quiz) {
    return (
      <div className="min-h-screen bg-slate-800 flex items-center justify-center" style={{ backgroundColor: '#2B3544' }}>
        <div className="text-white text-center">
          <h2 className="text-xl font-semibold mb-2">Quiz not found</h2>
          <button 
            onClick={onBack}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-800" style={{ backgroundColor: '#2B3544' }}>
      <div className="max-w-md mx-auto bg-slate-800 min-h-screen" style={{ backgroundColor: '#2B3544' }}>
        {/* Flash Message */}
        {flashMessage && (
          <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 ${
            flashMessage.type === 'correct' 
              ? 'bg-green-600 text-white' 
              : 'bg-red-600 text-white'
          }`}>
            {flashMessage.type === 'correct' ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <XCircle className="w-5 h-5" />
            )}
            <span className="text-sm font-medium">{flashMessage.message}</span>
          </div>
        )}

        {/* Header */}
        <div className="px-6 py-6">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 border-2 border-red-500 rounded-lg text-white bg-slate-900 hover:bg-slate-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">back</span>
          </button>
          
          {/* Title */}
          <div className="mt-6 mb-8 text-center">
            <h1 className="text-white text-2xl font-semibold mb-2">
              Topic {topicNumber} - Mock OA
            </h1>
            <p className="text-gray-300 text-sm">
              Click on any question to expand and see the options
            </p>
          </div>
        </div>

        {/* Questions Container */}
        <div className="px-6 space-y-4 pb-8">
          {quiz.questions.map((question: Question) => (
            <div key={question.id} className={`bg-slate-900 border-2 rounded-2xl overflow-hidden ${
              selectedAnswers[question.id] !== undefined && selectedAnswers[question.id] === question.correctAnswer
                ? 'border-green-500'
                : 'border-red-500'
            }`}>
              {/* Question Header */}
              <div 
                className="p-6 cursor-pointer hover:bg-slate-800 transition-colors"
                onClick={() => handleQuestionClick(question.id)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-sm font-medium pr-4">
                    Q{question.id}. {question.question}
                  </h3>
                  <div className={`w-2 h-2 rounded-full transition-transform duration-200 ${
                    expandedQuestion === question.id ? 'rotate-180' : ''
                  }`}>
                    <div className="w-full h-full bg-red-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Options (Expandable) */}
              {expandedQuestion === question.id && (
                <div className="px-6 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
                  {question.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerClick(question.id, index)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                        selectedAnswers[question.id] === index
                          ? selectedAnswers[question.id] === question.correctAnswer
                            ? 'border-green-500 bg-green-900/20 text-green-300'
                            : 'border-red-500 bg-red-900/20 text-red-300'
                          : 'border-gray-600 bg-slate-800 text-gray-300 hover:border-gray-500 hover:bg-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-medium">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="text-sm">{option}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
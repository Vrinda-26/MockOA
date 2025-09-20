export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizData {
  topicNumber: number;
  questions: Question[];
}
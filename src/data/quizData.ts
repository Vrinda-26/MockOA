import { QuizData } from '../types/quiz';

export const quizData: Record<number, QuizData> = {
  1: {
    topicNumber: 1,
    questions: [
      {
        id: 1,
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which data structure uses LIFO principle?",
        options: ["Queue", "Stack", "Array", "Linked List"],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What is the worst-case time complexity of quicksort?",
        options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
        correctAnswer: 1
      },
      {
        id: 4,
        question: "Which sorting algorithm is stable?",
        options: ["Quick Sort", "Heap Sort", "Merge Sort", "Selection Sort"],
        correctAnswer: 2
      },
      {
        id: 5,
        question: "What is the space complexity of merge sort?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correctAnswer: 2
      },
      {
        id: 6,
        question: "Which data structure is used for BFS traversal?",
        options: ["Stack", "Queue", "Priority Queue", "Deque"],
        correctAnswer: 1
      },
      {
        id: 7,
        question: "What is the time complexity of inserting at the beginning of a linked list?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
        correctAnswer: 2
      },
      {
        id: 8,
        question: "Which algorithm is used to find shortest path in unweighted graph?",
        options: ["Dijkstra", "BFS", "DFS", "Bellman-Ford"],
        correctAnswer: 1
      },
      {
        id: 9,
        question: "What is the maximum number of nodes in a binary tree of height h?",
        options: ["2^h", "2^h - 1", "2^(h+1) - 1", "2^(h-1)"],
        correctAnswer: 2
      },
      {
        id: 10,
        question: "Which data structure is used in recursion?",
        options: ["Queue", "Stack", "Array", "Hash Table"],
        correctAnswer: 1
      }
    ]
  },
  2: {
    topicNumber: 2,
    questions: [
      {
        id: 1,
        question: "What does SQL stand for?",
        options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "System Query Language"],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "Which HTTP method is used to update data?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "What is the default port for HTTPS?",
        options: ["80", "443", "8080", "3000"],
        correctAnswer: 1
      },
      {
        id: 4,
        question: "Which of the following is a NoSQL database?",
        options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
        correctAnswer: 2
      },
      {
        id: 5,
        question: "What does API stand for?",
        options: ["Application Programming Interface", "Advanced Programming Interface", "Application Process Interface", "Automated Programming Interface"],
        correctAnswer: 0
      },
      {
        id: 6,
        question: "Which status code indicates a successful HTTP request?",
        options: ["404", "500", "200", "301"],
        correctAnswer: 2
      },
      {
        id: 7,
        question: "What is the purpose of CSS?",
        options: ["Database management", "Styling web pages", "Server-side logic", "Data validation"],
        correctAnswer: 1
      },
      {
        id: 8,
        question: "Which of the following is a JavaScript framework?",
        options: ["Django", "Laravel", "React", "Spring"],
        correctAnswer: 2
      },
      {
        id: 9,
        question: "What does MVC stand for?",
        options: ["Model View Controller", "Multiple View Container", "Main View Component", "Master View Control"],
        correctAnswer: 0
      },
      {
        id: 10,
        question: "Which protocol is used for secure communication over the internet?",
        options: ["HTTP", "FTP", "HTTPS", "SMTP"],
        correctAnswer: 2
      }
    ]
  }
};
type QuizData = {
  question: string;
  answer: string;
  id: number;
}[];

const formData: QuizData = [
  {
    question: "Who?",
    answer: "Mark",
    id: 0,
  },
  {
    question: "What?",
    answer: "is coding",
    id: 1,
  },
  {
    question: "When?",
    answer: "today",
    id: 2,
  },
  {
    question: "Where?",
    answer: "on his computer",
    id: 3,
  },
];

export default formData;

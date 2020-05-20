type QuizData = {
  question: string;
  answer: string;
  id: number;
}[];

const formData: QuizData = [
  {
    question: "Who?",
    answer: "name",
    id: 0,
  },
  {
    question: "What?",
    answer: "activity",
    id: 1,
  },
  {
    question: "When?",
    answer: "time",
    id: 2,
  },
  {
    question: "Where?",
    answer: "location",
    id: 3,
  },
];

export default formData;

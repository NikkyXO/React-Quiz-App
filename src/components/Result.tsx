interface QuestionType {
  question: string;
  correctAnswer: string;
}

interface ResultProps {
  questions: QuestionType[];
  selectedAnswers: { [key: number]: string };
}

const Result = ({ questions, selectedAnswers }: ResultProps) => {
  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        score++;
      }     
    });
    return score;
  };

  const score = calculateScore();
  const totalQuestions = questions.length;

  return <div className="flex flex-col align-middle justify-center gap-10 mt-10">
    <h2 className="text-2xl font-serif border-l-2 w-1/2 mx-auto h-35 text-center p-5 bg-orange-400 text-white"> Quiz Completed!</h2>
    <h2 className="font-bold text-4xl mb-8 text-amber-950">You scored {score} out of {totalQuestions}</h2>
  </div>;
};

export default Result;

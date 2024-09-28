import { useState } from "react";
import Result from "./Result";
import Question from "./Question";


interface QuestionType {
    question: string;
    options: string[];
    correctAnswer: string;
}

interface QuizProps {
    questions: QuestionType[];
}

function Quiz({ questions}: QuizProps) {
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});
    const [ showResult, setShowResult] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleSelectionCheck = (answer: string) => {
        console.log({answer});
        if(answer) {
            setHasError(false);
        } else {
            setHasError(true);
        }
        console.log({hasError});
    }



    // keeping  answers selected for each questions
    const handleSelectAnswer = (answer: string) => {
        console.log({ answer });
        console.log({ selectedAnswers });
        handleSelectionCheck(answer);
        setSelectedAnswers((prev) => ({ ...prev, [currentQuestionIdx]: answer }));
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIdx((prev) => prev + 1);
    };

    const handlePrevQuestion = () => {
        setCurrentQuestionIdx((prev) => prev - 1);
    };

    const handleQuizCompletion = () => {
        setShowResult(true);
    }

    const totalQuestions = questions.length;

    return (
        <div className="container">
            {showResult ? (
                <Result  questions={questions} selectedAnswers={selectedAnswers} />
            ): (
                <div> 
                    <Question
                        data={questions[currentQuestionIdx]}
                        selectedAnswer={selectedAnswers[currentQuestionIdx]}
                        onSelectAnswer={handleSelectAnswer}
                        hasError={hasError}

                    
                    />
                    <div className="flex gap-5 justify-center mt-5 mb-3">
                        {currentQuestionIdx > 0 && (
                            <button className="h-15 text-lg border rounded w-1/4 bg-red-400 text-black p-3 font-semibold" onClick={handlePrevQuestion}>
                                Previous
                            </button>
                        )}
                        {currentQuestionIdx < totalQuestions - 1 ? (
                            <button className="h-15 text-lg border rounded w-1/4 bg-lime-700 text-black p-3 font-semibold" onClick={handleNextQuestion}>
                                Next
                            </button>) : (
                            <button className="h-15 text-lg border rounded w-1/4 bg-green-400 text-black p-3 font-semibold" onClick={handleQuizCompletion}>
                                Finish Quiz
                            </button>
                        )}
                    </div>
                </div>
                    
            )}
        </div>
    )
    

}
export default Quiz;


interface QuestionProps {
    data: {
        question: string
        options: string[]
    };
    selectedAnswer: string
    onSelectAnswer: (answer: string) => void
    hasError: boolean
}

export const Question = ({data, selectedAnswer, onSelectAnswer, hasError}: QuestionProps) => {
    const {question, options} = data


  return (
    <div>
        <p className='text-2xl mt-8 mb-6'>{question}</p>
        <div className=''>
            {
                options.map((option, index) => (
                    <button
                    className={`w-full h-20 p-2 border rounded-md text-center text-2xl font-extrabold mt-2 font-semibold   ${
                        selectedAnswer === option
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-200 text-gray-800'
                      }`}
                        key={index}
                        onClick={() => onSelectAnswer(option)}
                    >
                        {option}
                    </button>
                ))
            }
        </div>

        {hasError && <p className='text-red-500 font-semibold mt-4'>Please select an answer</p>}
    </div>
  )
}

export default Question
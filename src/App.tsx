import './App.css'
import Quiz from './components/Quiz'
import questions from "../questions.json";

function App() {
  return (
    <div className='bg-slate-500 h-full flex flex-col justify-center align-middle'>
      <h1 className='text-3xl font-bold p-5 text-green-800'>React Quiz App</h1>
      <Quiz questions={questions}/>
    </div>
  )
}

export default App

'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const questions = [
  {
    id: 1,
    question: "At a party, do you:",
    answerA: { text: "Expend energy, enjoy groups", type: "E" },
    answerB: { text: "Conserve energy, enjoy one-on-one", type: "I" }
  },
  {
    id: 2,
    question: "Do you prefer to:",
    answerA: { text: "Interpret literally", type: "S" },
    answerB: { text: "Look for meaning and possibilities", type: "N" }
  },
  {
    id: 3,
    question: "When making decisions, are you more:",
    answerA: { text: "Logical, thinking, questioning", type: "T" },
    answerB: { text: "Empathetic, feeling, accommodating", type: "F" }
  },
  {
    id: 4,
    question: "How do you prefer to live?",
    answerA: { text: "Organized, orderly", type: "J" },
    answerB: { text: "Flexible, adaptable", type: "P" }
  },
  {
    id: 5,
    question: "How do you interact with others?",
    answerA: { text: "More outgoing, think out loud", type: "E" },
    answerB: { text: "More reserved, think to yourself", type: "I" }
  },
  {
    id: 6,
    question: "What is your natural approach?",
    answerA: { text: "Practical, realistic, experiential", type: "S" },
    answerB: { text: "Imaginative, innovative, theoretical", type: "N" }
  },
  {
    id: 7,
    question: "How do you communicate?",
    answerA: { text: "Candid, straight forward, frank", type: "T" },
    answerB: { text: "Tactful, kind, encouraging", type: "F" }
  },
  {
    id: 8,
    question: "How do you approach your day?",
    answerA: { text: "Plan, schedule", type: "J" },
    answerB: { text: "Unplanned, spontaneous", type: "P" }
  },
  {
    id: 9,
    question: "What kind of activities do you seek?",
    answerA: { text: "Many tasks, public activities, interaction with others", type: "E" },
    answerB: { text: "Private, solitary activities with quiet to concentrate", type: "I" }
  },
  {
    id: 10,
    question: "What do you prefer?",
    answerA: { text: "Standard, usual, conventional", type: "S" },
    answerB: { text: "Different, novel, unique", type: "N" }
  },
  {
    id: 11,
    question: "What is your nature?",
    answerA: { text: "Firm, tend to criticise, hold the line", type: "T" },
    answerB: { text: "Gentle, tend to appreciate, conciliate", type: "F" }
  },
  {
    id: 12,
    question: "How do you structure your life?",
    answerA: { text: "Regulated, structured", type: "J" },
    answerB: { text: "Easy going, \"live\" and \"let live\"", type: "P" }
  },
  {
    id: 13,
    question: "How do you present yourself?",
    answerA: { text: "External, communicative, express yourself", type: "E" },
    answerB: { text: "Internal, reticent, keep to yourself", type: "I" }
  },
  {
    id: 14,
    question: "What is your perspective?",
    answerA: { text: "Focus on here-and-now", type: "S" },
    answerB: { text: "Look to the future, global perspective, \"big picture\"", type: "N" }
  },
  {
    id: 15,
    question: "How do you approach truth?",
    answerA: { text: "Tough-minded, just", type: "T" },
    answerB: { text: "Tender-hearted, merciful", type: "F" }
  },
  {
    id: 16,
    question: "What is your lifestyle preference?",
    answerA: { text: "Preparation, plan ahead", type: "J" },
    answerB: { text: "Go with the flow, adapt as you go", type: "P" }
  },
  {
    id: 17,
    question: "Your natural tendency is to be:",
    answerA: { text: "Active, initiate", type: "E" },
    answerB: { text: "Reflective, deliberate", type: "I" }
  },
  {
    id: 18,
    question: "What interests you most?",
    answerA: { text: "Facts, things, \"what is\"", type: "S" },
    answerB: { text: "Ideas, dreams, \"what could be\", philosophical", type: "N" }
  },
  {
    id: 19,
    question: "How would you describe yourself?",
    answerA: { text: "Matter of fact, issue-oriented", type: "T" },
    answerB: { text: "Sensitive, people-oriented, compassionate", type: "F" }
  },
  {
    id: 20,
    question: "How do you like to operate?",
    answerA: { text: "Control, govern", type: "J" },
    answerB: { text: "Latitude, freedom", type: "P" }
  }
]

interface QuizState {
  currentQuestion: number
  answers: Record<number, string>
  result: string | null
}

export function MBTIQuiz() {
  const [state, setState] = useState<QuizState>({
    currentQuestion: 0,
    answers: {},
    result: null
  })

  const handleAnswer = (typeCode: string) => {
    const newAnswers = {
      ...state.answers,
      [state.currentQuestion]: typeCode
    }

    if (state.currentQuestion < questions.length - 1) {
      setState({
        ...state,
        currentQuestion: state.currentQuestion + 1,
        answers: newAnswers
      })
    } else {
      // Calculate result
      const result = calculateResult(newAnswers)
      setState({
        ...state,
        answers: newAnswers,
        result
      })
    }
  }

  const calculateResult = (answers: Record<number, string>) => {
    const counts: Record<string, number> = {
      E: 0, I: 0,
      S: 0, N: 0,
      T: 0, F: 0,
      J: 0, P: 0
    }

    Object.values(answers).forEach(type => {
      counts[type]++
    })

    return (
      (counts.E > counts.I ? 'E' : 'I') +
      (counts.S > counts.N ? 'S' : 'N') +
      (counts.T > counts.F ? 'T' : 'F') +
      (counts.J > counts.P ? 'J' : 'P')
    )
  }

  const handleRestart = () => {
    setState({
      currentQuestion: 0,
      answers: {},
      result: null
    })
  }

  if (state.result) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-12 px-4">
        <div className="bg-white border-4 border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-8 max-w-md w-full text-center">
          <h2 className="text-3xl font-bold mb-4">Your Personality Type</h2>
          <div className="text-6xl font-bold text-center mb-6 bg-gray-100 py-8 rounded-lg border-2 border-black">
            {state.result}
          </div>
          <p className="text-lg mb-8 text-gray-700">
            Discover the details of your unique personality type
          </p>
          <div className="flex flex-col gap-3">
            <Link href={`/personality/${state.result.toLowerCase()}`} className="w-full">
              <Button className="w-full bg-black text-white hover:bg-black/90 font-bold py-6 text-lg rounded-lg">
                View Your Type Details
              </Button>
            </Link>
            <Button 
              onClick={handleRestart}
              variant="outline"
              className="w-full font-bold py-6 text-lg rounded-lg border-2 border-black hover:bg-gray-100 bg-transparent"
            >
              Retake Quiz
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const progress = ((state.currentQuestion + 1) / questions.length) * 100
  const currentQ = questions[state.currentQuestion]

  return (
    <div className="w-full flex flex-col items-center justify-center py-12 px-4">
      <div className="bg-white border-4 border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-8 max-w-2xl w-full">
        <div className="mb-6">
          <div className="flex justify-between text-sm font-bold mb-2">
            <span>Question {state.currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 border-2 border-black">
            <div 
              className="bg-black h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-8">{currentQ.question}</h3>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleAnswer(currentQ.answerA.type)}
            className="text-left p-4 border-4 border-black rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg"
          >
            {currentQ.answerA.text}
          </button>
          <button
            onClick={() => handleAnswer(currentQ.answerB.type)}
            className="text-left p-4 border-4 border-black rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg"
          >
            {currentQ.answerB.text}
          </button>
        </div>
      </div>
    </div>
  )
}

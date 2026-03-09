import { useNavigate, useParams } from 'react-router-dom'
import examData from '../data/examData'

function PYQSelect() {
  const navigate = useNavigate()
  const { examId } = useParams()
  const exam = examData[examId]

  if (!exam) return null

  const handleYear = (year) => {
    const allQuestions = exam.subjects.reduce((acc, s) => acc.concat(s.questions), [])
    navigate('/test', {
      state: {
        questions: allQuestions,
        title: `${exam.name} — PYQ ${year}`,
        examId
      }
    })
  }

  const handleSubject = (subject) => {
    navigate('/test', {
      state: {
        questions: subject.questions,
        title: `${exam.name} — PYQ ${subject.name}`,
        examId
      }
    })
  }

  return (
    <div className="page-wrap">
      <div className="container-app text-center py-20">
        <h1 className="text-4xl font-bold text-t1 font-serif mb-2">
          Previous Year Questions
        </h1>
        <p className="text-t2 mb-8">Full UI coming Day 8</p>
        <div className="flex gap-3 justify-center flex-wrap mb-6">
          {exam.pyqYears.map(y => (
            <button
              key={y.year}
              className="btn btn-outline"
              onClick={() => handleYear(y.year)}
            >
              {y.year} →
            </button>
          ))}
        </div>
        <button
          className="btn btn-ghost"
          onClick={() => navigate(`/mode/${examId}`)}
        >
          ← Back
        </button>
      </div>
    </div>
  )
}

export default PYQSelect
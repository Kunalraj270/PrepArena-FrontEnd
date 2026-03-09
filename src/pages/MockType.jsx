import { useNavigate, useParams } from 'react-router-dom'
import examData from '../data/examData'

function MockType() {
  const navigate = useNavigate()
  const { examId } = useParams()
  const exam = examData[examId]

  if (!exam) return null

  const handleFullMock = () => {
    const allQuestions = exam.subjects.reduce((acc, s) => acc.concat(s.questions), [])
    navigate('/test', {
      state: {
        questions: allQuestions,
        title: `${exam.name} — Full Mock Test`,
        examId
      }
    })
  }

  const handleSubject = (subject) => {
    navigate('/test', {
      state: {
        questions: subject.questions,
        title: `${exam.name} — ${subject.name}`,
        examId
      }
    })
  }

  return (
    <div className="page-wrap">
      <div className="container-app text-center py-20">
        <h1 className="text-4xl font-bold text-t1 font-serif mb-2">
          Mock Test Type
        </h1>
        <p className="text-t2 mb-8">Full UI coming Day 7</p>
        <div className="flex gap-4 justify-center flex-wrap mb-6">
          <button className="btn btn-primary" onClick={handleFullMock}>
            Full Mock →
          </button>
        </div>
        <div className="flex flex-col gap-3 max-w-sm mx-auto">
          {exam.subjects.map(subject => (
            <button
              key={subject.key}
              className="btn btn-outline"
              onClick={() => handleSubject(subject)}
            >
              {subject.name} →
            </button>
          ))}
        </div>
        <button
          className="btn btn-ghost mt-6"
          onClick={() => navigate(`/mode/${examId}`)}
        >
          ← Back
        </button>
      </div>
    </div>
  )
}

export default MockType
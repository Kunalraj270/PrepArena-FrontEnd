import { useNavigate, useLocation } from 'react-router-dom'

function Result() {
  const navigate = useNavigate()
  const location = useLocation()
  const { title, examId, score, total } = location.state || {}

  if (!title) {
    return (
      <div className="page-wrap">
        <div className="container-app text-center py-20">
          <p className="text-danger font-bold mb-4">No result data!</p>
          <button
            className="btn btn-outline"
            onClick={() => navigate('/exams')}
          >
            ← Go to Exams
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="page-wrap">
      <div className="container-app text-center py-20">
        <h1 className="text-4xl font-bold text-t1 font-serif mb-2">
          Result
        </h1>
        <p className="text-t2 mb-2">{title}</p>
        <p className="text-5xl font-extrabold text-primary my-6">
          {score}/{total}
        </p>
        <p className="text-t3 text-sm mb-8">Full result UI coming Day 11</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/mock/${examId}`)}
          >
            Retake Test
          </button>
          <button
            className="btn btn-outline"
            onClick={() => navigate('/exams')}
          >
            Try Another Exam
          </button>
          <button
            className="btn btn-ghost"
            onClick={() => navigate('/')}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default Result
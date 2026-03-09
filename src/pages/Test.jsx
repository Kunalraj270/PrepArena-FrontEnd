import { useNavigate, useLocation } from 'react-router-dom'

function Test() {
  const navigate = useNavigate()
  const location = useLocation()
  const { questions, title, examId } = location.state || {}

  // If someone navigates to /test directly without data
  if (!questions) {
    return (
      <div className="page-wrap">
        <div className="container-app text-center py-20">
          <p className="text-danger font-bold mb-4">No test data found!</p>
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
        <h1 className="text-2xl font-bold text-t1 mb-2">{title}</h1>
        <p className="text-t2 mb-2">{questions.length} Questions</p>
        <p className="text-t3 text-sm mb-8">Full test UI coming Day 9</p>
        <button
          className="btn btn-primary"
          onClick={() => navigate('/result', {
            state: { title, examId, score: 7, total: questions.length }
          })}
        >
          Skip to Result (test) →
        </button>
      </div>
    </div>
  )
}

export default Test
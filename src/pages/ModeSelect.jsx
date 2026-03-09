import { useNavigate, useParams } from 'react-router-dom'
import examData from '../data/examData'
import Breadcrumb from '../components/Breadcrumb'

function ModeSelect() {
  const navigate = useNavigate()
  const { examId } = useParams()
  const exam = examData[examId]

  // Guard — invalid exam
  if (!exam) {
    return (
      <div className="page-wrap">
        <div className="container-app text-center py-20">
          <p className="text-danger font-bold text-lg mb-4">
            Exam not found!
          </p>
          <button
            className="btn btn-outline"
            onClick={() => navigate('/exams')}
          >
            ← Back to Exams
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="page-wrap">
      <div className="container-app">

        {/* ── Breadcrumb ── */}
        <Breadcrumb items={[
          { label: 'Exams', path: '/exams' },
          { label: exam.name },
        ]} />

        {/* ── Page Header ── */}
        <div className="text-center mb-10">
          <h2 className="font-serif font-semibold text-[28px] sm:text-[32px]
                         text-t1 mb-2 tracking-tight">
            {exam.name}
          </h2>
          <p className="text-t2 text-sm sm:text-base">
            What would you like to practice today?
          </p>
        </div>

        {/* ── Mode Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2
                        gap-5 max-w-[680px] mx-auto">

          {/* Mock Test Card */}
          <ModeCard
            icon="📋"
            iconBg="bg-primary-light"
            title="Mock Test"
            description="Timed tests that simulate the real exam experience"
            chips={['⏱ Timed', '📊 Score & Rank', '🎯 Full / Sectional']}
            chipStyle="bg-primary-light text-primary border-primary-mid"
            ctaText="Choose Mock Test"
            ctaStyle="btn-primary"
            onClick={() => navigate(`/mock/${examId}`)}
          />

          {/* PYQ Card */}
          <ModeCard
            icon="📚"
            iconBg="bg-success-light"
            title="Previous Year Questions"
            description="Practice actual questions from past exam papers"
            chips={['📅 Year-wise', '📖 Subject-wise', '🔁 Practice mode']}
            chipStyle="bg-success-light text-success border-success/20"
            ctaText="Browse PYQ"
            ctaStyle="btn-outline"
            onClick={() => navigate(`/pyq/${examId}`)}
          />

        </div>

        {/* ── Back Button ── */}
        <div className="text-center mt-8">
          <button
            className="btn btn-ghost"
            onClick={() => navigate('/exams')}
          >
            ← Back to Exams
          </button>
        </div>

      </div>
    </div>
  )
}

/* ── Mode Card ── */
function ModeCard({
  icon, iconBg, title, description,
  chips, chipStyle, ctaText, ctaStyle, onClick
}) {
  return (
    <div className="card p-8 flex flex-col gap-5
                    hover:shadow-card-md hover:border-primary-soft
                    transition-all duration-200">

      {/* Icon */}
      <div className={`w-16 h-16 rounded-[18px] ${iconBg}
                       flex items-center justify-center text-3xl`}>
        {icon}
      </div>

      {/* Text */}
      <div>
        <h3 className="text-[19px] font-extrabold text-t1 mb-2">
          {title}
        </h3>
        <p className="text-sm text-t2 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Chips */}
      <div className="flex flex-wrap gap-2">
        {chips.map((chip, i) => (
          <span
            key={i}
            className={`text-[11px] font-bold px-3 py-1
                        rounded-full border ${chipStyle}`}
          >
            {chip}
          </span>
        ))}
      </div>

      {/* CTA Button */}
      <button
        className={`btn ${ctaStyle} btn-full mt-auto`}
        onClick={onClick}
      >
        {ctaText}
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M13 7l5 5m0 0l-5 5m5-5H6"/>
        </svg>
      </button>

    </div>
  )
}

export default ModeSelect
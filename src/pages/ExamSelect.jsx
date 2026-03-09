import { useNavigate } from 'react-router-dom'
import examData from '../data/examData'

function ExamSelect() {
  const navigate = useNavigate()

  return (
    <div className="page-wrap">
      <div className="container-app">

        {/* ── Page Header ── */}
        <div className="text-center mb-10">
          <h2 className="font-serif font-semibold text-[28px] sm:text-[32px]
                         text-t1 mb-2 tracking-tight">
            Choose Your Exam
          </h2>
          <p className="text-t2 text-sm sm:text-base">
            Select an exam to start your practice session
          </p>
        </div>

        {/* ── Exam Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2
                        gap-5 max-w-[640px] mx-auto">
          {Object.values(examData).map(exam => (
            <ExamCard
              key={exam.id}
              exam={exam}
              onClick={() => navigate(`/mode/${exam.id}`)}
            />
          ))}
        </div>

        {/* ── Footer ── */}
        <div className="text-center mt-10">
          <p className="text-xs text-t3 mb-4 font-medium">
            Click a card to begin selecting test type
          </p>
          <button
            className="btn btn-ghost"
            onClick={() => navigate('/')}
          >
            ← Back to Home
          </button>
        </div>

      </div>
    </div>
  )
}

/* ── Exam Card ── */
function ExamCard({ exam, onClick }) {
  const isGreen = exam.badgeColor === 'green'

  return (
    <div
      className="card card-hover cursor-pointer p-8 group
                 relative overflow-hidden"
      onClick={onClick}
    >
      {/* Top accent line — slides in on hover */}
      <div className="absolute top-0 left-0 right-0 h-[3px]
                      bg-primary scale-x-0 group-hover:scale-x-100
                      origin-left transition-transform duration-200"/>

      {/* Badge */}
      <span className={`badge mb-4 ${isGreen ? 'badge-green' : 'badge-blue'}`}>
        {exam.badge}
      </span>

      {/* Icon */}
      <div className="w-14 h-14 rounded-[16px] bg-primary-light mb-4
                      flex items-center justify-center
                      group-hover:bg-primary transition-all duration-200">
        {exam.id === 'bpsc' ? (
          <BookIcon className="text-primary group-hover:text-white
                               transition-colors duration-200" />
        ) : (
          <BankIcon className="text-primary group-hover:text-white
                               transition-colors duration-200" />
        )}
      </div>

      {/* Name */}
      <div className="text-xl font-extrabold text-t1 mb-1">
        {exam.name}
      </div>

      {/* Full name */}
      <div className="text-sm text-t2 mb-5 font-medium leading-snug">
        {exam.fullName}
      </div>

      {/* Meta chips */}
      <div className="flex flex-wrap gap-2 mb-6">
        <MetaChip icon="📝" label={`${exam.subjects.reduce((a,s) => a + s.questions.length, 0)} Questions`} />
        <MetaChip icon="⏱" label="10 min" />
        <MetaChip icon="🎯" label="MCQ" />
      </div>

      {/* Start button */}
      <button className="btn btn-primary btn-full">
        Start Practice
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M13 7l5 5m0 0l-5 5m5-5H6"/>
        </svg>
      </button>

    </div>
  )
}

/* ── Meta Chip ── */
function MetaChip({ icon, label }) {
  return (
    <span className="flex items-center gap-1 text-xs text-t3
                     font-semibold">
      <span>{icon}</span>
      <span>{label}</span>
    </span>
  )
}

/* ── Icons ── */
function BookIcon({ className }) {
  return (
    <svg width="26" height="26" fill="none" viewBox="0 0 24 24"
      className={className} stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3
           .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6
           2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18
           3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0
           00-6 2.292m0-14.25v14.25"/>
    </svg>
  )
}

function BankIcon({ className }) {
  return (
    <svg width="26" height="26" fill="none" viewBox="0 0 24 24"
      className={className} stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75
           6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75
           3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621
           0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75
           3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0
           3h.008v.008h-.008v-.008z"/>
    </svg>
  )
}

export default ExamSelect
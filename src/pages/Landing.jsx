import { useNavigate } from 'react-router-dom'
import examData from '../data/examData'

function Landing({ onRegister }) {
  const navigate = useNavigate()

  return (
    <div className="min-h-[calc(100vh-58px)] flex flex-col animate-rise">

      {/* ── Hero Section ── */}
      <section className="flex-1 flex items-center justify-center
                          px-4 pt-16 pb-10 sm:pt-20 sm:pb-14">
        <div className="text-center max-w-[560px] mx-auto">

          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 bg-primary-light
                          text-primary text-[11px] font-bold px-4 py-[5px]
                          rounded-full mb-6 border border-primary-mid
                          uppercase tracking-wide">
            <span className="w-1.5 h-1.5 bg-primary rounded-full"/>
            Free exam preparation platform
          </div>

          {/* Title */}
          <h1 className="font-serif font-semibold leading-[1.2]
                         text-[32px] sm:text-[40px] lg:text-[46px]
                         text-t1 mb-4 tracking-tight">
            Practice Mock Tests
            <br />
            and{' '}
            <em className="text-primary not-italic">PYQ</em>
            {' '}in one place
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-t2 leading-relaxed
                        mb-9 font-normal max-w-[420px] mx-auto">
            Prepare smarter for government and competitive exams.
            Timed tests, previous year questions, instant results —
            no signup needed.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-3
                          flex-wrap mb-12">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => navigate('/exams')}
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
              Start Practice
            </button>
            <button
              className="btn btn-outline btn-lg"
              onClick={onRegister}
            >
              Create Free Account
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8
                          pt-8 border-t border-border flex-wrap">
            <StatItem number="2" label="Exams" />
            <StatItem number="200+" label="Questions" />
            <StatItem number="Free" label="Always" />
          </div>

        </div>
      </section>

      {/* ── Exam Preview Section ── */}
      <section className="bg-white border-t border-border
                          px-4 py-10 sm:py-14">
        <div className="max-w-[900px] mx-auto">

          <p className="section-label">Available Exams</p>

          {/* Exam Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4
                          max-w-[540px] mx-auto mb-8">
            {Object.values(examData).map(exam => (
              <ExamPreviewCard
                key={exam.id}
                exam={exam}
                onClick={() => navigate(`/mode/${exam.id}`)}
              />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <button
              className="btn btn-primary"
              onClick={() => navigate('/exams')}
            >
              View All Exams
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </button>
          </div>

        </div>
      </section>

    </div>
  )
}

/* ── Stat Item ── */
function StatItem({ number, label }) {
  return (
    <div className="text-center">
      <div className="text-[22px] font-extrabold text-t1 tracking-tight">
        {number}
      </div>
      <div className="text-xs text-t3 font-medium mt-0.5">
        {label}
      </div>
    </div>
  )
}

/* ── Exam Preview Card ── */
function ExamPreviewCard({ exam, onClick }) {
  return (
    <div
      className="bg-bg border border-border rounded-2xl p-5
                 text-center cursor-pointer group
                 transition-all duration-200
                 hover:border-primary-soft hover:bg-primary-light
                 hover:-translate-y-0.5 hover:shadow-card-md"
      onClick={onClick}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-[13px] bg-primary-mid mx-auto mb-3
                      flex items-center justify-center
                      group-hover:bg-primary transition-all duration-200">
        {exam.id === 'bpsc' ? (
          <BookIcon />
        ) : (
          <BankIcon />
        )}
      </div>

      <div className="text-base font-extrabold text-t1 mb-1">
        {exam.name}
      </div>
      <div className="text-xs text-t3 font-medium">
        {exam.fullName}
      </div>
    </div>
  )
}

/* ── Icons ── */
function BookIcon() {
  return (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"
      className="text-primary group-hover:text-white transition-colors"
      stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987
           8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0
           016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018
           18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/>
    </svg>
  )
}

function BankIcon() {
  return (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"
      className="text-primary group-hover:text-white transition-colors"
      stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75
           3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75
           21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504
           1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008
           v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"/>
    </svg>
  )
}

export default Landing
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar({ onSignIn, onRegister, currentUser, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* ── Main Navbar ── */}
      <nav className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container-app">
          <div className="flex items-center justify-between h-[58px]">

            {/* ── Logo ── */}
            <Link
              to="/"
              className="flex items-center gap-2 no-underline"
              onClick={() => setMenuOpen(false)}
            >
              <div className="w-8 h-8 rounded-[9px] bg-primary flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="2" width="7" height="7" rx="2" fill="white" fillOpacity="0.9"/>
                  <rect x="11" y="2" width="7" height="7" rx="2" fill="white" fillOpacity="0.6"/>
                  <rect x="2" y="11" width="7" height="7" rx="2" fill="white" fillOpacity="0.6"/>
                  <rect x="11" y="11" width="7" height="7" rx="2" fill="white" fillOpacity="0.9"/>
                </svg>
              </div>
              <span className="text-[17px] font-extrabold text-t1 tracking-tight">
                Prep<span className="text-primary">Arena</span>
              </span>
            </Link>

            {/* ── Right side ── */}
            <div className="flex items-center gap-2">

              {/* Beta badge — always visible */}
              <span className="text-[11px] font-bold text-primary bg-primary-light
                               px-3 py-1 rounded-full border border-primary-mid
                               hidden xs:inline-flex">
                MVP Beta
              </span>

              {/* ── Desktop auth buttons ── */}
              {!currentUser ? (
                <div className="hidden md:flex items-center gap-2">
                  <button
                    className="btn btn-outline btn-sm"
                    onClick={onSignIn}
                  >
                    Sign In
                  </button>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={onRegister}
                  >
                    Register
                  </button>
                </div>
              ) : (
                /* ── User pill (desktop) ── */
                <div className="hidden md:flex">
                  <UserPill user={currentUser} onLogout={onLogout} />
                </div>
              )}

              {/* ── Hamburger button (mobile only) ── */}
              <button
                className="md:hidden flex flex-col justify-center items-center
                           w-9 h-9 rounded-xl border border-border bg-bg
                           gap-[5px] transition-all duration-200
                           hover:border-primary-soft hover:bg-primary-light"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {/* Animated hamburger lines */}
                <span className={`block w-[18px] h-[2px] bg-t2 rounded-full
                                  transition-all duration-300 origin-center
                                  ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
                />
                <span className={`block w-[18px] h-[2px] bg-t2 rounded-full
                                  transition-all duration-300
                                  ${menuOpen ? 'opacity-0 scale-x-0' : ''}`}
                />
                <span className={`block w-[18px] h-[2px] bg-t2 rounded-full
                                  transition-all duration-300 origin-center
                                  ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
                />
              </button>

            </div>
          </div>
        </div>
      </nav>

      {/* ── Mobile Dropdown Menu ── */}
      <div className={`md:hidden bg-white border-b border-border
                       overflow-hidden transition-all duration-300 ease-in-out
                       ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container-app py-4 flex flex-col gap-3">

          {!currentUser ? (
            <>
              <button
                className="btn btn-outline btn-full"
                onClick={() => { onSignIn?.(); setMenuOpen(false) }}
              >
                Sign In
              </button>
              <button
                className="btn btn-primary btn-full"
                onClick={() => { onRegister?.(); setMenuOpen(false) }}
              >
                Register Free
              </button>
            </>
          ) : (
            <>
              <div className="flex items-center gap-3 p-3 bg-bg rounded-xl">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-indigo-500
                                flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {currentUser.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="text-sm font-bold text-t1">{currentUser.name}</div>
                  <div className="text-xs text-t3">{currentUser.email}</div>
                </div>
              </div>
              <button
                className="btn btn-outline btn-full text-danger border-danger/30
                           hover:bg-danger-light hover:border-danger"
                onClick={() => { onLogout?.(); setMenuOpen(false) }}
              >
                Sign Out
              </button>
            </>
          )}

          {/* Mobile nav links */}
          <div className="border-t border-border pt-3 flex flex-col gap-1">
            <Link
              to="/"
              className="text-sm font-600 text-t2 px-3 py-2 rounded-lg
                         hover:bg-bg hover:text-primary no-underline transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              🏠 Home
            </Link>
            <Link
              to="/exams"
              className="text-sm font-600 text-t2 px-3 py-2 rounded-lg
                         hover:bg-bg hover:text-primary no-underline transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              📝 Exams
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}

/* ── User Pill Component ── */
function UserPill({ user, onLogout }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 bg-bg border border-border
                   rounded-full pl-1.5 pr-4 py-1 cursor-pointer
                   transition-all duration-200
                   hover:border-primary-soft hover:bg-primary-light"
        onClick={() => setOpen(!open)}
      >
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-indigo-500
                        flex items-center justify-center text-white font-bold text-xs">
          {user.name.charAt(0).toUpperCase()}
        </div>
        <span className="text-[13px] font-bold text-t1">
          {user.name.split(' ')[0]}
        </span>
        <svg
          width="12" height="12" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2.5"
          className={`text-t3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white
                        border border-border rounded-[14px] shadow-card-lg
                        overflow-hidden animate-pop z-50">
          <div className="px-4 py-3 border-b border-border">
            <div className="text-sm font-bold text-t1">{user.name}</div>
            <div className="text-xs text-t3 truncate">{user.email}</div>
          </div>
          <button
            className="w-full text-left px-4 py-3 text-sm font-600
                       text-danger hover:bg-danger-light transition-colors"
            onClick={() => { onLogout?.(); setOpen(false) }}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  )
}

export default Navbar
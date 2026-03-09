import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import ExamSelect from './pages/ExamSelect'
import ModeSelect from './pages/ModeSelect'
import MockType from './pages/MockType'
import PYQSelect from './pages/PYQSelect'
import Test from './pages/Test'
import Result from './pages/Result'

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const handleSignIn = () => {
    setCurrentUser({ name: 'Rahul Kumar', email: 'rahul@gmail.com' })
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg">

        <Navbar
          currentUser={currentUser}
          onSignIn={handleSignIn}
          onRegister={handleSignIn}
          onLogout={() => setCurrentUser(null)}
        />

        <Routes>
          <Route path="/"
            element={<Landing onRegister={handleSignIn} />}
          />
          <Route path="/exams"        element={<ExamSelect />} />
          <Route path="/mode/:examId" element={<ModeSelect />} />
          <Route path="/mock/:examId" element={<MockType />} />
          <Route path="/pyq/:examId"  element={<PYQSelect />} />
          <Route path="/test"         element={<Test />} />
          <Route path="/result"       element={<Result />} />
          <Route path="*" element={
            <div className="page-wrap">
              <div className="container-app text-center py-20">
                <h1 className="text-6xl font-extrabold text-primary mb-4">
                  404
                </h1>
                <p className="text-t2 mb-6">Page not found</p>
                <a href="/" className="btn btn-primary">Go Home</a>
              </div>
            </div>
          }/>
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App
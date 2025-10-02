import React from "react";
import "./App.css";
import Header from "./Components/Navbar/Header";
import Hero from "./Components/Hero/Hero";
import Features from "./Components/Features/Features";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import JoinWaitlist from "./Components/JoinWaitlist/JoinWaitlist";
import Blog from "./Components/Blog/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Feature Detail Components
import AITutor from "./Components/Features/Details/AI-Tutor/AITutor";
import StudyReports from "./Components/Features/Details/Study-Report/StudyReports";
import StudyTimeTracker from "./Components/Features/Details/Study-Time-Tracker/StudyTimeTracker";
import PeerComparison from "./Components/Features/Details/Peer-Comparison/PeerComparison";
import AIExamSystem from "./Components/Features/Details/AI-Exam-System/AIExamSystem";
import AIRevisionSuggestions from "./Components/Features/Details/AI-Revision-Suggestion/AIRevisionSuggestions";
import AIMemoryBooster from "./Components/Features/Details/AI-Memory-Booster/AIMemoryBooster";
import AIDoubtSolver from "./Components/Features/Details/AI-Doubt-Solver/AIDoubtSolver";
import RoutineManagement from "./Components/Features/Details/Routine-Management/RoutineManagement";
import AINotesMaker from "./Components/Features/Details/AI-Notes-Maker/AINotesMaker";

// Home Page Component
const HomePage = () => (
  <>
    <Hero />
    <Features />
    <About />
    <Contact />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header /> <HomePage />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header /> <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
              <Header /> <Blog />
              <Footer />
            </>
          }
        />
        <Route
          path="/features"
          element={
            <>
              <Header /> <Features />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Header /> <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/join-waitlist"
          element={
            <>
              <JoinWaitlist />
            </>
          }
        />

        {/* Feature Detail Routes */}
        <Route
          path="/features/ai-tutor"
          element={
            <>
              <Header />
              <AITutor />
              <Footer />
            </>
          }
        />
        <Route
          path="/features/comprehensive-study-reports"
          element={
            <>
              <Header />
              <StudyReports />
              <Footer />
            </>
          }
        />
        <Route
          path="/features/study-time-tracker"
          element={
            <>
              <Header />
              <StudyTimeTracker />
              <Footer />
            </>
          }
        />
        <Route
          path="/features/peer-comparison-tool"
          element={
            <>
              <Header />
              <PeerComparison />
              <Footer />
            </>
          }
        />
        <Route
          path="/features/ai-exam-system"
          element={
            <>
              <Header />
              <AIExamSystem />
              <Footer />
            </>
          }
        />
        <Route
          path="/features/ai-revision-suggestions"
          element={
            <>
              <Header />
              <AIRevisionSuggestions />
              <Footer />
            </>
          }
        />
        <Route
          path="/features/ai-memory-booster"
          element={
            <>
              <Header />
              <AIMemoryBooster />
              <Footer />
            </>
          }
        />
        <Route
          path="/features/ai-doubt-solver"
          element={
            <>
              <Header />
              <AIDoubtSolver />
              <Footer />
            </>
          }
        />
        <Route
          path="/features/routine-management"
          element={
            <>
              <Header />
              <RoutineManagement />
              <Footer />
            </>
          }
        />
        <Route
          path="/features/ai-notes-maker"
          element={
            <>
              <Header />
              <AINotesMaker />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

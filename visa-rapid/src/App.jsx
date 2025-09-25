import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ForIndividuals from './components/ForIndividuals'
import ForBusiness from './components/ForBusiness'
import StepByStep from './components/StepByStep'
import WhyChooseUs from './components/WhyChooseUs'
import ScheduleMeeting from './components/ScheduleMeeting'
import Footer from './components/Footer'
import ContactPage from './components/ContactPage'
import StatsSection from './components/StatsSection'
import FloatingButtons from './components/FloatingButtons'
import EntrepreneurVisa from './pages/EntrepreneurVisa'
import StartupVisa from './pages/StartupVisa'
import JobSeekerVisa from './pages/JobSeekerVisa'
import Residency from './pages/Residency'
import Blogs from './pages/Blogs'
import LuxembourgBlog from './pages/LuxembourgBlog'
import LgbtqBlog from './pages/LgbtqBlog'
import PassportPowerBlog from './pages/PassportPowerBlog'

// Home page component
const HomePage = () => (
  <>
    <HeroSection />
    <ForIndividuals />
    <ForBusiness />
    <WhyChooseUs />
    <StepByStep />
    <StatsSection />
    <ScheduleMeeting />
  </>
)

const App = () => {
  return (
    <Router>
      <div className="min-h-screen w-full bg-white overflow-x-hidden">
        <Navbar />
        <main className="w-full overflow-x-hidden">
          <Routes>
            <Route path="/" element={
              <>
                <HomePage />
                <Footer />
              </>
            } />
            <Route path="/contact" element={
              <>
                <ContactPage />
                <Footer />
              </>
            } />
            <Route path="/entrepreneur-visa" element={
              <>
                <EntrepreneurVisa />
                <Footer />
              </>
            } />
            <Route path="/startup-visa" element={
              <>
                <StartupVisa />
                <Footer />
              </>
            } />
            <Route path="/job-seeker-visa" element={
              <>
                <JobSeekerVisa />
                <Footer />
              </>
            } />
            <Route path="/residency" element={
              <>
                <Residency />
                <Footer />
              </>
            } />
            <Route path="/blogs" element={
              <>
                <Blogs />
                <Footer />
              </>
            } />
            <Route path="/blogs/luxembourg-golden-visa" element={
              <>
                <LuxembourgBlog />
                <Footer />
              </>
            } />
            <Route path="/blogs/Lgbtq-golden-visa" element={
              <>
                <LgbtqBlog />
                <Footer />
              </>
            } />
            <Route path="/blogs/Portugal-passport-power" element={
              <>
                <PassportPowerBlog />
                <Footer />
              </>
            } />
          </Routes>
        </main>
        <FloatingButtons />
      </div>
    </Router>
  )
}

export default App
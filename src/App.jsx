import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Cursor from './components/Cursor'
import Home from './pages/Home'
import WorkPage from './pages/WorkPage'
import ProjectPage from './pages/ProjectPage'

import { PageLoadWipe } from './components/PanelWipe'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0 } },
  exit: { opacity: 0, transition: { delay: 0.8, duration: 0 } }, // wait for wipe to cover
}

function PageWrapper({ children }) {
  return (
    <>
      <PageLoadWipe />
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Cursor />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/work" element={<PageWrapper><WorkPage /></PageWrapper>} />
          <Route path="/work/:slug" element={<PageWrapper><ProjectPage /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

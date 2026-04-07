import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Cursor from './components/Cursor'
import Home from './pages/Home'
import WorkPage from './pages/WorkPage'
import ProjectPage from './pages/ProjectPage'

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}

function PageWrapper({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <>
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

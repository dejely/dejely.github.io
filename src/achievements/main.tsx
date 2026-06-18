import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import AchievementsApp from './AchievementsApp'

window.addEventListener('pageshow', () => {
  document.documentElement.classList.remove('page-leaving')
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AchievementsApp />
  </StrictMode>,
)

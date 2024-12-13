import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ListCharacters from './pages/listCharacters.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ListCharacters/>
  </StrictMode>,
)

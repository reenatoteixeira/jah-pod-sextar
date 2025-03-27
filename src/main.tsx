import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './themes/themes.css'
import './assets/style/global.css'
import App from './App.tsx'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </StrictMode>,
)

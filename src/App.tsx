import Title from './components/Title.tsx'
import Answer from './components/Answer.tsx'
import Footer from './components/Footer.tsx'
import { useState, useEffect } from 'react'
import { getResponse } from './utils/getResponse.ts'
import celebrateWeekend from './utils/celebrateWeekend.ts'
import ThemeSelect from './components/ThemeSelect.tsx'
import { AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import LanguageSelect from './components/LanguageSelect.tsx'

function App() {
  const { t, i18n } = useTranslation()
  const [response, setResponse] = useState('Pensando...')
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : null,
  )
  const [language, setLanguage] = useState(i18n.language)

  function handleThemeChange(theme: string) {
    if (theme != '') localStorage.setItem('theme', theme)
    setTheme(theme)
  }

  function handleLanguageChange(language: string) {
    i18n.changeLanguage(language).then(() => setLanguage(language))
  }

  useEffect(() => {
    setResponse(getResponse(t))
  }, [t])

  useEffect(() => {
    document.documentElement.lang = i18n.language
    document.title = t('question')
    console.log(document.documentElement.lang)
  }, [i18n.language, t])

  useEffect(() => {
    document.documentElement.className = ''
    const selectedTheme = localStorage.getItem('theme')

    if (selectedTheme && selectedTheme !== 'system') {
      document.documentElement.classList.add(selectedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('theme--dark')
    } else {
      document.documentElement.classList.add('theme--light')
    }
  }, [theme])

  window.addEventListener('load', () => {
    celebrateWeekend()
  })

  return (
    <>
      <main
        className={
          'h-full flex flex-col justify-center items-center text-primary'
        }
      >
        <div className='fixed space-x-5 top-0 right-0 p-4 text-primary opacity-40'>
          <ThemeSelect selectedTheme={theme} onChange={handleThemeChange} />
          <LanguageSelect
            selectedLang={language}
            onChange={handleLanguageChange}
          />
        </div>

        <div
          className={
            'w-full flex flex-col justify-center items-center gap-4 text-center container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
          }
        >
          <Title title={t('question')} />

          <AnimatePresence>
            <Answer answer={response} />
          </AnimatePresence>
        </div>
      </main>

      <Footer
        text={t('footer')}
        link={'@reenatoteixeira'}
        target={'https://github.com/reenatoteixeira/jah-pod-sextar'}
      />
    </>
  )
}

export default App

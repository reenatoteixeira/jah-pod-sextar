import Title from "./components/Title.tsx";
import Answer from "./components/Answer.tsx";
import Footer from "./components/Footer.tsx";
import {useState, useEffect} from "react";
import {getResponse} from "./utils/getResponse.ts";
import celebrateWeekend from "./utils/celebrateWeekend.ts";
import ThemeSelect from "./components/ThemeSelect.tsx";

function App() {
  const [response, setResponse] = useState('Pensando...');
  const [theme, setTheme] = useState('');

  function handleThemeChange(theme: string) {
    if (theme != '' && theme != 'system') localStorage.setItem("theme", theme);
    if (theme === 'system') localStorage.removeItem("theme");
    setTheme(theme);
  }

  useEffect(() => {
    setResponse(getResponse());
  }, [])

  useEffect(() => {
    document.documentElement.className = '';
    const selectedTheme = localStorage.getItem("theme");

    if (selectedTheme) {
      document.documentElement.classList.add(selectedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add('theme--dark');
    } else {
      document.documentElement.classList.add('theme--light');
    }
  }, [theme]);

  window.addEventListener("load", () => {
    celebrateWeekend()
  })

  return (
    <>
      <main className={'h-full flex flex-col justify-center items-center text-primary'}>
        <div className='fixed top-0 right-0 p-4 text-primary opacity-40'>
          <ThemeSelect onChange={handleThemeChange}/>
        </div>

        <div
          className={'w-full flex flex-col justify-center items-center gap-4 text-center container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}>
          <Title title={'Jah pod sextar?'}/>
          <Answer answer={response}/>
        </div>
      </main>

      <Footer link={'@reenatoteixeira'} target={'https://github.com/reenatoteixeira/jah-pod-sextar'}/>
    </>
  )
}

export default App

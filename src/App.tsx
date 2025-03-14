import Title from "./components/Title.tsx";
import Answer from "./components/Answer.tsx";
import Footer from "./components/Footer.tsx";
import {useState, useEffect} from "react";
import {getResponse} from "./utils/getResponse.ts";

function App() {
  const [response, setResponse] = useState('Pensando...');

  useEffect(() => {
    setResponse(getResponse());
  }, [])

  return (
    <>
      <main className={'h-full flex justify-center items-center'}>
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

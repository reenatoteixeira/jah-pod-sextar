import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function App() {

  return (
    <>
      <main
        className="h-screen flex flex-col gap-8 justify-center items-center container max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center w-full">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo}
                 className="h-40 p-6 transition duration-300 will-change-[filter] hover:drop-shadow-[0_0_2em_#646cffaa]"
                 alt="Vite logo"/>
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo}
                 className="h-40 p-6 transition duration-300 will-change-[filter] animate-[spin_20s_linear_infinite] hover:drop-shadow-[0_0_2em_#61dafbaa]"
                 alt="React logo"/>
          </a>
        </div>
        <h1 className="text-5xl font-bold">JahPodSextar is migrating!</h1>

        <div className="p-12 text-lg">
          <p>Soon, this will be a React + Vite / Typescript app!</p>
        </div>
      </main>
    </>
  )
}

export default App

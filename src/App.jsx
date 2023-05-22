import './App.css'
import { useMockLoading, usePreloader } from './hooks'

function App() {
 
  const [loading, startLoading] = useMockLoading()
  const preloader = usePreloader(loading)

  return (
    <>
      <button onClick={startLoading}>Start loading</button>
      {preloader()}
    </>
  )
}

export default App

import Home from "./pages/Home"
import { CorrectionProvider } from "./context/CorrectionContext"

function App() {
  
  return (
    <>
      <CorrectionProvider>
          <Home />
      </CorrectionProvider>
    </>
  )
}

export default App

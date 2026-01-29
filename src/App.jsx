import Home from "./pages/Home"
import { CorrectionProvider } from "./context/CorrectionContext"
import { ThemeProvider } from "./context/ThemeContext"

function App() {
  
  return (
    <>
      <ThemeProvider>
        <CorrectionProvider>
          <Home />
        </CorrectionProvider>
      </ThemeProvider>
      
    </>
  )
}

export default App

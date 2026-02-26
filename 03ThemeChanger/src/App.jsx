import { useState } from 'react'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <>
    <div className={`container ${isDark ? "dark" : "light"}`}>
      <h1>Theme Switcher</h1>
      <button onClick={() => setIsDark(!isDark)}>{isDark ? "Light Mode" : "Dark Mode"}</button>
      </div>
    </>
  )
}

export default App

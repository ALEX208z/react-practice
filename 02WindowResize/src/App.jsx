import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    // Handler function
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup function (IMPORTANT!)
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty array = run only on mount

 
  return (
    <>
       <p>Width: <strong>{windowSize.width}px</strong></p>
        <p>Height: <strong>{windowSize.height}px</strong></p>
    </>
  )
}

export default App

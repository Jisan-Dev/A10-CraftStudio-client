import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }
  }, [theme]);
  return (
    <>
      <h1 className="text-primary dark:text-red-500 dark:text-center dark:bg-slate-800 h-20">Vite + React</h1>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="btn btn-primary">
        change theme
      </button>
    </>
  );
}

export default App;

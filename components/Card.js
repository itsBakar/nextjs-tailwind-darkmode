import { useState, useEffect } from 'react';
const Card = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div>
      <div className="p-4 mx-auto mt-6 w-2/3 bg-slate-200 shadow-lg rounded dark:bg-slate-500">
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl dark:text-slate-200">Muhammad Abubakar</h1>
            <p className="text-sm text-slate-700 dark:text-slate-900">
              Software Engineer
            </p>
          </div>
          <div>
            <button
              onClick={handleTheme}
              className="py-2 px-4 rounded shadow-lg text-slate-200 bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:shadow-xl"
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>
        </div>
        <p className="mt-2 text-base text-slate-900 dark:text-slate-200">
          A Software Engineer is an IT professional who designs, develops and
          maintains computer software at a company. They use their creativity
          and technical skills and apply the principles of software engineering
          to help solve new and ongoing problems for an organization.
        </p>
      </div>
    </div>
  );
};

export default Card;

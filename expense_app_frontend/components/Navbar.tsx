import React from 'react';

interface NavbarProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const themes = [
  { name: 'light', label: 'Light' },
  { name: 'dark', label: 'Dark' },
  { name: 'indigo', label: 'Indigo' },
  { name: 'emerald', label: 'Emerald' },
  { name: 'amber', label: 'Amber' },
  { name: 'rose', label: 'Rose' },
];

const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {
  const bgColor = {
    light: 'bg-gray-100 text-black',
    dark: 'bg-gray-800 text-white',
    indigo: 'bg-indigo-600 text-white',
    emerald: 'bg-emerald-600 text-white',
    amber: 'bg-amber-600 text-white',
    rose: 'bg-rose-600 text-white',
  }[theme] || 'bg-gray-100 text-black';

  return (
    <nav className={`${bgColor} p-4`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">My App</div>
        <div>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="px-3 py-1 rounded border border-gray-300 text-black"
          >
            {themes.map((t) => (
              <option key={t.name} value={t.name}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

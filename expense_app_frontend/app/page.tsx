'use client';

import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';
import {Button, ButtonGroup} from "@heroui/button";
const themes = [
  { name: 'light', label: 'Light', color: '#f3f4f6' },
  { name: 'dark', label: 'Dark', color: '#111827' },
  { name: 'indigo', label: 'Indigo', color: '#4f46e5' },
  { name: 'emerald', label: 'Emerald', color: '#10b981' },
  { name: 'amber', label: 'Amber', color: '#f59e0b' },
  { name: 'rose', label: 'Rose', color: '#f43f5e' },
];

export default function Home() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = ''; // reset all classes
    if (theme !== 'light') {
      document.body.classList.add(`theme-${theme}`);
    }
  }, [theme]);

  return (
    <div className="flex flex-col items-center justify-center gap-6  ">
      <nav className="w-full ">
      <Navbar theme={theme} setTheme={setTheme} />
      </nav>
      <h1 className="text-3xl font-bold text-accent">🎨 Multi-Color Theme Switcher</h1>

      

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
        <div className="p-4 rounded shadow" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
          <h2 className="text-xl font-semibold">Primary Box</h2>
          <p>This box uses the <strong>primary</strong> theme color.</p>
        </div>
        <div className="p-4 rounded shadow" style={{ backgroundColor: 'var(--secondary)', color: 'white' }}>
          <h2 className="text-xl font-semibold">Secondary Box</h2>
          <p>This box uses the <strong>secondary</strong> theme color.</p>
          
        </div>
      </div>

      <p className="text-accent mt-4">Current theme: <strong>{theme}</strong></p>

      <div className="flex gap-3 mt-2">
        {themes.map((t) => (
          <button
            key={t.name}
            onClick={() => setTheme(t.name)}
            className="flex items-center gap-2 px-3 py-1 rounded border border-gray-300 hover:shadow transition"
          >
            <span
              className="inline-block w-4 h-4 rounded-full"
              style={{ backgroundColor: t.color }}
            ></span>
            {t.label}
          </button>
          
        ))}
      </div>
    </div>
  );
}

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 z-50"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
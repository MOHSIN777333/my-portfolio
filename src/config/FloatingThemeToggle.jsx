import { useEffect, useState } from "react";

function FloatingThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  const [visible, setVisible] = useState(false);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  // Show button after scroll
  useEffect(() => {
    const handleScroll = () => {
      setVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`
        fixed bottom-6 right-6 z-50
        w-14 h-14
        flex items-center justify-center
        rounded-full
        shadow-lg
        transition-all duration-300
        ${visible ? "opacity-100 scale-100" : ""}
        bg-indigo-600 text-white
        hover:bg-indigo-700

        dark:bg-emerald-600 dark:text-white
        dark:hover:bg-emerald-700
      `}
    >
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
}

export default FloatingThemeToggle;

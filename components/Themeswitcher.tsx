// components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 border rounded"
        >
            Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </button>
    );
}
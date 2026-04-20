"use client";
import { useTheme } from "next-themes";

const ThemeToggol = () => {
      const { theme, setTheme } = useTheme();

    return (
        <div>
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle {theme === "dark" ? "Light" : "Dark"} Mode
    </button>

        </div>
    );
};

export default ThemeToggol;
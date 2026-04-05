"use client";

import { useEffect, useState } from "react";
import { ThemeContext, type Theme } from "../context/theme-context";

export default function ThemeProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [theme, setTheme] = useState<Theme>("light");

	useEffect(() => {
		const stored = localStorage.getItem("theme") as Theme | null;
		if (stored) setTheme(stored);
	}, []);

	useEffect(() => {
		const root = document.documentElement;
		root.classList.toggle("dark", theme === "dark");
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

	return (
		<ThemeContext.Provider value={{ theme, toggle }}>
			{children}
		</ThemeContext.Provider>
	);
}

"use client";

import { usePathname } from "next/navigation";
import { createContext, Suspense, useContext, useLayoutEffect, useState } from "react";

interface DeckContextValue {
	isDeckCompleted: boolean;
	setIsDeckCompleted: (value: boolean) => void;
}

const DeckContext = createContext<DeckContextValue | null>(null);

function DeckInit({ setIsDeckCompleted }: { setIsDeckCompleted: (value: boolean) => void }) {
	const pathname = usePathname();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useLayoutEffect(() => { setIsDeckCompleted(pathname !== "/"); }, []);
	return null;
}

// **SWITCH TO USING USE SESSION STORAGE INSTEAD OF CONTEXT**
export function DeckProvider({ children }: { children: React.ReactNode }) {
	const [isDeckCompleted, setIsDeckCompleted] = useState(false);
	return (
		<DeckContext.Provider value={{ isDeckCompleted, setIsDeckCompleted }}>
			<Suspense fallback={null}>
				<DeckInit setIsDeckCompleted={setIsDeckCompleted} />
			</Suspense>
			{children}
		</DeckContext.Provider>
	);
}

export function useDeck() {
	const ctx = useContext(DeckContext);
	if (!ctx) throw new Error("useDeck must be used within DeckProvider");
	return ctx;
}

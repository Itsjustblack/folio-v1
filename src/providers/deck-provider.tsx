"use client";

import { usePathname } from "next/navigation";
import {
	createContext,
	Suspense,
	useContext,
	useLayoutEffect,
	useState,
	type Dispatch,
	type SetStateAction,
} from "react";

type DeckContextValue = {
	isDeckCompleted: boolean;
	setIsDeckCompleted: Dispatch<SetStateAction<boolean>>;
};

const DeckContext = createContext<DeckContextValue | null>(null);

function DeckInit({
	setIsDeckCompleted,
}: Pick<DeckContextValue, "setIsDeckCompleted">) {
	const pathname = usePathname();
	useLayoutEffect(() => {
		setIsDeckCompleted(pathname !== "/");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return null;
}

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

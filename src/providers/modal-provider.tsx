"use client";

import { createContext, useContext, useState } from "react";

interface ModalData {
	src: string;
	alt?: string;
	layoutId: string;
}

interface ModalContextValue {
	modal: ModalData | null;
	openModal: (data: ModalData) => void;
	closeModal: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
	const [modal, setModal] = useState<ModalData | null>(null);

	const openModal = (data: ModalData) => setModal(data);
	const closeModal = () => setModal(null);

	return (
		<ModalContext.Provider value={{ modal, openModal, closeModal }}>
			{children}
		</ModalContext.Provider>
	);
}

export function useModal() {
	const ctx = useContext(ModalContext);
	if (!ctx) throw new Error("useModal must be used within ModalProvider");
	return ctx;
}

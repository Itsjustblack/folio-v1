import { createContext } from "react";

export interface AuthContextType {
	accessToken: string | null;
	isLoading: boolean;
	error: string | null;
}

export const AuthContext = createContext<AuthContextType | null>(null);

"use client";

import { DialRoot } from "dialkit";
import AuthProvider from "./auth-provider";
import ThemeProvider from "./theme-provider";
import TanstackQueryProvider from "./tanstack-query-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<TanstackQueryProvider>
			<AuthProvider>
				<ThemeProvider>
					{children}
					<DialRoot />
				</ThemeProvider>
			</AuthProvider>
		</TanstackQueryProvider>
	);
}

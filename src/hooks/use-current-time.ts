import { useState, useEffect } from "react";

export function useCurrentTime() {
	const [time, setTime] = useState<Date | null>(null);

	useEffect(() => {
		const id = setInterval(() => {
			setTime(new Date());
		}, 1000);

		// Immediate first tick without synchronous setState in effect body
		// const timeout = setTimeout(() => setTime(new Date()), 0);

		return () => {
			clearInterval(id);
			// clearTimeout(timeout);
		};
	}, []);

	return time;
}

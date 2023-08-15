export const calcFontSize = (wordLength: number): string => {
	const desktopSize = Math.round(900 / wordLength)
	const sizeLookup: Record<number, string> = {
		1: `min(500px, 70vw)`,
		2: `min(400px, 55vw)`,
		3: `min(${desktopSize}px, 40vw)`,
		4: `min(${desktopSize}px, 30vw)`,
		5: `min(${desktopSize}px, 25vw)`,
		6: `min(${desktopSize}px, 21vw)`,
		7: `min(${desktopSize}px, 16vw)`,
		8: `min(${desktopSize}px, 14vw)`,
	}
	return sizeLookup[wordLength] || "1rem"
}

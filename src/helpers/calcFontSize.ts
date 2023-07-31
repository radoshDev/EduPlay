export const calcFontSize = (wordLength: number): string => {
	const desktopSize = Math.round(1200 / wordLength)
	const sizeLookup: Record<number, string> = {
		1: `min(${desktopSize}px, 60vw)`,
		2: `min(${desktopSize}px, 45vw)`,
		3: `min(${desktopSize}px, 39vw)`,
		4: `min(${desktopSize}px, 30vw)`,
		5: `min(${desktopSize}px, 23vw)`,
		6: `min(${desktopSize}px, 19vw)`,
		7: `min(${desktopSize}px, 16vw)`,
		8: `min(${desktopSize}px, 14vw)`,
	}
	return sizeLookup[wordLength] || "1rem"
}

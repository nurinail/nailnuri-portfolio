import type { SystemConfig } from "@chakra-ui/react";

export const globalCss: SystemConfig["globalCss"] = {
	"#app": {
		minH: "100dvh",
	},
	html: {
		bg: "white",
		color: "gray.900",
		colorPalette: "brand",
		display: "flex",
		minHeight: "full",
		width: "full",
	},
	"html, body": {
		flexGrow: 1,
		fontFamily: 'var(--font-space-grotesk), sans-serif',
		fontFeatureSettings: "normal",
		fontSize: "text-md",
		fontWeight: "400",
		lineHeight: "text-md",
	},
};

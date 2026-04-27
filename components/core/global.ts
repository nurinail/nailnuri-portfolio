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
		fontFamily: '"Inter Variable", Inter, sans-serif !important',
		fontFeatureSettings: "normal",
		fontSize: "text-md",
		fontVariationSettings: '"wdth" 75',
		fontWeight: "400",
		lineHeight: "text-md",
	},
};

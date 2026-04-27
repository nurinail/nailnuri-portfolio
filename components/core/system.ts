import { createSystem, defaultConfig } from "@chakra-ui/react";
import omit from "lodash-es/omit";
import { themeConfig } from "./theme";

// omit button from the default config to avoid conflicts
const cleanConfig = omit(defaultConfig, [
	"theme.recipes.button",
	"theme.recipes.heading",
	"theme.textStyles",
	"theme.tokens.breakpoints",
	"theme.tokens.colors",
	"theme.tokens.fontSizes",
	"theme.tokens.fonts",
	"theme.tokens.fontWeights",
	"theme.tokens.lineHeights",
	"theme.tokens.radii",
	"theme.tokens.sizes",
	// "theme.tokens.spacing",
]);

// // biome-ignore lint/suspicious/noConsole: log
// console.log('Default Config:', defaultConfig)
// // biome-ignore lint/suspicious/noConsole: log
// console.log('Theme Config:', themeConfig)

export const system = createSystem(cleanConfig, themeConfig);

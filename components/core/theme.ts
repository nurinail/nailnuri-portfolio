import { defineConfig } from "@chakra-ui/react";
import { colors } from "./colors";
import { globalCss } from "./global";
// import { buttonRecipe, headingRecipe } from "./recipes";
import { breakpoints, radii, sizes, spacing } from "./sizes";
import {
	fontFamily,
	fontSizes,
	fontWeights,
	lineHeights,
	textStyles,
} from "./typography";
import { virtualColors } from "./virtualColors";

export const themeConfig = defineConfig({
	cssVarsPrefix: "iktex",
	globalCss,
	theme: {
		// recipes: { button: buttonRecipe, heading: headingRecipe },
		semanticTokens: {
			colors: {
				...virtualColors,
				brand: {
					contrast: { value: "{colors.brand.50}" },
					emphasized: { value: "{colors.brand.300}" },
					fg: { value: "{colors.brand.700}" },
					focusRing: { value: "{colors.brand.500}" },
					muted: { value: "{colors.brand.100}" },
					solid: { value: "{colors.brand.600}" },
					subtle: { value: "{colors.brand.50}" },
				},
			},
		},
		textStyles: textStyles,
		tokens: {
			breakpoints,
			colors,
			fontSizes,
			fonts: {
				body: { value: fontFamily },
				heading: { value: fontFamily },
			},
			fontWeights,
			lineHeights,
			radii,
			sizes,
			spacing,
		},
	},
});

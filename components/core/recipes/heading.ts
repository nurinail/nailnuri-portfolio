import { defineRecipe } from "@chakra-ui/react";

export const headingRecipe = defineRecipe({
	base: {
		fontFamily: "heading",
	},
	className: "iktex-heading",
	defaultVariants: {
		size: "md",
		weight: "semibold",
	},
	variants: {
		size: {
			"2xl": { textStyle: "display-2xl" },
			lg: { textStyle: "display-lg" },
			md: { textStyle: "display-md" },
			sm: { textStyle: "display-sm" },
			xl: { textStyle: "display-xl" },
			xs: { textStyle: "display-xs" },
		},
		weight: {
			bold: { fontWeight: "bold" },
			medium: { fontWeight: "medium" },
			regular: { fontWeight: "regular" },
			semibold: { fontWeight: "semibold" },
		},
	},
});

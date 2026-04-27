import { defineTextStyles } from "@chakra-ui/react";

export const fontFamily = '"Inter Variable", "Inter", sans-serif';

export const fontSizes = {
	"display-2xl": { description: "Font size is 4.5rem (72px)", value: "4.5rem" },
	"display-lg": { description: "Font size is 3rem (48px)", value: "3rem" },
	"display-md": {
		description: "Font size is 2.25rem (36px)",
		value: "2.25rem",
	},
	"display-sm": {
		description: "Font size is 1.875rem (30px)",
		value: "1.875rem",
	},
	"display-xl": {
		description: "Font size is 3.75rem (60px)",
		value: "3.75rem",
	},
	"display-xs": { description: "Font size is 1.5rem (24px)", value: "1.5rem" },
	"text-lg": { description: "Font size is 1.125rem (18px)", value: "1.125rem" },
	"text-md": { description: "Font size is 1rem (16px)", value: "1rem" },
	"text-sm": { description: "Font size is 0.875rem (14px)", value: "0.875rem" },
	"text-xl": { description: "Font size is 1.25rem (20px)", value: "1.25rem" },
	"text-xs": { description: "Font size is 0.75rem (12px)", value: "0.75rem" },
};

export const fontWeights = {
	bold: {
		description: "Font weight is 700",
		value: "700",
	},
	medium: {
		description: "Font weight is 500",
		value: "500",
	},
	regular: {
		description: "Font weight is 400",
		value: "400",
	},
	semibold: {
		description: "Font weight is 600",
		value: "600",
	},
};

export const lineHeights = {
	"display-2xl": {
		description: "Line height is 5.625rem (90px)",
		value: "5.625rem",
	},
	"display-lg": {
		description: "Line height is 3.75rem (60px)",
		value: "3.75rem",
	},
	"display-md": {
		description: "Line height is 2.75rem (44px)",
		value: "2.75rem",
	},
	"display-sm": {
		description: "Line height is 2.375rem (38px)",
		value: "2.375rem",
	},
	"display-xl": {
		description: "Line height is 4.5rem (72px)",
		value: "4.5rem",
	},
	"display-xs": { description: "Line height is 2rem (32px)", value: "2rem" },
	"text-lg": { description: "Line height is 1.75rem (28px)", value: "1.75rem" },
	"text-md": { description: "Line height is 1.5rem (24px)", value: "1.5rem" },
	"text-sm": { description: "Line height is 1.25rem (20px)", value: "1.25rem" },
	"text-xl": {
		description: "Line height is 1.875rem (30px)",
		value: "1.875rem",
	},
	"text-xs": {
		description: "Line height is 1.125rem (18px)",
		value: "1.125rem",
	},
};

export const letterSpacings = {
	"display-2xl": {
		description: "Letter spacing is -0.09rem (-1.44px)",
		value: "-0.09rem",
	},
	"display-lg": {
		description: "Letter spacing is -0.06rem (-0.96px)",
		value: "-0.06rem",
	},
	"display-md": {
		description: "Letter spacing is -0.045rem (-0.72px)",
		value: "-0.045rem",
	},
	"display-sm": { description: "Letter spacing is 0", value: "0" },
	"display-xl": {
		description: "Letter spacing is -0.075rem (-1.2px)",
		value: "-0.075rem",
	},
	"display-xs": { description: "Letter spacing is 0", value: "0" },
	"text-lg": { description: "Letter spacing is 0", value: "0" },
	"text-md": { description: "Letter spacing is 0", value: "0" },
	"text-sm": { description: "Letter spacing is 0", value: "0" },
	"text-xl": { description: "Letter spacing is 0", value: "0" },
	"text-xs": { description: "Letter spacing is 0", value: "0" },
};

export type HeadingVariants =
	| "display-2xl"
	| "display-xl"
	| "display-lg"
	| "display-md"
	| "display-sm"
	| "display-xs";

export type TextVariants =
	| "text-xl"
	| "text-lg"
	| "text-md"
	| "text-sm"
	| "text-xs";

export const textStyles = defineTextStyles({
	"display-2xl": {
		value: {
			fontFamily,
			fontSize: fontSizes["display-2xl"].value,
			fontWeight: fontWeights.medium.value,
			letterSpacing: letterSpacings["display-2xl"].value,
			lineHeight: lineHeights["display-2xl"].value,
		},
	},
	"display-lg": {
		value: {
			fontFamily,
			fontSize: fontSizes["display-lg"].value,
			fontWeight: fontWeights.medium.value,
			letterSpacing: letterSpacings["display-lg"].value,
			lineHeight: lineHeights["display-lg"].value,
		},
	},
	"display-md": {
		value: {
			fontFamily,
			fontSize: fontSizes["display-md"].value,
			fontWeight: fontWeights.medium.value,
			letterSpacing: letterSpacings["display-md"].value,
			lineHeight: lineHeights["display-md"].value,
		},
	},
	"display-sm": {
		value: {
			fontFamily,
			fontSize: fontSizes["display-sm"].value,
			fontWeight: fontWeights.medium.value,
			letterSpacing: letterSpacings["display-sm"].value,
			lineHeight: lineHeights["display-sm"].value,
		},
	},
	"display-xl": {
		value: {
			fontFamily,
			fontSize: fontSizes["display-xl"].value,
			fontWeight: fontWeights.medium.value,
			letterSpacing: letterSpacings["display-xl"].value,
			lineHeight: lineHeights["display-xl"].value,
		},
	},
	"display-xs": {
		value: {
			fontFamily,
			fontSize: fontSizes["display-xs"].value,
			fontWeight: fontWeights.medium.value,
			letterSpacing: letterSpacings["display-xs"].value,
			lineHeight: lineHeights["display-xs"].value,
		},
	},
	"text-lg": {
		value: {
			fontFamily,
			fontSize: fontSizes["text-lg"].value,
			fontWeight: fontWeights.medium.value,
			letterSpacing: letterSpacings["text-lg"].value,
			lineHeight: lineHeights["text-lg"].value,
		},
	},
	"text-md": {
		value: {
			fontFamily,
			fontSize: fontSizes["text-md"].value,
			fontWeight: fontWeights.medium.value,
			letterSpacing: letterSpacings["text-md"].value,
			lineHeight: lineHeights["text-md"].value,
		},
	},
	"text-sm": {
		value: {
			fontFamily,
			fontSize: fontSizes["text-sm"].value,
			fontWeight: fontWeights.medium.value,
			letterSpacing: letterSpacings["text-sm"].value,
			lineHeight: lineHeights["text-sm"].value,
		},
	},
	"text-xl": {
		value: {
			fontFamily,
			fontSize: fontSizes["text-xl"].value,
			fontWeight: fontWeights.medium.value,
			letterSpacing: letterSpacings["text-xl"].value,
			lineHeight: lineHeights["text-xl"].value,
		},
	},
	"text-xs": {
		value: {
			fontFamily,
			fontSize: fontSizes["text-xs"].value,
			fontWeight: fontWeights.medium.value,
			letterSpacing: letterSpacings["text-xs"].value,
			lineHeight: lineHeights["text-xs"].value,
		},
	},
});

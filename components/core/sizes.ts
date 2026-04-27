/**
 * Size, spacing, and radius definitions from Figma design tokens
 * All values are converted to rem units for accessibility (1rem = 16px)
 *
 * Design token collections:
 * - 2. Radius: Border radius values
 * - 3. Spacing: Gap and padding values
 * - 4. Widths: Width constraints
 * - 5. Containers: Container max-widths and padding
 */

/**
 * Border radius values from Figma design tokens
 * Collection: 2. Radius
 */
export const radii = {
	"2xl": { description: "16px border radius", value: "1rem" },
	"3xl": { description: "20px border radius", value: "1.25rem" },
	"4xl": { description: "24px border radius", value: "1.5rem" },
	full: { description: "9999px (Fully rounded corners)", value: "9999px" },
	lg: { description: "10px border radius", value: "0.625rem" },
	md: { description: "8px border radius", value: "0.5rem" },
	none: { description: "0px border radius", value: "0rem" },
	sm: { description: "6px border radius", value: "0.375rem" },
	xl: { description: "12px border radius", value: "0.75rem" },
	xs: { description: "4px border radius", value: "0.25rem" },
	xxs: { description: "2px border radius", value: "0.125rem" },
};

/**
 * Spacing values from Figma design tokens
 * Collection: 3. Spacing
 */
export const spacing = {
	"2xl": { description: "20px spacing", value: "1.25rem" },
	"3xl": { description: "24px spacing", value: "1.5rem" },
	"4xl": { description: "32px spacing", value: "2rem" },
	"5xl": { description: "40px spacing", value: "2.5rem" },
	"6xl": { description: "48px spacing", value: "3rem" },
	"7xl": { description: "64px spacing", value: "4rem" },
	"8xl": { description: "80px spacing", value: "5rem" },
	"9xl": { description: "96px spacing", value: "6rem" },
	"10xl": { description: "128px spacing", value: "8rem" },
	"11xl": { description: "160px spacing", value: "10rem" },
	lg: { description: "12px spacing", value: "0.75rem" },
	md: { description: "8px spacing", value: "0.5rem" },
	"md-extra": { description: "10px spacing", value: "0.625rem" },
	none: { description: "0px spacing", value: "0rem" },
	sm: { description: "6px spacing", value: "0.375rem" },
	xl: { description: "16px spacing", value: "1rem" },
	xs: { description: "4px spacing", value: "0.25rem" },
	xxs: { description: "2px spacing", value: "0.125rem" },
};

/**
 * Width values from Figma design tokens
 * Collection: 4. Widths
 */
export const sizes = {
	"2xl": { description: "1024px width", value: "64rem" },
	"3xl": { description: "1280px width", value: "80rem" },
	"4xl": { description: "1440px width", value: "90rem" },
	"5xl": { description: "1600px width", value: "100rem" },
	"6xl": { description: "1920px width", value: "120rem" },
	lg: { description: "640px width", value: "40rem" },
	md: { description: "560px width", value: "35rem" },
	"paragraph-max-width": {
		description: "720px paragraph max width",
		value: "45rem",
	},
	sm: { description: "480px width", value: "30rem" },
	xl: { description: "768px width", value: "48rem" },
	xs: { description: "384px width", value: "24rem" },
	xxs: { description: "320px width", value: "20rem" },
	full: { description: "100% width", value: "100%" },
};

/**
 * Container values from Figma design tokens
 * Collection: 5. Containers
 */
export const containers = {
	"max-width-desktop": {
		description: "1280px container max width",
		value: "80rem",
	},
	"padding-desktop": { description: "32px container padding", value: "2rem" },
	"padding-mobile": { description: "16px container padding", value: "1rem" },
};

export type SizeType = keyof typeof sizes;

export const breakpoints = {
	"2xl": { value: "90em" },
	"3xl": { value: "1921px" },
	lg: { value: "60rem" },
};

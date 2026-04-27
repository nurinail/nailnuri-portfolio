/** biome-ignore-all lint/style/useNamingConvention: _light and _dark are chakra variables */
import { defineSemanticTokens } from "@chakra-ui/react";

// ============================================================================
// BASE COLORS
// ============================================================================
export const baseColors = defineSemanticTokens.colors({
	brand: {
		value: "{colors.blueDark}",
	},
	error: {
		value: "{colors.red}",
	},
	success: {
		value: "{colors.green}",
	},
	warning: {
		value: "{colors.orange}",
	},
});

// ============================================================================
// BORDER COLORS
// ============================================================================
export const borderColors = defineSemanticTokens.colors({
	"border-brand": {
		value: {
			_dark: "{colors.brand.400}",
			_light: "{colors.brand.500}",
		},
	},
	"border-brand_alt": {
		value: {
			_dark: "{colors.gray.700}",
			_light: "{colors.brand.600}",
		},
	},
	"border-disabled": {
		value: {
			_dark: "{colors.gray.700}",
			_light: "{colors.gray.200}",
		},
	},
	"border-disabled_subtle": {
		value: {
			_dark: "{colors.gray.800}",
			_light: "{colors.gray.200}",
		},
	},
	"border-error": {
		value: {
			_dark: "{colors.error.400}",
			_light: "{colors.error.500}",
		},
	},
	"border-error_subtle": {
		value: {
			_dark: "{colors.error.400}",
			_light: "{colors.error.300}",
		},
	},
	"border-primary": {
		value: {
			_dark: "{colors.gray.700}",
			_light: "{colors.gray.300}",
		},
	},
	"border-secondary": {
		value: {
			_dark: "{colors.gray.800}",
			_light: "{colors.gray.200}",
		},
	},
	"border-tertiary": {
		value: {
			_dark: "{colors.gray.800}",
			_light: "{colors.gray.100}",
		},
	},
});

// ============================================================================
// BACKGROUND COLORS
// ============================================================================
export const backgroundColors = defineSemanticTokens.colors({
	"bg-active": {
		value: {
			_dark: "{colors.gray.800}",
			_light: "{colors.gray.50}",
		},
	},
	"bg-brand-primary": {
		value: {
			_dark: "{colors.brand.500}",
			_light: "{colors.brand.50}",
		},
	},
	"bg-brand-primary_alt": {
		value: {
			_dark: "{colors.gray.800}",
			_light: "{colors.brand.50}",
		},
	},
	"bg-brand-secondary": {
		value: {
			_dark: "{colors.brand.600}",
			_light: "{colors.brand.100}",
		},
	},
	"bg-brand-section": {
		value: {
			_dark: "{colors.gray.900}",
			_light: "{colors.brand.800}",
		},
	},
	"bg-brand-section_subtle": {
		value: {
			_dark: "{colors.gray.950}",
			_light: "{colors.brand.700}",
		},
	},
	"bg-brand-solid": {
		value: {
			_dark: "{colors.brand.600}",
			_light: "{colors.brand.600}",
		},
	},
	"bg-brand-solid_hover": {
		value: {
			_dark: "{colors.brand.500}",
			_light: "{colors.brand.700}",
		},
	},
	"bg-disabled": {
		value: {
			_dark: "{colors.gray.800}",
			_light: "{colors.gray.100}",
		},
	},
	"bg-disabled_subtle": {
		value: {
			_dark: "{colors.gray.900}",
			_light: "{colors.gray.50}",
		},
	},
	"bg-error-primary": {
		value: {
			_dark: "{colors.error.500}",
			_light: "{colors.error.50}",
		},
	},
	"bg-error-secondary": {
		value: {
			_dark: "{colors.error.600}",
			_light: "{colors.error.100}",
		},
	},
	"bg-error-solid": {
		value: {
			_dark: "{colors.error.600}",
			_light: "{colors.error.600}",
		},
	},
	"bg-overlay": {
		value: {
			_dark: "{colors.gray.800}",
			_light: "{colors.gray.950}",
		},
	},
	"bg-primary": {
		value: {
			_dark: "{colors.gray.950}",
			_light: "white",
		},
	},
	"bg-primary_alt": {
		value: {
			_dark: "{colors.gray.900}",
			_light: "white",
		},
	},
	"bg-primary_hover": {
		value: {
			_dark: "{colors.gray.900}",
			_light: "{colors.gray.50}",
		},
	},
	"bg-primary_solid": {
		value: {
			_dark: "{colors.gray.900}",
			_light: "{colors.gray.950}",
		},
	},
	"bg-quaternary": {
		value: {
			_dark: "{colors.gray.700}",
			_light: "{colors.gray.200}",
		},
	},
	"bg-secondary": {
		value: {
			_dark: "{colors.gray.900}",
			_light: "{colors.gray.50}",
		},
	},
	"bg-secondary_alt": {
		value: {
			_dark: "{colors.gray.950}",
			_light: "{colors.gray.100}",
		},
	},
	"bg-secondary_hover": {
		value: {
			_dark: "{colors.gray.800}",
			_light: "{colors.gray.100}",
		},
	},
	"bg-secondary_subtle": {
		value: {
			_dark: "{colors.gray.900}",
			_light: "{colors.gray.25}",
		},
	},
	"bg-secondary-solid": {
		value: {
			_dark: "{colors.gray.600}",
			_light: "{colors.gray.600}",
		},
	},
	"bg-success-primary": {
		value: {
			_dark: "{colors.success.500}",
			_light: "{colors.success.50}",
		},
	},
	"bg-success-secondary": {
		value: {
			_dark: "{colors.success.600}",
			_light: "{colors.success.100}",
		},
	},
	"bg-success-solid": {
		value: {
			_dark: "{colors.success.600}",
			_light: "{colors.success.600}",
		},
	},
	"bg-tertiary": {
		value: {
			_dark: "{colors.gray.800}",
			_light: "{colors.gray.100}",
		},
	},
	"bg-warning-primary": {
		value: {
			_dark: "{colors.warning.500}",
			_light: "{colors.warning.50}",
		},
	},
	"bg-warning-secondary": {
		value: {
			_dark: "{colors.warning.600}",
			_light: "{colors.warning.100}",
		},
	},
	"bg-warning-solid": {
		value: {
			_dark: "{colors.warning.600}",
			_light: "{colors.warning.600}",
		},
	},
});

// ============================================================================
// FOREGROUND COLORS
// ============================================================================
export const foregroundColors = defineSemanticTokens.colors({
	"fg-brand-primary": {
		value: {
			_dark: "{colors.brand.500}",
			_light: "{colors.brand.500}",
		},
	},
	"fg-brand-primary_alt": {
		value: {
			_dark: "{colors.gray.300}",
			_light: "{colors.brand.600}",
		},
	},
	"fg-brand-secondary": {
		value: {
			_dark: "{colors.brand.500}",
			_light: "{colors.brand.500}",
		},
	},
	"fg-disabled": {
		value: {
			_dark: "{colors.gray.500}",
			_light: "{colors.gray.400}",
		},
	},
	"fg-disabled_subtle": {
		value: {
			_dark: "{colors.gray.600}",
			_light: "{colors.gray.300}",
		},
	},
	"fg-error-primary": {
		value: {
			_dark: "{colors.error.500}",
			_light: "{colors.error.600}",
		},
	},
	"fg-error-secondary": {
		value: {
			_dark: "{colors.error.400}",
			_light: "{colors.error.500}",
		},
	},
	"fg-primary": {
		value: {
			_dark: "white",
			_light: "{colors.gray.900}",
		},
	},
	"fg-quaternary": {
		value: {
			_dark: "{colors.gray.400}",
			_light: "{colors.gray.500}",
		},
	},
	"fg-quaternary_hover": {
		value: {
			_dark: "{colors.gray.300}",
			_light: "{colors.gray.600}",
		},
	},
	"fg-quinary": {
		value: {
			_dark: "{colors.gray.500}",
			_light: "{colors.gray.400}",
		},
	},
	"fg-quinary_hover": {
		value: {
			_dark: "{colors.gray.400}",
			_light: "{colors.gray.500}",
		},
	},
	"fg-secondary": {
		value: {
			_dark: "{colors.gray.300}",
			_light: "{colors.gray.700}",
		},
	},
	"fg-secondary_hover": {
		value: {
			_dark: "{colors.gray.200}",
			_light: "{colors.gray.800}",
		},
	},
	"fg-senary": {
		value: {
			_dark: "{colors.gray.600}",
			_light: "{colors.gray.300}",
		},
	},
	"fg-success-primary": {
		value: {
			_dark: "{colors.success.500}",
			_light: "{colors.success.600}",
		},
	},
	"fg-success-secondary": {
		value: {
			_dark: "{colors.success.400}",
			_light: "{colors.success.500}",
		},
	},
	"fg-tertiary": {
		value: {
			_dark: "{colors.gray.400}",
			_light: "{colors.gray.600}",
		},
	},
	"fg-tertiary_hover": {
		value: {
			_dark: "{colors.gray.300}",
			_light: "{colors.gray.700}",
		},
	},
	"fg-warning-primary": {
		value: {
			_dark: "{colors.warning.500}",
			_light: "{colors.warning.600}",
		},
	},
	"fg-warning-secondary": {
		value: {
			_dark: "{colors.warning.400}",
			_light: "{colors.warning.500}",
		},
	},
	"fg-white": {
		value: "white",
	},
});

// ============================================================================
// TEXT COLORS
// ============================================================================
export const textColors = defineSemanticTokens.colors({
	// ============================================================================
	// BRAND TEXT COLORS
	// ============================================================================
	"text-brand-primary": {
		value: {
			_dark: "{colors.gray.50}",
			_light: "{colors.brand.900}",
		},
	},
	"text-brand-secondary": {
		value: {
			_dark: "{colors.gray.300}",
			_light: "{colors.brand.700}",
		},
	},
	"text-brand-tertiary": {
		value: {
			_dark: "{colors.gray.400}",
			_light: "{colors.brand.600}",
		},
	},
	"text-brand-tertiary_alt": {
		value: {
			_dark: "{colors.gray.50}",
			_light: "{colors.brand.600}",
		},
	},
	"text-disabled": {
		value: {
			_dark: "{colors.gray.500}",
			_light: "{colors.gray.500}",
		},
	},

	// ============================================================================
	// SEMANTIC TEXT COLORS
	// ============================================================================
	"text-error-primary": {
		value: {
			_dark: "{colors.error.400}",
			_light: "{colors.error.600}",
		},
	},
	"text-placeholder": {
		value: {
			_dark: "{colors.gray.500}",
			_light: "{colors.gray.500}",
		},
	},
	"text-placeholder_subtle": {
		value: {
			_dark: "{colors.gray.700}",
			_light: "{colors.gray.300}",
		},
	},
	// ============================================================================
	// PRIMARY TEXT COLORS
	// ============================================================================
	"text-primary": {
		value: {
			_dark: "{colors.gray.50}",
			_light: "{colors.gray.900}",
		},
	},
	"text-primary_on-brand": {
		value: {
			_dark: "{colors.gray.50}",
			_light: "white",
		},
	},

	// ============================================================================
	// QUATERNARY TEXT COLORS
	// ============================================================================
	"text-quaternary": {
		value: {
			_dark: "{colors.gray.400}",
			_light: "{colors.gray.500}",
		},
	},
	"text-quaternary_on-brand": {
		value: {
			_dark: "{colors.gray.400}",
			_light: "{colors.brand.300}",
		},
	},

	// ============================================================================
	// SECONDARY TEXT COLORS
	// ============================================================================
	"text-secondary": {
		value: {
			_dark: "{colors.gray.300}",
			_light: "{colors.gray.700}",
		},
	},
	"text-secondary_hover": {
		value: {
			_dark: "{colors.gray.200}",
			_light: "{colors.gray.800}",
		},
	},
	"text-secondary_on-brand": {
		value: {
			_dark: "{colors.gray.300}",
			_light: "{colors.brand.200}",
		},
	},
	"text-success-primary": {
		value: {
			_dark: "{colors.success.400}",
			_light: "{colors.success.600}",
		},
	},

	// ============================================================================
	// TERTIARY TEXT COLORS
	// ============================================================================
	"text-tertiary": {
		value: {
			_dark: "{colors.gray.400}",
			_light: "{colors.gray.600}",
		},
	},
	"text-tertiary_hover": {
		value: {
			_dark: "{colors.gray.300}",
			_light: "{colors.gray.700}",
		},
	},
	"text-tertiary_on-brand": {
		value: {
			_dark: "{colors.gray.400}",
			_light: "{colors.brand.200}",
		},
	},
	"text-warning-primary": {
		value: {
			_dark: "{colors.warning.400}",
			_light: "{colors.warning.600}",
		},
	},

	// ============================================================================
	// UTILITY TEXT COLORS
	// ============================================================================
	"text-white": {
		value: "white",
	},
});

// ============================================================================
// ALPHA/TRANSPARENCY COLORS
// ============================================================================
export const alphaColors = defineSemanticTokens.colors({
	// Alpha Black (inverted in dark mode - using white)
	"alpha-black-10": {
		value: {
			_dark: "#ffffff1a",
			_light: "#0c111d1a",
		},
	},
	"alpha-black-20": {
		value: {
			_dark: "#ffffff33",
			_light: "#0c111d33",
		},
	},
	"alpha-black-30": {
		value: {
			_dark: "#ffffff4d",
			_light: "#0c111d4d",
		},
	},
	"alpha-black-40": {
		value: {
			_dark: "#ffffff66",
			_light: "#0c111d66",
		},
	},
	"alpha-black-50": {
		value: {
			_dark: "#ffffff80",
			_light: "#0c111d80",
		},
	},
	"alpha-black-60": {
		value: {
			_dark: "#ffffff99",
			_light: "#0c111d99",
		},
	},
	"alpha-black-70": {
		value: {
			_dark: "#ffffffb3",
			_light: "#0c111db3",
		},
	},
	"alpha-black-80": {
		value: {
			_dark: "#ffffffcc",
			_light: "#0c111dcc",
		},
	},
	"alpha-black-90": {
		value: {
			_dark: "#ffffffe6",
			_light: "#0c111de6",
		},
	},
	"alpha-black-100": {
		value: {
			_dark: "#ffffffff",
			_light: "#0c111dff",
		},
	},
	// Alpha White (inverted in dark mode - using dark colors)
	"alpha-white-10": {
		value: {
			_dark: "#0c111d1a",
			_light: "#ffffff1a",
		},
	},
	"alpha-white-20": {
		value: {
			_dark: "#0c111d33",
			_light: "#ffffff33",
		},
	},
	"alpha-white-30": {
		value: {
			_dark: "#0c111d4d",
			_light: "#ffffff4d",
		},
	},
	"alpha-white-40": {
		value: {
			_dark: "#0c111d66",
			_light: "#ffffff66",
		},
	},
	"alpha-white-50": {
		value: {
			_dark: "#0c111d80",
			_light: "#ffffff80",
		},
	},
	"alpha-white-60": {
		value: {
			_dark: "#0c111d99",
			_light: "#ffffff99",
		},
	},
	"alpha-white-70": {
		value: {
			_dark: "#0c111db3",
			_light: "#ffffffb3",
		},
	},
	"alpha-white-80": {
		value: {
			_dark: "#0c111dcc",
			_light: "#ffffffcc",
		},
	},
	"alpha-white-90": {
		value: {
			_dark: "#0c111de6",
			_light: "#ffffffe6",
		},
	},
	"alpha-white-100": {
		value: {
			_dark: "{colors.gray.950}",
			_light: "#ffffffff",
		},
	},
});

// ============================================================================
// BUTTON COLORS
// ============================================================================
export const buttonColors = defineSemanticTokens.colors({
	// Primary Button
	"button-primary-bg": {
		value: {
			_dark: "{colors.brand.600}",
			_light: "{colors.brand.600}",
		},
	},
	"button-primary-bg_hover": {
		value: {
			_dark: "{colors.brand.700}",
			_light: "{colors.brand.700}",
		},
	},
	// Primary Error Button
	"button-primary-error-bg": {
		value: {
			_dark: "{colors.error.600}",
			_light: "{colors.error.600}",
		},
	},
	"button-primary-error-bg_hover": {
		value: {
			_dark: "{colors.error.700}",
			_light: "{colors.error.700}",
		},
	},
	"button-primary-error-fg": {
		value: {
			_dark: "white",
			_light: "white",
		},
	},
	"button-primary-error-fg_hover": {
		value: {
			_dark: "white",
			_light: "white",
		},
	},
	"button-primary-fg": {
		value: {
			_dark: "white",
			_light: "white",
		},
	},
	"button-primary-fg_hover": {
		value: {
			_dark: "white",
			_light: "white",
		},
	},
	// Secondary Button
	"button-secondary-bg": {
		value: {
			_dark: "{colors.gray.900}",
			_light: "white",
		},
	},
	"button-secondary-bg_hover": {
		value: {
			_dark: "{colors.gray.800}",
			_light: "{colors.gray.50}",
		},
	},
	"button-secondary-border": {
		value: {
			_dark: "{colors.gray.700}",
			_light: "{colors.gray.300}",
		},
	},
	"button-secondary-border_hover": {
		value: {
			_dark: "{colors.gray.700}",
			_light: "{colors.gray.300}",
		},
	},
	// Secondary Color Button
	"button-secondary-color-bg": {
		value: {
			_dark: "{colors.gray.900}",
			_light: "white",
		},
	},
	"button-secondary-color-bg_hover": {
		value: {
			_dark: "{colors.gray.800}",
			_light: "{colors.brand.50}",
		},
	},
	"button-secondary-color-border": {
		value: {
			_dark: "{colors.gray.700}",
			_light: "{colors.brand.300}",
		},
	},
	"button-secondary-color-border_hover": {
		value: {
			_dark: "{colors.gray.700}",
			_light: "{colors.brand.300}",
		},
	},
	"button-secondary-color-fg": {
		value: {
			_dark: "{colors.gray.300}",
			_light: "{colors.brand.700}",
		},
	},
	"button-secondary-color-fg_hover": {
		value: {
			_dark: "{colors.gray.100}",
			_light: "{colors.brand.800}",
		},
	},
	// Secondary Error Button
	"button-secondary-error-bg": {
		value: {
			_dark: "{colors.error.950}",
			_light: "white",
		},
	},
	"button-secondary-error-bg_hover": {
		value: {
			_dark: "{colors.error.900}",
			_light: "{colors.error.50}",
		},
	},
	"button-secondary-error-border": {
		value: {
			_dark: "{colors.error.800}",
			_light: "{colors.error.300}",
		},
	},
	"button-secondary-error-border_hover": {
		value: {
			_dark: "{colors.error.700}",
			_light: "{colors.error.300}",
		},
	},
	"button-secondary-error-fg": {
		value: {
			_dark: "{colors.error.200}",
			_light: "{colors.error.700}",
		},
	},
	"button-secondary-error-fg_hover": {
		value: {
			_dark: "{colors.error.100}",
			_light: "{colors.error.800}",
		},
	},
	"button-secondary-fg": {
		value: {
			_dark: "{colors.gray.300}",
			_light: "{colors.gray.700}",
		},
	},
	"button-secondary-fg_hover": {
		value: {
			_dark: "{colors.gray.100}",
			_light: "{colors.gray.800}",
		},
	},
	// Tertiary Button
	"button-tertiary-bg_hover": {
		value: {
			_dark: "{colors.gray.800}",
			_light: "{colors.gray.50}",
		},
	},
	// Tertiary Color Button
	"button-tertiary-color-bg_hover": {
		value: {
			_dark: "{colors.gray.800}",
			_light: "{colors.brand.50}",
		},
	},
	"button-tertiary-color-fg": {
		value: {
			_dark: "{colors.gray.300}",
			_light: "{colors.brand.700}",
		},
	},
	"button-tertiary-color-fg_hover": {
		value: {
			_dark: "{colors.gray.100}",
			_light: "{colors.brand.800}",
		},
	},
	// Tertiary Error Button
	"button-tertiary-error-bg_hover": {
		value: {
			_dark: "{colors.error.900}",
			_light: "{colors.error.50}",
		},
	},
	"button-tertiary-error-fg": {
		value: {
			_dark: "{colors.error.300}",
			_light: "{colors.error.700}",
		},
	},
	"button-tertiary-error-fg_hover": {
		value: {
			_dark: "{colors.error.200}",
			_light: "{colors.error.800}",
		},
	},
	"button-tertiary-fg": {
		value: {
			_dark: "{colors.gray.400}",
			_light: "{colors.gray.600}",
		},
	},
	"button-tertiary-fg_hover": {
		value: {
			_dark: "{colors.gray.200}",
			_light: "{colors.gray.700}",
		},
	},
});

// ============================================================================
// ICON COLORS
// ============================================================================
export const iconColors = defineSemanticTokens.colors({
	// Featured Icon - Dark Style
	"featured-icon-dark-fg-brand": {
		value: {
			_dark: "{colors.brand.200}",
			_light: "white",
		},
	},
	"featured-icon-dark-fg-error": {
		value: {
			_dark: "{colors.error.200}",
			_light: "white",
		},
	},
	"featured-icon-dark-fg-gray": {
		value: {
			_dark: "{colors.gray.200}",
			_light: "white",
		},
	},
	"featured-icon-dark-fg-success": {
		value: {
			_dark: "{colors.success.200}",
			_light: "white",
		},
	},
	"featured-icon-dark-fg-warning": {
		value: {
			_dark: "{colors.warning.200}",
			_light: "white",
		},
	},
	// Featured Icon - Light Style
	"featured-icon-light-fg-brand": {
		value: {
			_dark: "{colors.brand.200}",
			_light: "{colors.brand.600}",
		},
	},
	"featured-icon-light-fg-error": {
		value: {
			_dark: "{colors.error.200}",
			_light: "{colors.error.600}",
		},
	},
	"featured-icon-light-fg-gray": {
		value: {
			_dark: "{colors.gray.200}",
			_light: "{colors.gray.500}",
		},
	},
	"featured-icon-light-fg-success": {
		value: {
			_dark: "{colors.success.200}",
			_light: "{colors.success.600}",
		},
	},
	"featured-icon-light-fg-warning": {
		value: {
			_dark: "{colors.warning.200}",
			_light: "{colors.warning.600}",
		},
	},
	// Featured Icon - Modern Style
	"featured-icon-modern-border": {
		value: {
			_dark: "{colors.gray.700}",
			_light: "{colors.gray.200}",
		},
	},
	// Icon General
	"icon-fg-brand": {
		value: {
			_dark: "{colors.gray.400}",
			_light: "{colors.brand.600}",
		},
	},
	"icon-fg-brand_on-brand": {
		value: {
			_dark: "{colors.gray.400}",
			_light: "{colors.brand.200}",
		},
	},
});

// ============================================================================
// AVATAR COLORS
// ============================================================================
export const avatarColors = defineSemanticTokens.colors({
	"avatar-bg": {
		value: {
			_dark: "{colors.gray.800}",
			_light: "{colors.gray.100}",
		},
	},
	"avatar-contrast-border": {
		value: {
			_dark: "#ffffff1f",
			_light: "#0000001f",
		},
	},
	"avatar-profile-photo-border": {
		value: {
			_dark: "{colors.gray.950}",
			_light: "white",
		},
	},
});

// ============================================================================
// NAVIGATION COLORS
// ============================================================================
export const navigationColors = defineSemanticTokens.colors({
	"nav-item-button-icon-fg": {
		value: {
			_dark: "{colors.gray.400}",
			_light: "{colors.gray.500}",
		},
	},
	"nav-item-button-icon-fg_active": {
		value: {
			_dark: "{colors.gray.200}",
			_light: "{colors.gray.700}",
		},
	},
	"nav-item-icon-fg": {
		value: {
			_dark: "{colors.gray.400}",
			_light: "{colors.gray.500}",
		},
	},
	"nav-item-icon-fg_active": {
		value: {
			_dark: "{colors.gray.200}",
			_light: "{colors.gray.500}",
		},
	},
});

// ============================================================================
// BREADCRUMB COLORS
// ============================================================================
export const breadcrumbColors = defineSemanticTokens.colors({
	"breadcrumb-bg_hover": {
		value: {
			_dark: "{colors.gray.800}",
			_light: "{colors.gray.50}",
		},
	},
	"breadcrumb-fg": {
		value: {
			_dark: "{colors.gray.300}",
			_light: "{colors.gray.600}",
		},
	},
	"breadcrumb-fg_hover": {
		value: {
			_dark: "white",
			_light: "{colors.gray.700}",
		},
	},
	"breadcrumb-icon-fg": {
		value: {
			_dark: "{colors.gray.400}",
			_light: "{colors.gray.500}",
		},
	},
	"breadcrumb-icon-fg_hover": {
		value: {
			_dark: "white",
			_light: "{colors.gray.700}",
		},
	},
});

// ============================================================================
// TOOLTIP COLORS
// ============================================================================
export const tooltipColors = defineSemanticTokens.colors({
	"tooltip-supporting-text": {
		value: {
			_dark: "{colors.gray.300}",
			_light: "{colors.gray.300}",
		},
	},
});

// ============================================================================
// SLIDER COLORS
// ============================================================================
export const sliderColors = defineSemanticTokens.colors({
	"slider-handle-bg": {
		value: {
			_dark: "{colors.brand.500}",
			_light: "white",
		},
	},
	"slider-handle-border": {
		value: {
			_dark: "{colors.gray.950}",
			_light: "{colors.brand.600}",
		},
	},
});

// ============================================================================
// TOGGLE COLORS
// ============================================================================
export const toggleColors = defineSemanticTokens.colors({
	"toggle-button-fg_disabled": {
		value: {
			_dark: "{colors.gray.600}",
			_light: "{colors.gray.50}",
		},
	},
});

// ============================================================================
// FOCUS RING COLORS
// ============================================================================
export const focusRingColors = defineSemanticTokens.colors({
	"focus-ring": {
		value: {
			_dark: "{colors.brand.500}",
			_light: "{colors.brand.500}",
		},
	},
	"focus-ring-error": {
		value: {
			_dark: "{colors.error.500}",
			_light: "{colors.error.500}",
		},
	},
});

// ============================================================================
// UTILITY COLORS
// ============================================================================
export const utilityColors = defineSemanticTokens.colors({
	// Utility Brand
	"utility-brand-50": {
		value: {
			_dark: "{colors.brand.950}",
			_light: "{colors.brand.50}",
		},
	},
	"utility-brand-50_alt": {
		value: {
			_dark: "{colors.gray.900}",
			_light: "{colors.brand.50}",
		},
	},
	"utility-brand-100": {
		value: {
			_dark: "{colors.brand.900}",
			_light: "{colors.brand.100}",
		},
	},
	"utility-brand-100_alt": {
		value: {
			_dark: "{colors.gray.800}",
			_light: "{colors.brand.100}",
		},
	},
	"utility-brand-200": {
		value: {
			_dark: "{colors.brand.800}",
			_light: "{colors.brand.200}",
		},
	},
	"utility-brand-200_alt": {
		value: {
			_dark: "{colors.gray.700}",
			_light: "{colors.brand.200}",
		},
	},
	"utility-brand-300": {
		value: {
			_dark: "{colors.brand.700}",
			_light: "{colors.brand.300}",
		},
	},
	"utility-brand-400": {
		value: {
			_dark: "{colors.brand.600}",
			_light: "{colors.brand.400}",
		},
	},
	"utility-brand-500": {
		value: {
			_dark: "{colors.brand.500}",
			_light: "{colors.brand.500}",
		},
	},
	"utility-brand-600": {
		value: {
			_dark: "{colors.brand.400}",
			_light: "{colors.brand.600}",
		},
	},
	"utility-brand-700": {
		value: {
			_dark: "{colors.brand.300}",
			_light: "{colors.brand.700}",
		},
	},
	// Utility Error
	"utility-error-50": {
		value: {
			_dark: "{colors.error.950}",
			_light: "{colors.error.50}",
		},
	},
	"utility-error-100": {
		value: {
			_dark: "{colors.error.900}",
			_light: "{colors.error.100}",
		},
	},
	"utility-error-200": {
		value: {
			_dark: "{colors.error.800}",
			_light: "{colors.error.200}",
		},
	},
	"utility-error-300": {
		value: {
			_dark: "{colors.error.700}",
			_light: "{colors.error.300}",
		},
	},
	"utility-error-400": {
		value: {
			_dark: "{colors.error.600}",
			_light: "{colors.error.400}",
		},
	},
	"utility-error-500": {
		value: {
			_dark: "{colors.error.500}",
			_light: "{colors.error.500}",
		},
	},
	"utility-error-600": {
		value: {
			_dark: "{colors.error.400}",
			_light: "{colors.error.600}",
		},
	},
	"utility-error-700": {
		value: {
			_dark: "{colors.error.300}",
			_light: "{colors.error.700}",
		},
	},
	// Utility Gray
	"utility-gray-50": {
		value: {
			_dark: "{colors.gray.900}",
			_light: "{colors.gray.50}",
		},
	},
	"utility-gray-100": {
		value: {
			_dark: "{colors.gray.800}",
			_light: "{colors.gray.100}",
		},
	},
	"utility-gray-200": {
		value: {
			_dark: "{colors.gray.700}",
			_light: "{colors.gray.200}",
		},
	},
	"utility-gray-300": {
		value: {
			_dark: "{colors.gray.700}",
			_light: "{colors.gray.300}",
		},
	},
	"utility-gray-400": {
		value: {
			_dark: "{colors.gray.600}",
			_light: "{colors.gray.400}",
		},
	},
	"utility-gray-500": {
		value: {
			_dark: "{colors.gray.500}",
			_light: "{colors.gray.500}",
		},
	},
	"utility-gray-600": {
		value: {
			_dark: "{colors.gray.400}",
			_light: "{colors.gray.600}",
		},
	},
	"utility-gray-700": {
		value: {
			_dark: "{colors.gray.300}",
			_light: "{colors.gray.700}",
		},
	},
	// Utility Success
	"utility-success-50": {
		value: {
			_dark: "{colors.success.950}",
			_light: "{colors.success.50}",
		},
	},
	"utility-success-100": {
		value: {
			_dark: "{colors.success.900}",
			_light: "{colors.success.100}",
		},
	},
	"utility-success-200": {
		value: {
			_dark: "{colors.success.800}",
			_light: "{colors.success.200}",
		},
	},
	"utility-success-300": {
		value: {
			_dark: "{colors.success.700}",
			_light: "{colors.success.300}",
		},
	},
	"utility-success-400": {
		value: {
			_dark: "{colors.success.600}",
			_light: "{colors.success.400}",
		},
	},
	"utility-success-500": {
		value: {
			_dark: "{colors.success.500}",
			_light: "{colors.success.500}",
		},
	},
	"utility-success-600": {
		value: {
			_dark: "{colors.success.400}",
			_light: "{colors.success.600}",
		},
	},
	"utility-success-700": {
		value: {
			_dark: "{colors.success.300}",
			_light: "{colors.success.700}",
		},
	},
	// Utility Warning
	"utility-warning-50": {
		value: {
			_dark: "{colors.warning.950}",
			_light: "{colors.warning.50}",
		},
	},
	"utility-warning-100": {
		value: {
			_dark: "{colors.warning.900}",
			_light: "{colors.warning.100}",
		},
	},
	"utility-warning-200": {
		value: {
			_dark: "{colors.warning.800}",
			_light: "{colors.warning.200}",
		},
	},
	"utility-warning-300": {
		value: {
			_dark: "{colors.warning.700}",
			_light: "{colors.warning.300}",
		},
	},
	"utility-warning-400": {
		value: {
			_dark: "{colors.warning.600}",
			_light: "{colors.warning.400}",
		},
	},
	"utility-warning-500": {
		value: {
			_dark: "{colors.warning.500}",
			_light: "{colors.warning.500}",
		},
	},
	"utility-warning-600": {
		value: {
			_dark: "{colors.warning.400}",
			_light: "{colors.warning.600}",
		},
	},
	"utility-warning-700": {
		value: {
			_dark: "{colors.warning.300}",
			_light: "{colors.warning.700}",
		},
	},
});

// ============================================================================
// COMBINED VIRTUAL COLORS
// ============================================================================
export const virtualColors = defineSemanticTokens.colors({
	...alphaColors,
	...avatarColors,
	...backgroundColors,
	...baseColors,
	...borderColors,
	...breadcrumbColors,
	...buttonColors,
	...focusRingColors,
	...foregroundColors,
	...iconColors,
	...navigationColors,
	...sliderColors,
	...textColors,
	...toggleColors,
	...tooltipColors,
	...utilityColors,
});

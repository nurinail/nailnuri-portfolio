import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
	base: {
		// biome-ignore lint/style/useNamingConvention: this is a Chakra UI prop
		_disabled: {
			cursor: "not-allowed",
		},
		// biome-ignore lint/style/useNamingConvention: this is a Chakra UI prop
		_focusVisible: {
			outline: "4px solid",
			outlineColor: "focus-ring",
			outlineOffset: "0px",
		},
		alignItems: "center",
		cursor: "pointer",
		display: "flex",
		fontWeight: "600",
		justifyContent: "center",
		transition: "all 0.2s",
	},
	defaultVariants: {
		// @ts-expect-error
		colorPalette: "brand",
		size: "md",
		variant: "primary",
	},
	variants: {
		size: {
			"2xl": {
				borderRadius: "md",
				fontSize: "text-lg",
				gap: "lg",
				height: 15,
				minWidth: 15,
				px: "lg",
				py: "md",
			},
			lg: {
				borderRadius: "md",
				fontSize: "text-md",
				gap: "sm",
				height: 12,
				minWidth: 12,
				px: "lg",
				py: "md",
			},
			md: {
				borderRadius: "md",
				fontSize: "text-sm",
				gap: "sm",
				height: 10,
				minWidth: 10,
				px: "md",
				py: "sm",
			},
			sm: {
				borderRadius: "md",
				fontSize: "text-sm",
				gap: "xs",
				height: 9,
				minWidth: 9,
				px: "lg",
				py: "md",
			},
			xl: {
				borderRadius: "md",
				fontSize: "text-md",
				gap: "lg",
				height: 12,
				minWidth: 12,
				px: "lg",
				py: "md",
			},
		},
		variant: {
			link: {
				// biome-ignore lint/style/useNamingConvention: this is a Chakra UI prop
				_disabled: {
					color: "fg-disabled",
				},
				// biome-ignore lint/style/useNamingConvention: this is a Chakra UI prop
				_hover: {
					color: "button-tertiary-color-fg_hover",
				},
				bgColor: "transparent",
				border: "none",
				color: "button-tertiary-color-fg",
				p: 0,
			},
			primary: {
				// biome-ignore lint/style/useNamingConvention: this is a Chakra UI prop
				_active: {
					bgColor: "button-primary-bg_hover",
				},
				// biome-ignore lint/style/useNamingConvention: this is a Chakra UI prop
				_disabled: {
					bgColor: "bg-disabled",
					border: "1px solid",
					borderColor: "border-disabled",
					color: "fg-disabled",
				},
				// biome-ignore lint/style/useNamingConvention: this is a Chakra UI prop
				_hover: {
					bgColor: "button-primary-bg_hover",
				},
				bgColor: "button-primary-bg",
				border: "none",
				color: "button-primary-fg",
			},
			secondary: {
				// biome-ignore lint/style/useNamingConvention: this is a Chakra UI prop
				_active: {
					bgColor: "button-secondary-color-bg_hover",
				},
				// biome-ignore lint/style/useNamingConvention: this is a Chakra UI prop
				_disabled: {
					bgColor: "button-secondary-bg",
					border: "1px solid",
					borderColor: "border-disabled",
					color: "fg-disabled",
				},
				// biome-ignore lint/style/useNamingConvention: this is a Chakra UI prop
				_hover: {
					bgColor: "button-secondary-color-bg_hover",
					color: "button-secondary-color-fg_hover",
				},
				bgColor: "button-secondary-bg",
				border: "1px solid",
				borderColor: "button-secondary-color-border",
				color: "button-secondary-color-fg",
			},
			tertiary: {
				// biome-ignore lint/style/useNamingConvention: this is a Chakra UI prop
				_active: {
					bgColor: "button-tertiary-bg_hover",
				},
				// biome-ignore lint/style/useNamingConvention: this is a Chakra UI prop
				_disabled: {
					bgColor: "transparent",
					color: "fg-disabled",
				},
				// biome-ignore lint/style/useNamingConvention: this is a Chakra UI prop
				_hover: {
					bgColor: "button-tertiary-bg_hover",
					color: "button-tertiary-fg_hover",
				},
				bgColor: "transparent",
				border: "none",
				color: "button-tertiary-fg",
			},
		},
	},
});

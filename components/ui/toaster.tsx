"use client";

import {
	Toaster as ChakraToaster,
	createToaster,
	Portal,
	Spinner,
	Stack,
	Toast,
} from "@chakra-ui/react";

export const toaster = createToaster({
	placement: "top-end",
	pauseOnPageIdle: true,
});

export const Toaster = () => {
	return (
		<Portal>
			<ChakraToaster p={10} toaster={toaster} insetInline={{ mdDown: "4" }}>
				{(toast) => (
					<Toast.Root
						width={{ md: "sm" }}
						bg="linear-gradient(135deg, #fb923c, #f97316)"
						p={2}
					>
						{toast.type === "loading" ? (
							<Spinner size="sm" color="blue.solid" />
						) : (
							<Toast.Indicator boxSize={30} />
						)}
						<Stack gap="1" flex="1" maxWidth="100%">
							{toast.title && <Toast.Title>{toast.title}</Toast.Title>}
							{toast.description && (
								<Toast.Description>{toast.description}</Toast.Description>
							)}
						</Stack>
						{toast.action && (
							<Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>
						)}
						{toast.closable && <Toast.CloseTrigger />}
					</Toast.Root>
				)}
			</ChakraToaster>
		</Portal>
	);
};

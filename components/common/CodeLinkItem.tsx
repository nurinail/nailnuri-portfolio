import { HStack, Link, Separator, Text, VStack } from "@chakra-ui/react";
import type { LinksType } from "../utils/utils";

interface CodeLinkItemProps {
	title: string;
	item?: LinksType[];
}

export function CodeLinkItem({ title, item }: CodeLinkItemProps) {
	return (
		<VStack gap="4" w="full" mt="12">
			<HStack w="full" align="center" gap="4">
				<Separator flex="1" borderColor="whiteAlpha.300" />

				<Text
					whiteSpace="nowrap"
					fontSize="sm"
					color="grayLight.500"
					letterSpacing="wider"
					fontWeight="medium"
				>
					{"//"} {title}
				</Text>

				<Separator flex="1" borderColor="whiteAlpha.300" />
			</HStack>

			<VStack w="full">
				{item?.map((link, index) => (
					<Link
						key={index as number}
						gap="4"
						py="2xl"
						px="3xl"
						w="full"
						border="1px solid"
						borderColor={link.color}
					>
						<link.icon size="24" color={link.color} />
						<Text color="white" fontSize="text-md" fontWeight="bold">
							{link.title}
						</Text>
					</Link>
				))}
			</VStack>
		</VStack>
	);
}

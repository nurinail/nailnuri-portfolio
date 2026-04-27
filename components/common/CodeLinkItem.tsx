import { HStack, Link, Separator, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
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
				{item?.map((link, index) => {
					return (
						<Link
							href={link.href}
							key={index as number}
							py="2xl"
							px="3xl"
							_focus={{ outline: "none", boxShadow: "none" }}
							_focusVisible={{ outline: "none", boxShadow: "none" }}
							w="full"
							className="group"
							role="group"
							border="1px solid"
							_hover={{ textDecoration: "none" }}
							borderColor={link.color}
							justifyContent="space-between"
						>
							<HStack gap="4">
								<link.icon size="24" color={link.color} />
								<Text color="gray" fontSize="text-md" fontWeight="bold">
									{link.title}
								</Text>
							</HStack>
							<Text
								color="grayLight.300"
								border="1px solid"
								borderColor="grayLight.500"
								borderRadius="lg"
								px="10px"
								fontSize="text-xs"
								py="2px"
								opacity="0" // 🔥 əsas budur (default gizli)
								transform="translateX(10px)"
								transition="all 0.2s ease"
								_groupHover={{
									opacity: 1,
									transform: "translateX(0px)",
								}}
							>
								{link.name}
							</Text>
						</Link>
					);
				})}
			</VStack>
		</VStack>
	);
}

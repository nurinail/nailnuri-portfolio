"use client";

import {
	Button,
	HStack,
	Link,
	Separator,
	Text,
	VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaFacebook, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { GrGithub, GrInstagram } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { SiHtmx } from "react-icons/si";
import { TbFileCvFilled } from "react-icons/tb";
import { Toaster, toaster } from "../ui/toaster";
import type { LinksType } from "../utils/utils";

const iconMap = {
	github: GrGithub,
	instagram: GrInstagram,
	linkedin: FaLinkedinIn,
	facebook: FaFacebook,
	youtube: FaYoutube,
	discord: FaDiscord,
	email: MdEmail,
	htmx: SiHtmx,
	cv: TbFileCvFilled,
};

interface CodeLinkItemProps {
	title: string;
	item?: LinksType[];
}

export function CodeLinkItem({ title, item }: CodeLinkItemProps) {
	return (
		<VStack gap="4" w="full" mt="10">
			<Toaster />
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
					const Icon = iconMap[link.icon as keyof typeof iconMap] ?? GrGithub;
					return (
						<Link
							as={link.toaster ? Button : NextLink}
							href={link.href ?? "#"}
							key={index as number}
							transition="all 0.4s ease-in-out"
							py="2xl"
							px="3xl"
							w="full"
							className="group"
							role="group"
							border="1px solid"
							// onClick={
							// 	link.toaster
							// 		? (e) => {
							// 				e.preventDefault();
							// 				toaster.create({
							// 					title: "👉 Want to see my CV?",
							// 					description: "Message me, I’ll send it 🙂",
							// 					duration: 3000,
							// 					type: "warning",
							// 				});
							// 			}
							// 		: undefined
							// }
							borderColor={link.color}
							justifyContent="space-between"
							_hover={{
								textDecoration: "none",
								transform: "scale(1.05)",
							}}
							_focus={{ outline: "none", boxShadow: "none" }}
							_focusVisible={{ outline: "none", boxShadow: "none" }}
							target={link.title === "Web Projects" ? undefined : "_blank"}
							rel="noopener noreferrer"
						>
							<HStack gap="4">
								<Icon size="24" color={link.color} />

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
								opacity="0"
								transform="translateX(10px)"
								transition="all 0.4s ease-in-out"
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

"use client";

import { Box, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { GrGithub } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { code, contact, social } from "@/components/utils/utils";
import type { LinksType } from "@/components/utils/utils";

const MotionBox = motion(Box);

const iconMap: Record<string, React.ElementType> = {
	github: GrGithub,
	instagram: FaInstagram,
	linkedin: FaLinkedinIn,
	facebook: FaFacebook,
	youtube: FaYoutube,
	discord: FaDiscord,
	email: MdEmail,
};

const allLinks = [
	{ category: "Code", items: code.filter(l => l.title !== "Web Projects") },
	{ category: "Connect", items: contact.filter(l => !l.toaster) },
	{ category: "Social", items: social },
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.04 },
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 15 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

function LinkCard({ link }: { link: LinksType }) {
	const Icon = iconMap[link.icon] ?? GrGithub;
	
	return (
		<MotionBox 
			variants={itemVariants} 
			whileHover={{ scale: 1.02 }} 
			whileTap={{ scale: 0.97 }}
		>
			<Link href={link.href ?? "#"} target="_blank" rel="noopener noreferrer">
				<Box
					position="relative"
					p={{ base: "3", md: "3.5" }}
					borderRadius="lg"
					bg="rgba(23, 23, 26, 0.4)"
					backdropFilter="blur(8px)"
					border="1px solid"
					borderColor="rgba(255, 255, 255, 0.05)"
					cursor="pointer"
					transition="all 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
					role="group"
					overflow="hidden"
					_hover={{
						borderColor: link.color,
						boxShadow: `0 8px 30px rgba(0, 0, 0, 0.25), 0 0 20px ${link.color}12`,
					}}
				>
					{/* Subtle gradient on hover */}
					<Box
						position="absolute"
						inset="0"
						bg={`linear-gradient(135deg, ${link.color}06, transparent)`}
						opacity={0}
						transition="opacity 0.25s ease"
						_groupHover={{ opacity: 1 }}
					/>
					
					<HStack position="relative" justifyContent="space-between">
						<HStack gap="2.5">
							<Box
								p="1.5"
								borderRadius="md"
								bg={`${link.color}12`}
								transition="all 0.25s ease"
								_groupHover={{ transform: "rotate(-8deg)" }}
							>
								<Icon size={16} color={link.color} />
							</Box>
							<VStack alignItems="flex-start" gap="0">
								<Text
									fontSize="xs"
									fontWeight="semibold"
									color="white"
									transition="color 0.25s ease"
									_groupHover={{ color: link.color }}
								>
									{link.title}
								</Text>
								<Text fontSize="2xs" color="gray.500">
									{link.name}
								</Text>
							</VStack>
						</HStack>
						<Box
							opacity={0}
							transform="translateX(-4px)"
							transition="all 0.25s ease"
							_groupHover={{ opacity: 1, transform: "translateX(0)" }}
						>
							<Text fontSize="sm" color={link.color}>
								&rarr;
							</Text>
						</Box>
					</HStack>
				</Box>
			</Link>
		</MotionBox>
	);
}

export function LinksSection() {
	return (
		<Box
			as="section"
			py={{ base: "12", md: "20" }}
			px={{ base: "4", md: "8", lg: "12" }}
			position="relative"
		>
			{/* Section glow */}
			<Box
				position="absolute"
				top="0"
				left="50%"
				transform="translateX(-50%)"
				w="50%"
				h="1px"
				bg="linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.35), transparent)"
			/>

			<VStack maxW="3xl" mx="auto" gap={{ base: "8", md: "12" }}>
				{/* Section header - compact */}
				<VStack gap={{ base: "2", md: "3" }} textAlign="center">
					<MotionBox
						initial={{ opacity: 0, y: 15 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4 }}
					>
						<Text
							fontSize="xs"
							color="#22D3EE"
							fontWeight="semibold"
							letterSpacing="wider"
							textTransform="uppercase"
						>
							Get In Touch
						</Text>
					</MotionBox>
					<MotionBox
						initial={{ opacity: 0, y: 15 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: 0.05 }}
					>
						<Text
							fontSize={{ base: "xl", md: "3xl" }}
							fontWeight="bold"
							color="white"
						>
							{"Let's Connect"}
						</Text>
					</MotionBox>
					<MotionBox
						initial={{ opacity: 0, y: 15 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: 0.1 }}
					>
						<Text
							fontSize={{ base: "xs", md: "sm" }}
							color="gray.400"
							maxW="sm"
						>
							Feel free to reach out through any of these platforms.
						</Text>
					</MotionBox>
				</VStack>

				{/* Links by category - compact */}
				<VStack w="full" gap={{ base: "6", md: "8" }}>
					{allLinks.map((section) => (
						<VStack key={section.category} w="full" gap={{ base: "2", md: "3" }} alignItems="flex-start">
							<Text
								fontSize="2xs"
								fontWeight="semibold"
								color="gray.500"
								letterSpacing="wider"
								textTransform="uppercase"
								pl="1"
							>
								{section.category}
							</Text>
							<MotionBox
								as={Grid}
								variants={containerVariants}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								gridTemplateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }}
								gap={{ base: "2", md: "2.5" }}
								w="full"
							>
								{section.items.map((link, index) => (
									<LinkCard key={index} link={link} />
								))}
							</MotionBox>
						</VStack>
					))}
				</VStack>
			</VStack>
		</Box>
	);
}

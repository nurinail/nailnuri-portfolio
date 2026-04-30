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
		transition: { staggerChildren: 0.05 },
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function LinkCard({ link }: { link: LinksType }) {
	const Icon = iconMap[link.icon] ?? GrGithub;
	
	return (
		<MotionBox variants={itemVariants} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
			<Link href={link.href ?? "#"} target="_blank" rel="noopener noreferrer">
				<Box
					position="relative"
					p="4"
					borderRadius="xl"
					bg="rgba(23, 23, 26, 0.5)"
					backdropFilter="blur(10px)"
					border="1px solid"
					borderColor="rgba(255, 255, 255, 0.06)"
					cursor="pointer"
					transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
					role="group"
					overflow="hidden"
					_hover={{
						borderColor: link.color,
						boxShadow: `0 10px 40px rgba(0, 0, 0, 0.3), 0 0 30px ${link.color}15`,
					}}
				>
					{/* Subtle gradient on hover */}
					<Box
						position="absolute"
						inset="0"
						bg={`linear-gradient(135deg, ${link.color}08, transparent)`}
						opacity={0}
						transition="opacity 0.3s ease"
						_groupHover={{ opacity: 1 }}
					/>
					
					<HStack position="relative" justifyContent="space-between">
						<HStack gap="3">
							<Box
								p="2"
								borderRadius="lg"
								bg={`${link.color}15`}
								transition="all 0.3s ease"
								_groupHover={{ transform: "rotate(-10deg)" }}
							>
								<Icon size={20} color={link.color} />
							</Box>
							<VStack alignItems="flex-start" gap="0">
								<Text
									fontSize="sm"
									fontWeight="semibold"
									color="white"
									transition="color 0.3s ease"
									_groupHover={{ color: link.color }}
								>
									{link.title}
								</Text>
								<Text fontSize="xs" color="gray.500">
									{link.name}
								</Text>
							</VStack>
						</HStack>
						<Box
							opacity={0}
							transform="translateX(-5px)"
							transition="all 0.3s ease"
							_groupHover={{ opacity: 1, transform: "translateX(0)" }}
						>
							<Text fontSize="lg" color={link.color}>
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
			py={{ base: "20", md: "28" }}
			px={{ base: "6", md: "12" }}
			position="relative"
		>
			{/* Section glow */}
			<Box
				position="absolute"
				top="0"
				left="50%"
				transform="translateX(-50%)"
				w="60%"
				h="1px"
				bg="linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.4), transparent)"
			/>

			<VStack maxW="4xl" mx="auto" gap={{ base: "12", md: "16" }}>
				{/* Section header */}
				<VStack gap="4" textAlign="center">
					<MotionBox
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<Text
							fontSize="sm"
							color="#22D3EE"
							fontWeight="semibold"
							letterSpacing="wider"
							textTransform="uppercase"
						>
							Get In Touch
						</Text>
					</MotionBox>
					<MotionBox
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						<Text
							fontSize={{ base: "3xl", md: "4xl" }}
							fontWeight="bold"
							color="white"
						>
							{"Let's Connect"}
						</Text>
					</MotionBox>
					<MotionBox
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<Text
							fontSize={{ base: "md", md: "lg" }}
							color="gray.400"
							maxW="md"
						>
							Feel free to reach out through any of these platforms.
						</Text>
					</MotionBox>
				</VStack>

				{/* Links by category */}
				<VStack w="full" gap="10">
					{allLinks.map((section) => (
						<VStack key={section.category} w="full" gap="4" alignItems="flex-start">
							<Text
								fontSize="xs"
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
								gap="3"
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

"use client";

import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const MotionBox = motion(Box);

const socialLinks = [
	{ icon: FaGithub, href: "https://github.com/nurinail", label: "GitHub" },
	{ icon: FaLinkedinIn, href: "https://www.linkedin.com/in/nailnuri/", label: "LinkedIn" },
	{ icon: MdEmail, href: "mailto:nurinail2003@gmail.com", label: "Email" },
];

export function Footer() {
	return (
		<Box
			as="footer"
			py={{ base: "8", md: "12" }}
			px={{ base: "4", md: "8", lg: "12" }}
			position="relative"
		>
			{/* Top border glow */}
			<Box
				position="absolute"
				top="0"
				left="50%"
				transform="translateX(-50%)"
				w="35%"
				h="1px"
				bg="linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.25), transparent)"
			/>

			<VStack maxW="4xl" mx="auto" gap={{ base: "5", md: "6" }}>
				{/* Logo/Name */}
				<MotionBox
					initial={{ opacity: 0, y: 15 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4 }}
				>
					<Text
						fontSize={{ base: "lg", md: "xl" }}
						fontWeight="bold"
						bgGradient="linear(135deg, #A78BFA, #8B5CF6)"
						bgClip="text"
					>
						Nail Nuri
					</Text>
				</MotionBox>

				{/* Social icons */}
				<MotionBox
					initial={{ opacity: 0, y: 15 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4, delay: 0.05 }}
				>
					<HStack gap="3">
						{socialLinks.map((social, index) => {
							const Icon = social.icon;
							return (
								<Link key={index} href={social.href} target="_blank" rel="noopener noreferrer">
									<Box
										p="2"
										borderRadius="md"
										bg="rgba(255, 255, 255, 0.04)"
										border="1px solid"
										borderColor="rgba(255, 255, 255, 0.06)"
										transition="all 0.25s ease"
										cursor="pointer"
										_hover={{
											bg: "rgba(139, 92, 246, 0.08)",
											borderColor: "rgba(139, 92, 246, 0.25)",
											transform: "translateY(-1px)",
										}}
										_active={{
											transform: "scale(0.95)",
										}}
										aria-label={social.label}
									>
										<Icon size={16} color="#9090B0" />
									</Box>
								</Link>
							);
						})}
					</HStack>
				</MotionBox>

				{/* Copyright */}
				<MotionBox
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4, delay: 0.1 }}
				>
					<Text fontSize="2xs" color="gray.500" textAlign="center">
						&copy; {new Date().getFullYear()} Nail Nuri. Crafted with care.
					</Text>
				</MotionBox>
			</VStack>
		</Box>
	);
}

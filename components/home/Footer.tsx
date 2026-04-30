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
			py={{ base: "12", md: "16" }}
			px={{ base: "6", md: "12" }}
			position="relative"
		>
			{/* Top border glow */}
			<Box
				position="absolute"
				top="0"
				left="50%"
				transform="translateX(-50%)"
				w="40%"
				h="1px"
				bg="linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), transparent)"
			/>

			<VStack maxW="4xl" mx="auto" gap="8">
				{/* Logo/Name */}
				<MotionBox
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<Text
						fontSize="2xl"
						fontWeight="bold"
						bgGradient="linear(135deg, #A78BFA, #8B5CF6)"
						bgClip="text"
					>
						Nail Nuri
					</Text>
				</MotionBox>

				{/* Social icons */}
				<MotionBox
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					<HStack gap="4">
						{socialLinks.map((social, index) => {
							const Icon = social.icon;
							return (
								<Link key={index} href={social.href} target="_blank" rel="noopener noreferrer">
									<Box
										p="3"
										borderRadius="lg"
										bg="rgba(255, 255, 255, 0.05)"
										border="1px solid"
										borderColor="rgba(255, 255, 255, 0.08)"
										transition="all 0.3s ease"
										cursor="pointer"
										_hover={{
											bg: "rgba(139, 92, 246, 0.1)",
											borderColor: "rgba(139, 92, 246, 0.3)",
											transform: "translateY(-2px)",
										}}
										aria-label={social.label}
									>
										<Icon size={18} color="#A0A0C0" />
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
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<Text fontSize="sm" color="gray.500" textAlign="center">
						&copy; {new Date().getFullYear()} Nail Nuri. Crafted with care.
					</Text>
				</MotionBox>
			</VStack>
		</Box>
	);
}

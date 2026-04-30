"use client";

import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const MotionBox = motion(Box);

const socialLinks = [
	{ icon: FaGithub, href: "https://github.com/nurinail", label: "GitHub", color: "#F97315" },
	{ icon: FaLinkedinIn, href: "https://www.linkedin.com/in/nailnuri/", label: "LinkedIn", color: "#0CA5E9" },
	{ icon: MdEmail, href: "mailto:nurinail2003@gmail.com", label: "Email", color: "#EA4335" },
];

export function Footer() {
	return (
		<Box
			as="footer"
			py={{ base: "12", md: "16" }}
			px={{ base: "4", md: "8", lg: "12" }}
			position="relative"
		>
			{/* Top border with glow */}
			<Box
				position="absolute"
				top="0"
				left="50%"
				transform="translateX(-50%)"
				w="40%"
				h="1px"
				bg="linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.4), transparent)"
				boxShadow="0 0 20px rgba(139, 92, 246, 0.2)"
			/>

			<VStack maxW="4xl" mx="auto" gap={{ base: "6", md: "8" }}>
				{/* Logo/Name with glow */}
				<MotionBox
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<Text
						fontSize={{ base: "2xl", md: "3xl" }}
						fontWeight="bold"
						bgGradient="linear(135deg, #fff, #A78BFA, #8B5CF6)"
						bgClip="text"
						filter="drop-shadow(0 0 25px rgba(139, 92, 246, 0.4))"
					>
						Nail Nuri
					</Text>
				</MotionBox>

				{/* Social icons with 3D hover */}
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
									<MotionBox
										p="3"
										borderRadius="xl"
										bg="rgba(255, 255, 255, 0.04)"
										border="1px solid"
										borderColor="rgba(255, 255, 255, 0.08)"
										cursor="pointer"
										whileHover={{
											scale: 1.1,
											y: -4,
											borderColor: `${social.color}50`,
											boxShadow: `0 15px 30px -10px rgba(0, 0, 0, 0.4), 0 0 30px ${social.color}20`,
										}}
										whileTap={{ scale: 0.95 }}
										transition={{ duration: 0.25 }}
										aria-label={social.label}
									>
										<Icon size={20} color="#9090B0" />
									</MotionBox>
								</Link>
							);
						})}
					</HStack>
				</MotionBox>

				{/* Tagline */}
				<MotionBox
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<Text fontSize="sm" color="gray.500" textAlign="center" maxW="sm">
						Crafting immersive digital experiences with passion and precision.
					</Text>
				</MotionBox>

				{/* Copyright */}
				<MotionBox
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					<Text fontSize="xs" color="gray.600" textAlign="center">
						&copy; {new Date().getFullYear()} Nail Nuri. All rights reserved.
					</Text>
				</MotionBox>
			</VStack>
		</Box>
	);
}

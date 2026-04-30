"use client";

import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";
import { toaster, Toaster } from "../ui/toaster";

const MotionBox = motion(Box);
const MotionText = motion(Text);

export function HeroSection() {
	return (
		<Box
			as="section"
			position="relative"
			minH={{ base: "auto", md: "100vh" }}
			py={{ base: "20", md: "0" }}
			display="flex"
			alignItems="center"
			justifyContent="center"
			overflow="hidden"
			px={{ base: "4", md: "8", lg: "12" }}
		>
			<Toaster />
			{/* Animated gradient orbs - smaller on mobile */}
			<MotionBox
				position="absolute"
				top="-15%"
				left="-15%"
				w={{ base: "250px", md: "450px", lg: "600px" }}
				h={{ base: "250px", md: "450px", lg: "600px" }}
				borderRadius="full"
				bg="radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)"
				filter="blur(50px)"
				animate={{
					x: [0, 30, 0],
					y: [0, 20, 0],
					scale: [1, 1.05, 1],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>
			<MotionBox
				position="absolute"
				bottom="-10%"
				right="-10%"
				w={{ base: "200px", md: "350px", lg: "500px" }}
				h={{ base: "200px", md: "350px", lg: "500px" }}
				borderRadius="full"
				bg="radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, transparent 70%)"
				filter="blur(50px)"
				animate={{
					x: [0, -25, 0],
					y: [0, -30, 0],
					scale: [1, 1.1, 1],
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>
			<MotionBox
				position="absolute"
				top="50%"
				right="15%"
				w={{ base: "150px", md: "250px" }}
				h={{ base: "150px", md: "250px" }}
				borderRadius="full"
				bg="radial-gradient(circle, rgba(167, 139, 250, 0.12) 0%, transparent 70%)"
				filter="blur(60px)"
				display={{ base: "none", md: "block" }}
				animate={{
					x: [0, 20, -15, 0],
					y: [0, -20, 15, 0],
				}}
				transition={{
					duration: 12,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>

			{/* Main content */}
			<VStack
				position="relative"
				zIndex={10}
				gap={{ base: "5", md: "8" }}
				textAlign="center"
				maxW="4xl"
			>
				{/* Status badge */}
				<MotionBox
					initial={{ opacity: 0, y: 15 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<HStack
						px="3"
						py="1.5"
						borderRadius="full"
						bg="rgba(139, 92, 246, 0.1)"
						border="1px solid rgba(139, 92, 246, 0.25)"
						backdropFilter="blur(8px)"
					>
						<Box w="1.5" h="1.5" borderRadius="full" bg="#22C55E" />
						<Text color="gray.300" fontSize="xs" fontWeight="medium">
							Available for projects
						</Text>
					</HStack>
				</MotionBox>

				{/* Main headline */}
				<VStack gap={{ base: "2", md: "3" }}>
					<MotionText
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						fontSize={{ base: "2xl", sm: "3xl", md: "5xl", lg: "6xl" }}
						fontWeight="bold"
						lineHeight="1.15"
						color="white"
					>
						{"Hi, I'm "}
						<Box
							as="span"
							bgGradient="linear(135deg, #A78BFA, #8B5CF6, #22D3EE)"
							bgClip="text"
							display="inline"
						>
							Nail Nuri
						</Box>
					</MotionText>
					<MotionText
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.15 }}
						fontSize={{ base: "xl", sm: "2xl", md: "4xl", lg: "5xl" }}
						fontWeight="bold"
						lineHeight="1.15"
						color="white"
					>
						Frontend Developer
					</MotionText>
				</VStack>

				{/* Subtitle */}
				<MotionText
					initial={{ opacity: 0, y: 15 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					fontSize={{ base: "sm", md: "lg" }}
					color="gray.400"
					maxW="xl"
					lineHeight="1.6"
					px={{ base: "2", md: "0" }}
				>
					I craft pixel-perfect, accessible web experiences with React and Next.js.
					Specializing in modern interfaces that blend performance with elegance.
				</MotionText>

				{/* CTA Buttons - Compact mobile layout */}
				<MotionBox
					initial={{ opacity: 0, y: 15 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.25 }}
					w="full"
				>
					<HStack
						gap={{ base: "2", md: "3" }}
						flexWrap="wrap"
						justifyContent="center"
					>
						<Link href="#projects">
							<Box
								as="button"
								px={{ base: "4", md: "6" }}
								py={{ base: "2.5", md: "3" }}
								borderRadius="lg"
								bg="linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)"
								color="white"
								fontWeight="semibold"
								fontSize={{ base: "xs", md: "sm" }}
								display="flex"
								alignItems="center"
								gap="1.5"
								transition="all 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
								boxShadow="0 4px 15px rgba(139, 92, 246, 0.35)"
								_hover={{
									transform: "translateY(-1px) scale(1.02)",
									boxShadow: "0 6px 20px rgba(139, 92, 246, 0.45)",
								}}
								_active={{
									transform: "scale(0.97)",
								}}
							>
								View Projects
								<FiArrowRight size={14} />
							</Box>
						</Link>

						<Box
							as="button"
							onClick={() => {
								toaster.create({
									title: "Want to see my CV?",
									description: "Message me and I'll send it to you!",
									duration: 3000,
									type: "info",
								});
							}}
							px={{ base: "4", md: "6" }}
							py={{ base: "2.5", md: "3" }}
							borderRadius="lg"
							bg="rgba(255, 255, 255, 0.04)"
							border="1px solid rgba(255, 255, 255, 0.08)"
							color="white"
							fontWeight="semibold"
							fontSize={{ base: "xs", md: "sm" }}
							display="flex"
							alignItems="center"
							gap="1.5"
							backdropFilter="blur(8px)"
							transition="all 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
							_hover={{
								bg: "rgba(255, 255, 255, 0.08)",
								borderColor: "rgba(255, 255, 255, 0.15)",
								transform: "translateY(-1px)",
							}}
							_active={{
								transform: "scale(0.97)",
							}}
						>
							<FiDownload size={14} />
							CV
						</Box>

						<Link href="mailto:nurinail2003@gmail.com">
							<Box
								as="button"
								px={{ base: "4", md: "6" }}
								py={{ base: "2.5", md: "3" }}
								borderRadius="lg"
								bg="rgba(255, 255, 255, 0.04)"
								border="1px solid rgba(255, 255, 255, 0.08)"
								color="white"
								fontWeight="semibold"
								fontSize={{ base: "xs", md: "sm" }}
								display="flex"
								alignItems="center"
								gap="1.5"
								backdropFilter="blur(8px)"
								transition="all 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
								_hover={{
									bg: "rgba(255, 255, 255, 0.08)",
									borderColor: "rgba(255, 255, 255, 0.15)",
									transform: "translateY(-1px)",
								}}
								_active={{
									transform: "scale(0.97)",
								}}
							>
								<FiMail size={14} />
								Contact
							</Box>
						</Link>
					</HStack>
				</MotionBox>

				{/* Scroll indicator - hidden on mobile */}
				<MotionBox
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.6 }}
					display={{ base: "none", md: "block" }}
					position="absolute"
					bottom={{ md: "-100px" }}
				>
					<MotionBox
						animate={{ y: [0, 6, 0] }}
						transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
					>
						<VStack gap="1.5">
							<Text fontSize="2xs" color="gray.500" letterSpacing="wider">
								SCROLL
							</Text>
							<Box
								w="5"
								h="8"
								borderRadius="full"
								border="1.5px solid"
								borderColor="gray.600"
								display="flex"
								alignItems="flex-start"
								justifyContent="center"
								pt="1.5"
							>
								<MotionBox
									w="1"
									h="2"
									borderRadius="full"
									bg="gray.500"
									animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
									transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
								/>
							</Box>
						</VStack>
					</MotionBox>
				</MotionBox>
			</VStack>
		</Box>
	);
}

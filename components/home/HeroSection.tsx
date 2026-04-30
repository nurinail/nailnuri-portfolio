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
			minH="100vh"
			display="flex"
			alignItems="center"
			justifyContent="center"
			overflow="hidden"
			px={{ base: "6", md: "12" }}
		>
			<Toaster />
			{/* Animated gradient orbs */}
			<MotionBox
				position="absolute"
				top="-20%"
				left="-10%"
				w={{ base: "400px", md: "600px" }}
				h={{ base: "400px", md: "600px" }}
				borderRadius="full"
				bg="radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, transparent 70%)"
				filter="blur(60px)"
				animate={{
					x: [0, 50, 0],
					y: [0, 30, 0],
					scale: [1, 1.1, 1],
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
				right="-5%"
				w={{ base: "350px", md: "500px" }}
				h={{ base: "350px", md: "500px" }}
				borderRadius="full"
				bg="radial-gradient(circle, rgba(34, 211, 238, 0.2) 0%, transparent 70%)"
				filter="blur(60px)"
				animate={{
					x: [0, -40, 0],
					y: [0, -50, 0],
					scale: [1, 1.15, 1],
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>
			<MotionBox
				position="absolute"
				top="40%"
				right="20%"
				w="300px"
				h="300px"
				borderRadius="full"
				bg="radial-gradient(circle, rgba(167, 139, 250, 0.15) 0%, transparent 70%)"
				filter="blur(80px)"
				animate={{
					x: [0, 30, -20, 0],
					y: [0, -30, 20, 0],
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
				gap={{ base: "8", md: "10" }}
				textAlign="center"
				maxW="4xl"
			>
				{/* Status badge */}
				<MotionBox
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<HStack
						px="4"
						py="2"
						borderRadius="full"
						bg="rgba(139, 92, 246, 0.1)"
						border="1px solid rgba(139, 92, 246, 0.3)"
						backdropFilter="blur(10px)"
					>
						<Box w="2" h="2" borderRadius="full" bg="#22C55E" />
						<Text color="gray.300" fontSize="sm" fontWeight="medium">
							Available for new projects
						</Text>
					</HStack>
				</MotionBox>

				{/* Main headline */}
				<VStack gap="4">
					<MotionText
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.1 }}
						fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
						fontWeight="bold"
						lineHeight="1.1"
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
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
						fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
						fontWeight="bold"
						lineHeight="1.1"
						color="white"
					>
						Frontend Developer
					</MotionText>
				</VStack>

				{/* Subtitle */}
				<MotionText
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					fontSize={{ base: "lg", md: "xl" }}
					color="gray.400"
					maxW="2xl"
					lineHeight="relaxed"
				>
					I craft pixel-perfect, accessible web experiences with React and Next.js.
					Specializing in modern interfaces that blend performance with elegance.
				</MotionText>

				{/* CTA Buttons */}
				<MotionBox
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
				>
					<HStack
						gap="4"
						flexWrap="wrap"
						justifyContent="center"
					>
						<Link href="#projects">
							<Box
								as="button"
								px="8"
								py="4"
								borderRadius="xl"
								bg="linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)"
								color="white"
								fontWeight="semibold"
								fontSize="md"
								display="flex"
								alignItems="center"
								gap="2"
								transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
								boxShadow="0 4px 20px rgba(139, 92, 246, 0.4)"
								_hover={{
									transform: "translateY(-2px) scale(1.02)",
									boxShadow: "0 8px 30px rgba(139, 92, 246, 0.5)",
								}}
								_active={{
									transform: "scale(0.98)",
								}}
							>
								View Projects
								<FiArrowRight />
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
							px="8"
							py="4"
							borderRadius="xl"
							bg="rgba(255, 255, 255, 0.05)"
							border="1px solid rgba(255, 255, 255, 0.1)"
							color="white"
							fontWeight="semibold"
							fontSize="md"
							display="flex"
							alignItems="center"
							gap="2"
							backdropFilter="blur(10px)"
							transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
							_hover={{
								bg: "rgba(255, 255, 255, 0.1)",
								borderColor: "rgba(255, 255, 255, 0.2)",
								transform: "translateY(-2px)",
							}}
							_active={{
								transform: "scale(0.98)",
							}}
						>
							<FiDownload />
							Download CV
						</Box>

						<Link href="mailto:nurinail2003@gmail.com">
							<Box
								as="button"
								px="8"
								py="4"
								borderRadius="xl"
								bg="rgba(255, 255, 255, 0.05)"
								border="1px solid rgba(255, 255, 255, 0.1)"
								color="white"
								fontWeight="semibold"
								fontSize="md"
								display="flex"
								alignItems="center"
								gap="2"
								backdropFilter="blur(10px)"
								transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
								_hover={{
									bg: "rgba(255, 255, 255, 0.1)",
									borderColor: "rgba(255, 255, 255, 0.2)",
									transform: "translateY(-2px)",
								}}
								_active={{
									transform: "scale(0.98)",
								}}
							>
								<FiMail />
								Contact Me
							</Box>
						</Link>
					</HStack>
				</MotionBox>

				{/* Scroll indicator */}
				<MotionBox
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.8 }}
					position="absolute"
					bottom="-120px"
				>
					<MotionBox
						animate={{ y: [0, 8, 0] }}
						transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
					>
						<VStack gap="2">
							<Text fontSize="xs" color="gray.500" letterSpacing="wider">
								SCROLL DOWN
							</Text>
							<Box
								w="6"
								h="10"
								borderRadius="full"
								border="2px solid"
								borderColor="gray.600"
								display="flex"
								alignItems="flex-start"
								justifyContent="center"
								pt="2"
							>
								<MotionBox
									w="1.5"
									h="3"
									borderRadius="full"
									bg="gray.500"
									animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
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

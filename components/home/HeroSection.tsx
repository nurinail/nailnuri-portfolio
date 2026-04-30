"use client";

import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";
import { toaster, Toaster } from "../ui/toaster";

const MotionBox = motion(Box);
const MotionText = motion(Text);

// Mouse follower component for parallax effect
function useMouseParallax() {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
	const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

	const handleMouseMove = (e: React.MouseEvent) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;
		mouseX.set((e.clientX - centerX) / 25);
		mouseY.set((e.clientY - centerY) / 25);
	};

	return { smoothX, smoothY, handleMouseMove };
}

export function HeroSection() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { smoothX, smoothY, handleMouseMove } = useMouseParallax();

	// Transform values for 3D parallax layers
	const layer1X = useTransform(smoothX, (x) => x * 2);
	const layer1Y = useTransform(smoothY, (y) => y * 2);
	const layer2X = useTransform(smoothX, (x) => x * 1.5);
	const layer2Y = useTransform(smoothY, (y) => y * 1.5);
	const layer3X = useTransform(smoothX, (x) => x * 0.8);
	const layer3Y = useTransform(smoothY, (y) => y * 0.8);

	return (
		<Box
			ref={containerRef}
			as="section"
			position="relative"
			minH="100vh"
			display="flex"
			alignItems="center"
			justifyContent="center"
			overflow="hidden"
			px={{ base: "4", md: "8", lg: "12" }}
			onMouseMove={handleMouseMove}
			style={{ perspective: "1200px" }}
		>
			<Toaster />

			{/* 3D Depth layers - Neon rings */}
			<MotionBox
				position="absolute"
				w={{ base: "350px", md: "600px", lg: "800px" }}
				h={{ base: "350px", md: "600px", lg: "800px" }}
				borderRadius="full"
				border="1px solid"
				borderColor="rgba(139, 92, 246, 0.15)"
				style={{ x: layer1X, y: layer1Y }}
				animate={{
					rotate: 360,
					scale: [1, 1.02, 1],
				}}
				transition={{
					rotate: { duration: 60, repeat: Infinity, ease: "linear" },
					scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
				}}
			/>
			<MotionBox
				position="absolute"
				w={{ base: "280px", md: "480px", lg: "640px" }}
				h={{ base: "280px", md: "480px", lg: "640px" }}
				borderRadius="full"
				border="1px solid"
				borderColor="rgba(34, 211, 238, 0.12)"
				style={{ x: layer2X, y: layer2Y }}
				animate={{
					rotate: -360,
				}}
				transition={{
					duration: 45,
					repeat: Infinity,
					ease: "linear",
				}}
			/>
			<MotionBox
				position="absolute"
				w={{ base: "200px", md: "360px", lg: "480px" }}
				h={{ base: "200px", md: "360px", lg: "480px" }}
				borderRadius="full"
				border="2px solid"
				borderColor="rgba(139, 92, 246, 0.2)"
				boxShadow="0 0 60px rgba(139, 92, 246, 0.15), inset 0 0 60px rgba(139, 92, 246, 0.05)"
				style={{ x: layer3X, y: layer3Y }}
				animate={{
					rotate: 360,
					scale: [1, 1.05, 1],
				}}
				transition={{
					rotate: { duration: 30, repeat: Infinity, ease: "linear" },
					scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
				}}
			/>

			{/* Floating neon accents */}
			<MotionBox
				position="absolute"
				top="15%"
				left="10%"
				w="4px"
				h="4px"
				borderRadius="full"
				bg="#8B5CF6"
				boxShadow="0 0 20px 8px rgba(139, 92, 246, 0.4)"
				style={{ x: layer1X, y: layer1Y }}
				animate={{
					opacity: [0.4, 1, 0.4],
					scale: [1, 1.5, 1],
				}}
				transition={{ duration: 3, repeat: Infinity }}
			/>
			<MotionBox
				position="absolute"
				top="25%"
				right="15%"
				w="3px"
				h="3px"
				borderRadius="full"
				bg="#22D3EE"
				boxShadow="0 0 15px 6px rgba(34, 211, 238, 0.5)"
				style={{ x: layer2X, y: layer2Y }}
				animate={{
					opacity: [0.3, 1, 0.3],
				}}
				transition={{ duration: 4, repeat: Infinity, delay: 1 }}
			/>
			<MotionBox
				position="absolute"
				bottom="30%"
				left="20%"
				w="2px"
				h="2px"
				borderRadius="full"
				bg="#A78BFA"
				boxShadow="0 0 12px 5px rgba(167, 139, 250, 0.5)"
				style={{ x: layer3X, y: layer3Y }}
				animate={{
					opacity: [0.5, 1, 0.5],
				}}
				transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
			/>
			<MotionBox
				position="absolute"
				bottom="20%"
				right="25%"
				w="3px"
				h="3px"
				borderRadius="full"
				bg="#8B5CF6"
				boxShadow="0 0 18px 7px rgba(139, 92, 246, 0.45)"
				style={{ x: layer1X, y: layer1Y }}
				animate={{
					opacity: [0.4, 1, 0.4],
				}}
				transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
			/>

			{/* Gradient glow spheres */}
			<MotionBox
				position="absolute"
				top="-20%"
				left="-10%"
				w={{ base: "300px", md: "500px" }}
				h={{ base: "300px", md: "500px" }}
				borderRadius="full"
				bg="radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 60%)"
				filter="blur(60px)"
				style={{ x: layer1X, y: layer1Y }}
			/>
			<MotionBox
				position="absolute"
				bottom="-15%"
				right="-10%"
				w={{ base: "250px", md: "450px" }}
				h={{ base: "250px", md: "450px" }}
				borderRadius="full"
				bg="radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, transparent 60%)"
				filter="blur(60px)"
				style={{ x: layer2X, y: layer2Y }}
			/>

			{/* Main content with 3D transform */}
			<MotionBox
				position="relative"
				zIndex={10}
				style={{
					x: layer3X,
					y: layer3Y,
					transformStyle: "preserve-3d",
				}}
			>
				<VStack gap={{ base: "5", md: "7" }} textAlign="center" maxW="4xl">
					{/* Status badge with glow */}
					<MotionBox
						initial={{ opacity: 0, y: 20, scale: 0.9 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						transition={{ duration: 0.6 }}
					>
						<HStack
							px="4"
							py="2"
							borderRadius="full"
							bg="rgba(139, 92, 246, 0.08)"
							border="1px solid rgba(139, 92, 246, 0.25)"
							backdropFilter="blur(12px)"
							boxShadow="0 0 30px rgba(139, 92, 246, 0.15)"
						>
							<MotionBox
								w="2"
								h="2"
								borderRadius="full"
								bg="#22C55E"
								boxShadow="0 0 10px rgba(34, 197, 94, 0.6)"
								animate={{ opacity: [1, 0.5, 1] }}
								transition={{ duration: 2, repeat: Infinity }}
							/>
							<Text color="gray.300" fontSize="xs" fontWeight="medium" letterSpacing="wide">
								Available for projects
							</Text>
						</HStack>
					</MotionBox>

					{/* Main headline with neon glow */}
					<VStack gap={{ base: "1", md: "2" }}>
						<MotionBox
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.15 }}
						>
							<MotionText
								fontSize={{ base: "sm", md: "md" }}
								color="gray.400"
								fontWeight="medium"
								letterSpacing="widest"
								textTransform="uppercase"
								animate={{
									opacity: [0.6, 1, 0.6],
								}}
								transition={{ duration: 3, repeat: Infinity }}
							>
								Frontend Developer
							</MotionText>
						</MotionBox>
						<MotionText
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.2 }}
							fontSize={{ base: "4xl", sm: "5xl", md: "7xl", lg: "8xl" }}
							fontWeight="bold"
							lineHeight="1"
							position="relative"
						>
							<Box
								as="span"
								position="relative"
								display="inline-block"
								bgGradient="linear(135deg, #fff 0%, #A78BFA 50%, #8B5CF6 75%, #22D3EE 100%)"
								bgClip="text"
								filter="drop-shadow(0 0 40px rgba(139, 92, 246, 0.4))"
							>
								Nail Nuri
							</Box>
						</MotionText>
					</VStack>

					{/* Subtitle with typewriter feel */}
					<MotionText
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.35 }}
						fontSize={{ base: "sm", md: "lg" }}
						color="gray.400"
						maxW="lg"
						lineHeight="1.7"
						px={{ base: "2", md: "0" }}
					>
						Crafting immersive digital experiences with{" "}
						<Box as="span" color="#A78BFA" fontWeight="semibold">
							React
						</Box>{" "}
						and{" "}
						<Box as="span" color="#22D3EE" fontWeight="semibold">
							Next.js
						</Box>
						. Specializing in pixel-perfect interfaces that blend performance with elegance.
					</MotionText>

					{/* CTA Buttons with 3D hover effect */}
					<MotionBox
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.45 }}
					>
						<HStack gap={{ base: "2", md: "3" }} flexWrap="wrap" justifyContent="center">
							<Link href="#projects">
								<MotionBox
									as="button"
									px={{ base: "5", md: "7" }}
									py={{ base: "3", md: "3.5" }}
									borderRadius="xl"
									bg="linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)"
									color="white"
									fontWeight="semibold"
									fontSize={{ base: "sm", md: "md" }}
									display="flex"
									alignItems="center"
									gap="2"
									position="relative"
									overflow="hidden"
									boxShadow="0 8px 30px rgba(139, 92, 246, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)"
									whileHover={{
										scale: 1.03,
										y: -2,
										boxShadow: "0 12px 40px rgba(139, 92, 246, 0.5), inset 0 1px 0 rgba(255,255,255,0.15)",
									}}
									whileTap={{ scale: 0.97 }}
									transition={{ duration: 0.2 }}
									_before={{
										content: '""',
										position: "absolute",
										inset: 0,
										bg: "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 50%)",
										pointerEvents: "none",
									}}
								>
									View Projects
									<FiArrowRight size={16} />
								</MotionBox>
							</Link>

							<MotionBox
								as="button"
								onClick={() => {
									toaster.create({
										title: "Want to see my CV?",
										description: "Message me and I'll send it to you!",
										duration: 3000,
										type: "info",
									});
								}}
								px={{ base: "5", md: "7" }}
								py={{ base: "3", md: "3.5" }}
								borderRadius="xl"
								bg="rgba(255, 255, 255, 0.03)"
								border="1px solid rgba(255, 255, 255, 0.1)"
								color="white"
								fontWeight="semibold"
								fontSize={{ base: "sm", md: "md" }}
								display="flex"
								alignItems="center"
								gap="2"
								backdropFilter="blur(12px)"
								whileHover={{
									scale: 1.03,
									y: -2,
									borderColor: "rgba(139, 92, 246, 0.4)",
									boxShadow: "0 8px 30px rgba(139, 92, 246, 0.15)",
								}}
								whileTap={{ scale: 0.97 }}
								transition={{ duration: 0.2 }}
							>
								<FiDownload size={16} />
								Resume
							</MotionBox>

							<Link href="mailto:nurinail2003@gmail.com">
								<MotionBox
									as="button"
									px={{ base: "5", md: "7" }}
									py={{ base: "3", md: "3.5" }}
									borderRadius="xl"
									bg="rgba(255, 255, 255, 0.03)"
									border="1px solid rgba(255, 255, 255, 0.1)"
									color="white"
									fontWeight="semibold"
									fontSize={{ base: "sm", md: "md" }}
									display="flex"
									alignItems="center"
									gap="2"
									backdropFilter="blur(12px)"
									whileHover={{
										scale: 1.03,
										y: -2,
										borderColor: "rgba(34, 211, 238, 0.4)",
										boxShadow: "0 8px 30px rgba(34, 211, 238, 0.15)",
									}}
									whileTap={{ scale: 0.97 }}
									transition={{ duration: 0.2 }}
								>
									<FiMail size={16} />
									Contact
								</MotionBox>
							</Link>
						</HStack>
					</MotionBox>
				</VStack>
			</MotionBox>

			{/* Scroll indicator with neon effect */}
			<MotionBox
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 1 }}
				position="absolute"
				bottom={{ base: "6", md: "10" }}
				left="50%"
				transform="translateX(-50%)"
			>
				<MotionBox
					animate={{ y: [0, 8, 0] }}
					transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
				>
					<VStack gap="2">
						<Text fontSize="2xs" color="gray.500" letterSpacing="widest" textTransform="uppercase">
							Scroll
						</Text>
						<Box
							w="5"
							h="9"
							borderRadius="full"
							border="2px solid"
							borderColor="rgba(139, 92, 246, 0.4)"
							display="flex"
							alignItems="flex-start"
							justifyContent="center"
							pt="2"
							boxShadow="0 0 15px rgba(139, 92, 246, 0.2)"
						>
							<MotionBox
								w="1.5"
								h="2.5"
								borderRadius="full"
								bg="#8B5CF6"
								boxShadow="0 0 10px rgba(139, 92, 246, 0.6)"
								animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
								transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
							/>
						</Box>
					</VStack>
				</MotionBox>
			</MotionBox>
		</Box>
	);
}

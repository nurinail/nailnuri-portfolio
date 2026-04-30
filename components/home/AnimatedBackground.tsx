"use client";

import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

// Fewer particles on mobile for performance
const particles = Array.from({ length: 15 }, (_, i) => ({
	id: i,
	size: Math.random() * 3 + 1.5,
	x: Math.random() * 100,
	y: Math.random() * 100,
	duration: Math.random() * 25 + 20,
	delay: Math.random() * 8,
}));

export function AnimatedBackground() {
	return (
		<Box
			position="fixed"
			inset="0"
			zIndex="0"
			pointerEvents="none"
			overflow="hidden"
		>
			{/* Main gradient background */}
			<Box
				position="absolute"
				inset="0"
				bg="linear-gradient(180deg, #0a0a0f 0%, #0d1219 50%, #0a0a0f 100%)"
			/>

			{/* Grid pattern overlay - subtle */}
			<Box
				position="absolute"
				inset="0"
				backgroundImage="linear-gradient(rgba(139, 92, 246, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.02) 1px, transparent 1px)"
				backgroundSize={{ base: "40px 40px", md: "60px 60px" }}
				opacity={0.4}
			/>

			{/* Gradient orbs - optimized for mobile */}
			<MotionBox
				position="absolute"
				top="-15%"
				left="-15%"
				w={{ base: "60vw", md: "45vw" }}
				h={{ base: "60vw", md: "45vw" }}
				maxW="700px"
				maxH="700px"
				borderRadius="full"
				bg="radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)"
				filter="blur(80px)"
				animate={{
					x: [0, 60, 0],
					y: [0, 40, 0],
				}}
				transition={{
					duration: 25,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>
			<MotionBox
				position="absolute"
				bottom="-15%"
				right="-15%"
				w={{ base: "55vw", md: "40vw" }}
				h={{ base: "55vw", md: "40vw" }}
				maxW="600px"
				maxH="600px"
				borderRadius="full"
				bg="radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%)"
				filter="blur(80px)"
				animate={{
					x: [0, -50, 0],
					y: [0, -40, 0],
				}}
				transition={{
					duration: 30,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>
			<MotionBox
				position="absolute"
				top="45%"
				left="55%"
				w={{ base: "40vw", md: "25vw" }}
				h={{ base: "40vw", md: "25vw" }}
				maxW="350px"
				maxH="350px"
				borderRadius="full"
				bg="radial-gradient(circle, rgba(167, 139, 250, 0.06) 0%, transparent 70%)"
				filter="blur(70px)"
				display={{ base: "none", sm: "block" }}
				animate={{
					x: [0, 40, -25, 0],
					y: [0, -30, 25, 0],
				}}
				transition={{
					duration: 22,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>

			{/* Floating particles - fewer for mobile performance */}
			{particles.map((particle) => (
				<MotionBox
					key={particle.id}
					position="absolute"
					top={`${particle.y}%`}
					left={`${particle.x}%`}
					w={`${particle.size}px`}
					h={`${particle.size}px`}
					borderRadius="full"
					bg="rgba(139, 92, 246, 0.35)"
					boxShadow="0 0 8px rgba(139, 92, 246, 0.25)"
					animate={{
						y: [0, -80, 0],
						x: [0, Math.random() * 30 - 15, 0],
						opacity: [0, 0.7, 0],
					}}
					transition={{
						duration: particle.duration,
						repeat: Infinity,
						delay: particle.delay,
						ease: "easeInOut",
					}}
				/>
			))}

			{/* Radial vignette */}
			<Box
				position="absolute"
				inset="0"
				bg="radial-gradient(ellipse at center, transparent 0%, #0a0a0f 75%)"
				pointerEvents="none"
			/>
		</Box>
	);
}

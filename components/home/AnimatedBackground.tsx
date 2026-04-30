"use client";

import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

// Floating particles configuration
const particles = Array.from({ length: 30 }, (_, i) => ({
	id: i,
	size: Math.random() * 4 + 2,
	x: Math.random() * 100,
	y: Math.random() * 100,
	duration: Math.random() * 20 + 15,
	delay: Math.random() * 5,
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

			{/* Grid pattern overlay */}
			<Box
				position="absolute"
				inset="0"
				backgroundImage="linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px)"
				backgroundSize="60px 60px"
				opacity={0.5}
			/>

			{/* Gradient orbs */}
			<MotionBox
				position="absolute"
				top="-20%"
				left="-10%"
				w="50vw"
				h="50vw"
				maxW="800px"
				maxH="800px"
				borderRadius="full"
				bg="radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)"
				filter="blur(100px)"
				animate={{
					x: [0, 100, 0],
					y: [0, 50, 0],
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>
			<MotionBox
				position="absolute"
				bottom="-20%"
				right="-10%"
				w="45vw"
				h="45vw"
				maxW="700px"
				maxH="700px"
				borderRadius="full"
				bg="radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, transparent 70%)"
				filter="blur(100px)"
				animate={{
					x: [0, -80, 0],
					y: [0, -60, 0],
				}}
				transition={{
					duration: 25,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>
			<MotionBox
				position="absolute"
				top="40%"
				left="60%"
				w="30vw"
				h="30vw"
				maxW="400px"
				maxH="400px"
				borderRadius="full"
				bg="radial-gradient(circle, rgba(167, 139, 250, 0.08) 0%, transparent 70%)"
				filter="blur(80px)"
				animate={{
					x: [0, 50, -30, 0],
					y: [0, -40, 30, 0],
				}}
				transition={{
					duration: 18,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>

			{/* Floating particles */}
			{particles.map((particle) => (
				<MotionBox
					key={particle.id}
					position="absolute"
					top={`${particle.y}%`}
					left={`${particle.x}%`}
					w={`${particle.size}px`}
					h={`${particle.size}px`}
					borderRadius="full"
					bg="rgba(139, 92, 246, 0.4)"
					boxShadow="0 0 10px rgba(139, 92, 246, 0.3)"
					animate={{
						y: [0, -100, 0],
						x: [0, Math.random() * 50 - 25, 0],
						opacity: [0, 0.8, 0],
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
				bg="radial-gradient(ellipse at center, transparent 0%, #0a0a0f 80%)"
				pointerEvents="none"
			/>
		</Box>
	);
}

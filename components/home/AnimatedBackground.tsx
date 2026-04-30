"use client";

import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

// Floating particles with varied sizes and colors
const particles = Array.from({ length: 25 }, (_, i) => ({
	id: i,
	size: Math.random() * 4 + 2,
	x: Math.random() * 100,
	y: Math.random() * 100,
	duration: Math.random() * 20 + 15,
	delay: Math.random() * 10,
	color: Math.random() > 0.5 ? "rgba(139, 92, 246, 0.5)" : "rgba(34, 211, 238, 0.4)",
	glowColor: Math.random() > 0.5 ? "rgba(139, 92, 246, 0.3)" : "rgba(34, 211, 238, 0.25)",
}));

// Neon lines
const neonLines = [
	{ rotation: 45, top: "20%", left: "10%", width: "150px", delay: 0 },
	{ rotation: -30, top: "60%", right: "15%", width: "120px", delay: 2 },
	{ rotation: 15, bottom: "30%", left: "20%", width: "100px", delay: 4 },
	{ rotation: -45, top: "40%", right: "25%", width: "80px", delay: 1 },
];

export function AnimatedBackground() {
	return (
		<Box
			position="fixed"
			inset="0"
			zIndex="0"
			pointerEvents="none"
			overflow="hidden"
		>
			{/* Deep space gradient */}
			<Box
				position="absolute"
				inset="0"
				bg="linear-gradient(180deg, #050508 0%, #0a0a12 30%, #08080f 70%, #050508 100%)"
			/>

			{/* Noise texture overlay */}
			<Box
				position="absolute"
				inset="0"
				opacity={0.03}
				backgroundImage={`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}
			/>

			{/* Perspective grid - deeper */}
			<Box
				position="absolute"
				inset="0"
				backgroundImage="
					linear-gradient(rgba(139, 92, 246, 0.015) 1px, transparent 1px),
					linear-gradient(90deg, rgba(139, 92, 246, 0.015) 1px, transparent 1px)
				"
				backgroundSize="80px 80px"
				style={{
					perspective: "1000px",
					transform: "rotateX(60deg) translateY(-50%)",
					transformOrigin: "center center",
				}}
			/>

			{/* Animated gradient orbs - more dramatic */}
			<MotionBox
				position="absolute"
				top="-20%"
				left="-15%"
				w="60vw"
				h="60vw"
				maxW="800px"
				maxH="800px"
				borderRadius="full"
				bg="radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, rgba(139, 92, 246, 0.02) 40%, transparent 70%)"
				filter="blur(60px)"
				animate={{
					x: [0, 80, 0],
					y: [0, 60, 0],
					scale: [1, 1.1, 1],
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>
			<MotionBox
				position="absolute"
				bottom="-25%"
				right="-20%"
				w="55vw"
				h="55vw"
				maxW="700px"
				maxH="700px"
				borderRadius="full"
				bg="radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, rgba(34, 211, 238, 0.02) 40%, transparent 70%)"
				filter="blur(60px)"
				animate={{
					x: [0, -70, 0],
					y: [0, -50, 0],
					scale: [1, 1.15, 1],
				}}
				transition={{
					duration: 25,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>
			<MotionBox
				position="absolute"
				top="35%"
				left="60%"
				w="35vw"
				h="35vw"
				maxW="450px"
				maxH="450px"
				borderRadius="full"
				bg="radial-gradient(circle, rgba(167, 139, 250, 0.08) 0%, transparent 60%)"
				filter="blur(50px)"
				animate={{
					x: [0, 50, -30, 0],
					y: [0, -40, 30, 0],
					opacity: [0.5, 0.8, 0.5],
				}}
				transition={{
					duration: 18,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>

			{/* Neon accent lines */}
			{neonLines.map((line, i) => (
				<MotionBox
					key={i}
					position="absolute"
					{...{ top: line.top, left: line.left, right: line.right, bottom: line.bottom }}
					w={line.width}
					h="1px"
					bg="linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.4), transparent)"
					boxShadow="0 0 15px rgba(139, 92, 246, 0.3)"
					style={{ rotate: `${line.rotation}deg` }}
					animate={{
						opacity: [0, 0.8, 0],
						scaleX: [0, 1, 0],
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						delay: line.delay,
						ease: "easeInOut",
					}}
				/>
			))}

			{/* Floating particles with glow */}
			{particles.map((particle) => (
				<MotionBox
					key={particle.id}
					position="absolute"
					top={`${particle.y}%`}
					left={`${particle.x}%`}
					w={`${particle.size}px`}
					h={`${particle.size}px`}
					borderRadius="full"
					bg={particle.color}
					boxShadow={`0 0 ${particle.size * 4}px ${particle.glowColor}`}
					animate={{
						y: [0, -100, 0],
						x: [0, Math.random() * 40 - 20, 0],
						opacity: [0, 0.8, 0],
						scale: [0.5, 1, 0.5],
					}}
					transition={{
						duration: particle.duration,
						repeat: Infinity,
						delay: particle.delay,
						ease: "easeInOut",
					}}
				/>
			))}

			{/* Corner accent glows */}
			<Box
				position="absolute"
				top="0"
				left="0"
				w="400px"
				h="400px"
				bg="radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)"
				pointerEvents="none"
			/>
			<Box
				position="absolute"
				bottom="0"
				right="0"
				w="400px"
				h="400px"
				bg="radial-gradient(circle at 100% 100%, rgba(34, 211, 238, 0.06) 0%, transparent 50%)"
				pointerEvents="none"
			/>

			{/* Radial vignette - stronger */}
			<Box
				position="absolute"
				inset="0"
				bg="radial-gradient(ellipse at center, transparent 0%, rgba(5, 5, 8, 0.4) 50%, #050508 85%)"
				pointerEvents="none"
			/>
		</Box>
	);
}

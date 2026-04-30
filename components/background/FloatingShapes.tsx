"use client";

import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const shapes = Array.from({ length: 20 });

// Gradient blur orbs configuration
const gradientOrbs = [
	{ color: "rgba(139, 92, 246, 0.15)", size: 400, top: "10%", left: "20%", duration: 25 },
	{ color: "rgba(34, 211, 238, 0.12)", size: 350, top: "60%", left: "70%", duration: 30 },
	{ color: "rgba(167, 139, 250, 0.1)", size: 300, top: "80%", left: "10%", duration: 22 },
	{ color: "rgba(0, 127, 240, 0.08)", size: 450, top: "30%", left: "80%", duration: 28 },
];

export function FloatingShapes() {
	return (
		<Box
			position="fixed"
			top="0"
			left="0"
			w="full"
			h="full"
			zIndex="0"
			pointerEvents="none"
			overflow="hidden"
		>
			{/* Gradient blur orbs */}
			{gradientOrbs.map((orb, i) => (
				<MotionBox
					key={`orb-${i}`}
					position="absolute"
					top={orb.top}
					left={orb.left}
					w={`${orb.size}px`}
					h={`${orb.size}px`}
					borderRadius="full"
					bg={orb.color}
					filter="blur(80px)"
					animate={{
						x: [0, 50, -30, 0],
						y: [0, -40, 60, 0],
						scale: [1, 1.1, 0.95, 1],
					}}
					transition={{
						duration: orb.duration,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
			))}

			{/* Floating geometric shapes */}
			{shapes.map((_, i) => {
				const size = Math.random() * 25 + 8;
				const startX = Math.random() * 100;
				const startY = Math.random() * 100;
				const duration = Math.random() * 15 + 12;
				const isCircle = Math.random() > 0.5;
				const hasGradient = Math.random() > 0.6;

				return (
					<MotionBox
						key={i as number}
						position="absolute"
						top={`${startY}%`}
						left={`${startX}%`}
						w={`${size}px`}
						h={`${size}px`}
						border="1px solid"
						borderColor={hasGradient ? "transparent" : "rgba(167, 139, 250, 0.3)"}
						borderRadius={isCircle ? "full" : "md"}
						bg={hasGradient ? "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(34, 211, 238, 0.2))" : "transparent"}
						boxShadow={hasGradient ? "0 0 20px rgba(139, 92, 246, 0.15)" : "0 0 12px rgba(167, 139, 250, 0.1)"}
						animate={{
							x: [0, Math.random() * 80 - 40, Math.random() * 80 - 40, 0],
							y: [0, Math.random() * 80 - 40, Math.random() * 80 - 40, 0],
							rotate: [0, 180, 360],
							opacity: [0.15, 0.5, 0.15],
						}}
						transition={{
							duration,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>
				);
			})}
		</Box>
	);
}

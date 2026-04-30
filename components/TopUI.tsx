"use client";

import { Box, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Cube from "./animation/Cube";

const MotionBox = motion(Box);

export function TopUI() {
	return (
		<Center h="xs" w="xs" position="relative">
			{/* Animated glow ring behind cube */}
			<MotionBox
				position="absolute"
				w="280px"
				h="280px"
				borderRadius="full"
				bg="transparent"
				animate={{
					boxShadow: [
						"0 0 60px 20px rgba(139, 92, 246, 0.15), 0 0 100px 40px rgba(34, 211, 238, 0.08)",
						"0 0 80px 30px rgba(34, 211, 238, 0.18), 0 0 120px 50px rgba(139, 92, 246, 0.1)",
						"0 0 60px 20px rgba(139, 92, 246, 0.15), 0 0 100px 40px rgba(34, 211, 238, 0.08)",
					],
				}}
				transition={{
					duration: 4,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>
			{/* Secondary pulse ring */}
			<MotionBox
				position="absolute"
				w="320px"
				h="320px"
				borderRadius="full"
				border="1px solid"
				borderColor="rgba(139, 92, 246, 0.1)"
				animate={{
					scale: [1, 1.05, 1],
					opacity: [0.3, 0.6, 0.3],
				}}
				transition={{
					duration: 3,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>
			<Cube />
		</Center>
	);
}

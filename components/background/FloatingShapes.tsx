"use client";

import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const shapes = Array.from({ length: 30 });

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
			{shapes.map((_, i) => {
				const size = Math.random() * 30 + 10;
				const startX = Math.random() * 100;
				const duration = Math.random() * 10 + 10; // 🔥 daha sürətli

				return (
					<MotionBox
						key={i as number}
						position="absolute"
						top={`${Math.random() * 100}%`}
						left={`${startX}%`}
						w={`${size}px`}
						h={`${size}px`}
						border="1px solid "
						borderColor="grayLight.500"
						boxShadowColor="grayLight.500"
						borderRadius={Math.random() > 0.5 ? "full" : "md"}
						boxShadow="0 0 8px "
						animate={{
							x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
							y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
							rotate: [0, 180, 360],
							opacity: [0.2, 0.6, 0.2],
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

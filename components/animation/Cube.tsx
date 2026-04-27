"use client";

import { Box, Center } from "@chakra-ui/react";
import { useAnimationFrame } from "framer-motion";

import { useRef } from "react";

export default function Cube() {
	const ref = useRef<HTMLDivElement>(null);

	useAnimationFrame((t) => {
		if (!ref.current) return;

		const rotate = Math.sin(t / 10000) * 200;
		const y = (1 + Math.sin(t / 1000)) * -50;

		ref.current.style.transform = `
      translateY(${y}px)
      rotateX(${rotate}deg)
      rotateY(${rotate}deg)
    `;
	});

	return (
		<Box mx="auto" perspective="800px" w="200px" h="200px">
			<Box
				ref={ref}
				w="200px"
				h="200px"
				position="relative"
				style={{ transformStyle: "preserve-3d" }}
			>
				<CubeSide
					bg="linear-gradient(135deg, #00F5FF, #007CF0)"
					transform="rotateY(0deg) translateZ(100px)"
				/>
				<CubeSide
					bg="linear-gradient(135deg, #00C6FF, #0072FF)"
					transform="rotateY(90deg) translateZ(100px)"
				/>
				<CubeSide
					bg="linear-gradient(135deg, #5EE7DF, #66A6FF)"
					transform="rotateY(180deg) translateZ(100px)"
				/>
				<CubeSide
					bg="linear-gradient(135deg, #43E97B, #38F9D7)"
					transform="rotateY(-90deg) translateZ(100px)"
				/>
				<CubeSide
					bg="linear-gradient(135deg, #30CFD0, #330867)"
					transform="rotateX(90deg) translateZ(100px)"
				/>
				<CubeSide
					bg="linear-gradient(135deg, #0093E9, #80D0C7)"
					transform="rotateX(-90deg) translateZ(100px)"
				/>
			</Box>
		</Box>
	);
}

type CubeSideProps = {
	bg: string;
	transform: string;
};

function CubeSide({ bg, transform }: CubeSideProps) {
	return (
		<Center
			position="absolute"
			w="100%"
			h="100%"
			bg={bg}
			opacity={0.6}
			style={{ transform }}
		>
			Salammm
		</Center>
	);
}

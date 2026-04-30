"use client";

import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
	FiAlertCircle,
	FiArrowUpRight,
	FiCalendar,
	FiCloud,
	FiHelpCircle,
	FiLayers,
} from "react-icons/fi";
import { IoCarSport } from "react-icons/io5";
import { projects } from "@/components/utils/utils";

const MotionBox = motion(Box);

const iconMap = {
	system: FiLayers,
	quiz: FiHelpCircle,
	weather: FiCloud,
	report: FiAlertCircle,
	age: FiCalendar,
	rent: IoCarSport,
};

interface TiltCardProps {
	children: React.ReactNode;
	project: (typeof projects)[0];
}

// 3D Tilt Card Component
function TiltCard({ children, project }: TiltCardProps) {
	const [isHovered, setIsHovered] = useState(false);
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
		stiffness: 200,
		damping: 20,
	});
	const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
		stiffness: 200,
		damping: 20,
	});

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = (e.clientX - rect.left) / rect.width - 0.5;
		const y = (e.clientY - rect.top) / rect.height - 0.5;
		mouseX.set(x);
		mouseY.set(y);
	};

	const handleMouseLeave = () => {
		mouseX.set(0);
		mouseY.set(0);
		setIsHovered(false);
	};

	return (
		<MotionBox
			style={{
				perspective: "1000px",
			}}
		>
			<MotionBox
				style={{
					rotateX,
					rotateY,
					transformStyle: "preserve-3d",
				}}
				onMouseMove={handleMouseMove}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={handleMouseLeave}
				whileTap={{ scale: 0.98 }}
			>
				<Box
					position="relative"
					p={{ base: "5", md: "6" }}
					borderRadius="2xl"
					bg="rgba(15, 15, 20, 0.7)"
					backdropFilter="blur(20px)"
					border="1px solid"
					borderColor={isHovered ? project.color : "rgba(255, 255, 255, 0.06)"}
					overflow="hidden"
					cursor="pointer"
					transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
					role="group"
					h="full"
					minH={{ base: "180px", md: "200px" }}
					display="flex"
					flexDirection="column"
					boxShadow={
						isHovered
							? `0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 50px ${project.color}20, inset 0 1px 0 rgba(255,255,255,0.05)`
							: "0 10px 40px -10px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.03)"
					}
					style={{
						transform: "translateZ(0)",
					}}
				>
					{/* Gradient border effect */}
					<Box
						position="absolute"
						inset="-1px"
						borderRadius="2xl"
						padding="1px"
						background={`linear-gradient(135deg, ${project.color}60, transparent 40%, ${project.color}30)`}
						WebkitMask="linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)"
						WebkitMaskComposite="xor"
						maskComposite="exclude"
						opacity={isHovered ? 1 : 0}
						transition="opacity 0.4s ease"
						pointerEvents="none"
					/>

					{/* Spotlight effect */}
					<MotionBox
						position="absolute"
						top="0"
						left="0"
						w="200%"
						h="200%"
						bg={`radial-gradient(circle at ${isHovered ? "var(--mouse-x, 50%)" : "50%"} ${isHovered ? "var(--mouse-y, 50%)" : "50%"}, ${project.color}12 0%, transparent 40%)`}
						opacity={isHovered ? 1 : 0}
						transition="opacity 0.4s ease"
						pointerEvents="none"
						style={{ transform: "translate(-25%, -25%)" }}
					/>

					{/* Floating element effect - appears on hover */}
					<Box
						position="absolute"
						top="-50%"
						left="-50%"
						w="200%"
						h="200%"
						bg={`conic-gradient(from 180deg at 50% 50%, transparent 0deg, ${project.color}08 180deg, transparent 360deg)`}
						opacity={isHovered ? 1 : 0}
						transition="opacity 0.5s ease"
						pointerEvents="none"
						animation={isHovered ? "spin 8s linear infinite" : "none"}
					/>

					{children}
				</Box>
			</MotionBox>
		</MotionBox>
	);
}

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 40, rotateX: -15 },
	visible: {
		opacity: 1,
		y: 0,
		rotateX: 0,
		transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
	},
};

export function ProjectsSection() {
	return (
		<Box
			as="section"
			id="projects"
			py={{ base: "16", md: "24", lg: "32" }}
			px={{ base: "4", md: "8", lg: "12" }}
			position="relative"
		>
			{/* Perspective depth effect */}
			<Box
				position="absolute"
				top="0"
				left="50%"
				transform="translateX(-50%)"
				w="80%"
				h="1px"
				bg="linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), transparent)"
				boxShadow="0 0 30px rgba(139, 92, 246, 0.3)"
			/>

			{/* Ambient glow */}
			<Box
				position="absolute"
				top="20%"
				left="10%"
				w="400px"
				h="400px"
				borderRadius="full"
				bg="radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 60%)"
				filter="blur(60px)"
				pointerEvents="none"
			/>
			<Box
				position="absolute"
				bottom="20%"
				right="10%"
				w="350px"
				h="350px"
				borderRadius="full"
				bg="radial-gradient(circle, rgba(34, 211, 238, 0.05) 0%, transparent 60%)"
				filter="blur(60px)"
				pointerEvents="none"
			/>

			<VStack maxW="6xl" mx="auto" gap={{ base: "10", md: "16" }} position="relative">
				{/* Section header with depth */}
				<VStack gap={{ base: "3", md: "4" }} textAlign="center" style={{ perspective: "800px" }}>
					<MotionBox
						initial={{ opacity: 0, y: 20, rotateX: -20 }}
						whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<Text
							fontSize="xs"
							color="#8B5CF6"
							fontWeight="bold"
							letterSpacing="widest"
							textTransform="uppercase"
							textShadow="0 0 20px rgba(139, 92, 246, 0.5)"
						>
							Featured Work
						</Text>
					</MotionBox>
					<MotionBox
						initial={{ opacity: 0, y: 30, rotateX: -15 }}
						whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						<Text
							fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
							fontWeight="bold"
							bgGradient="linear(135deg, #fff 0%, #A78BFA 100%)"
							bgClip="text"
							filter="drop-shadow(0 0 30px rgba(139, 92, 246, 0.3))"
						>
							Projects
						</Text>
					</MotionBox>
					<MotionBox
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<Text fontSize={{ base: "sm", md: "md" }} color="gray.400" maxW="lg">
							A collection of immersive web experiences showcasing modern frontend development.
						</Text>
					</MotionBox>
				</VStack>

				{/* Projects grid with 3D cards */}
				<MotionBox
					as={Box}
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					display="grid"
					gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
					gap={{ base: "4", md: "5", lg: "6" }}
					w="full"
					style={{ perspective: "1200px" }}
				>
					{projects.map((project, index) => {
						const Icon = iconMap[project.icon as keyof typeof iconMap];
						return (
							<MotionBox key={index} variants={itemVariants}>
								<Link href={project.href} target="_blank" rel="noopener noreferrer">
									<TiltCard project={project}>
										{/* Icon and arrow */}
										<HStack justifyContent="space-between" mb={{ base: "3", md: "4" }} position="relative">
											<MotionBox
												p={{ base: "2.5", md: "3" }}
												borderRadius="xl"
												bg={project.bgColor}
												border="1px solid"
												borderColor={`${project.color}30`}
												boxShadow={`0 0 20px ${project.color}15`}
												style={{ transform: "translateZ(20px)" }}
												whileHover={{ rotate: -12, scale: 1.1 }}
												transition={{ duration: 0.3 }}
											>
												<Icon size={22} color={project.color} />
											</MotionBox>
											<MotionBox
												p="2"
												borderRadius="lg"
												bg="rgba(255, 255, 255, 0.05)"
												opacity={0}
												transform="translateX(-10px)"
												_groupHover={{ opacity: 1, transform: "translateX(0)" }}
												transition="all 0.3s ease"
												style={{ transform: "translateZ(15px)" }}
											>
												<FiArrowUpRight size={18} color="white" />
											</MotionBox>
										</HStack>

										{/* Content with depth */}
										<VStack alignItems="flex-start" gap="2" flex="1" position="relative" style={{ transform: "translateZ(10px)" }}>
											<Text
												fontSize={{ base: "lg", md: "xl" }}
												fontWeight="bold"
												color="white"
												transition="all 0.3s ease"
												_groupHover={{ color: project.color }}
											>
												{project.title}
											</Text>
											<Text
												fontSize={{ base: "sm", md: "md" }}
												color="gray.400"
												lineHeight="1.6"
												noOfLines={2}
											>
												{project.description}
											</Text>
										</VStack>

										{/* Tag with glow */}
										<HStack mt={{ base: "3", md: "4" }} pt={{ base: "3", md: "4" }} borderTop="1px solid" borderColor="rgba(255, 255, 255, 0.05)" style={{ transform: "translateZ(5px)" }}>
											<Box
												px="3"
												py="1"
												borderRadius="full"
												bg={`${project.color}15`}
												border="1px solid"
												borderColor={`${project.color}30`}
												boxShadow={`0 0 15px ${project.color}10`}
											>
												<Text fontSize="xs" fontWeight="semibold" color={project.color}>
													{project.name.toUpperCase()}
												</Text>
											</Box>
										</HStack>
									</TiltCard>
								</Link>
							</MotionBox>
						);
					})}
				</MotionBox>

				{/* View all with hover effect */}
				<MotionBox
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<Link href="/projects">
						<MotionBox
							display="flex"
							alignItems="center"
							gap="2"
							px={{ base: "6", md: "8" }}
							py={{ base: "3", md: "4" }}
							borderRadius="full"
							border="1px solid"
							borderColor="rgba(139, 92, 246, 0.3)"
							bg="rgba(139, 92, 246, 0.05)"
							cursor="pointer"
							boxShadow="0 0 30px rgba(139, 92, 246, 0.1)"
							whileHover={{
								scale: 1.02,
								borderColor: "#8B5CF6",
								boxShadow: "0 0 40px rgba(139, 92, 246, 0.25)",
							}}
							whileTap={{ scale: 0.98 }}
							transition={{ duration: 0.25 }}
						>
							<Text color="white" fontWeight="semibold" fontSize={{ base: "sm", md: "md" }}>
								View All Projects
							</Text>
							<FiArrowUpRight size={18} color="white" />
						</MotionBox>
					</Link>
				</MotionBox>
			</VStack>
		</Box>
	);
}

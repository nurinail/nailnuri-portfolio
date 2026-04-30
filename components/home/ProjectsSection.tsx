"use client";

import { Box, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
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

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.08,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.4, ease: "easeOut" },
	},
};

export function ProjectsSection() {
	return (
		<Box
			as="section"
			id="projects"
			py={{ base: "12", md: "20", lg: "24" }}
			px={{ base: "4", md: "8", lg: "12" }}
			position="relative"
		>
			{/* Section glow */}
			<Box
				position="absolute"
				top="0"
				left="50%"
				transform="translateX(-50%)"
				w="70%"
				h="1px"
				bg="linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.4), transparent)"
			/>

			<VStack maxW="6xl" mx="auto" gap={{ base: "8", md: "12" }}>
				{/* Section header - compact */}
				<VStack gap={{ base: "2", md: "3" }} textAlign="center">
					<MotionBox
						initial={{ opacity: 0, y: 15 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4 }}
					>
						<Text
							fontSize="xs"
							color="#8B5CF6"
							fontWeight="semibold"
							letterSpacing="wider"
							textTransform="uppercase"
						>
							Featured Work
						</Text>
					</MotionBox>
					<MotionBox
						initial={{ opacity: 0, y: 15 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: 0.05 }}
					>
						<Text
							fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}
							fontWeight="bold"
							color="white"
						>
							Projects
						</Text>
					</MotionBox>
					<MotionBox
						initial={{ opacity: 0, y: 15 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: 0.1 }}
					>
						<Text
							fontSize={{ base: "xs", md: "sm" }}
							color="gray.400"
							maxW="md"
							px={{ base: "2", md: "0" }}
						>
							A selection of projects showcasing my expertise in building modern web applications.
						</Text>
					</MotionBox>
				</VStack>

				{/* Projects grid - optimized for mobile */}
				<MotionBox
					as={Grid}
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					gridTemplateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
					gap={{ base: "3", md: "4" }}
					w="full"
				>
					{projects.map((project, index) => {
						const Icon = iconMap[project.icon as keyof typeof iconMap];
						return (
							<MotionBox
								key={index}
								variants={itemVariants}
								whileHover={{ y: -4, scale: 1.01 }}
								whileTap={{ scale: 0.98 }}
								transition={{ duration: 0.25 }}
							>
								<Link href={project.href} target="_blank" rel="noopener noreferrer">
									<Box
										position="relative"
										p={{ base: "4", md: "5" }}
										borderRadius="xl"
										bg="rgba(23, 23, 26, 0.5)"
										backdropFilter="blur(16px)"
										border="1px solid"
										borderColor="rgba(255, 255, 255, 0.05)"
										overflow="hidden"
										cursor="pointer"
										transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
										role="group"
										h="full"
										minH={{ base: "140px", md: "160px" }}
										display="flex"
										flexDirection="column"
										_before={{
											content: '""',
											position: "absolute",
											inset: "-1px",
											borderRadius: "xl",
											padding: "1px",
											background: `linear-gradient(135deg, ${project.color}50, transparent 50%, ${project.color}25)`,
											WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
											WebkitMaskComposite: "xor",
											maskComposite: "exclude",
											opacity: 0,
											transition: "opacity 0.3s ease",
										}}
										_hover={{
											borderColor: project.color,
											boxShadow: `0 12px 40px rgba(0, 0, 0, 0.35), 0 0 40px ${project.color}15`,
											_before: { opacity: 1 },
										}}
									>
										{/* Hover glow effect */}
										<Box
											position="absolute"
											top="-50%"
											left="-50%"
											w="200%"
											h="200%"
											bg={`radial-gradient(circle at center, ${project.color}06 0%, transparent 50%)`}
											opacity={0}
											transition="opacity 0.3s ease"
											_groupHover={{ opacity: 1 }}
											pointerEvents="none"
										/>

										{/* Icon and arrow */}
										<HStack justifyContent="space-between" mb={{ base: "2", md: "3" }}>
											<Box
												p={{ base: "2", md: "2.5" }}
												borderRadius="lg"
												bg={project.bgColor}
												transition="all 0.25s ease"
												_groupHover={{ transform: "rotate(-8deg) scale(1.05)" }}
											>
												<Icon size={18} color={project.color} />
											</Box>
											<Box
												p="1.5"
												borderRadius="md"
												bg="rgba(255, 255, 255, 0.04)"
												opacity={0}
												transform="translateX(-8px)"
												transition="all 0.25s ease"
												_groupHover={{ opacity: 1, transform: "translateX(0)" }}
											>
												<FiArrowUpRight size={14} color="white" />
											</Box>
										</HStack>

										{/* Content */}
										<VStack alignItems="flex-start" gap="1" flex="1">
											<Text
												fontSize={{ base: "sm", md: "md" }}
												fontWeight="semibold"
												color="white"
												transition="color 0.25s ease"
												_groupHover={{ color: project.color }}
											>
												{project.title}
											</Text>
											<Text
												fontSize={{ base: "xs", md: "sm" }}
												color="gray.400"
												lineHeight="1.5"
												noOfLines={2}
											>
												{project.description}
											</Text>
										</VStack>

										{/* Tag */}
										<HStack mt={{ base: "2", md: "3" }} pt={{ base: "2", md: "3" }} borderTop="1px solid" borderColor="rgba(255, 255, 255, 0.04)">
											<Box
												px="2"
												py="0.5"
												borderRadius="full"
												bg={`${project.color}12`}
												border="1px solid"
												borderColor={`${project.color}25`}
											>
												<Text fontSize="2xs" fontWeight="medium" color={project.color}>
													{project.name}
												</Text>
											</Box>
										</HStack>
									</Box>
								</Link>
							</MotionBox>
						);
					})}
				</MotionBox>

				{/* View all link - compact */}
				<MotionBox
					initial={{ opacity: 0, y: 15 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4, delay: 0.2 }}
				>
					<Link href="/projects">
						<HStack
							gap="1.5"
							px={{ base: "4", md: "5" }}
							py={{ base: "2", md: "2.5" }}
							borderRadius="full"
							border="1px solid"
							borderColor="rgba(139, 92, 246, 0.25)"
							bg="rgba(139, 92, 246, 0.04)"
							transition="all 0.25s ease"
							cursor="pointer"
							_hover={{
								bg: "rgba(139, 92, 246, 0.08)",
								borderColor: "#8B5CF6",
								transform: "translateY(-1px)",
							}}
							_active={{
								transform: "scale(0.97)",
							}}
						>
							<Text color="white" fontWeight="medium" fontSize={{ base: "xs", md: "sm" }}>
								View All Projects
							</Text>
							<FiArrowUpRight size={14} color="white" />
						</HStack>
					</Link>
				</MotionBox>
			</VStack>
		</Box>
	);
}

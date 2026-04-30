"use client";

import { Box, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
	FiAlertCircle,
	FiArrowLeft,
	FiArrowUpRight,
	FiCalendar,
	FiCloud,
	FiHelpCircle,
	FiLayers,
} from "react-icons/fi";
import { IoCarSport } from "react-icons/io5";
import { projects } from "@/components/utils/utils";
import { AnimatedBackground } from "@/components/home/AnimatedBackground";

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
		transition: { staggerChildren: 0.08 },
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
	return (
		<Box position="relative" minH="100vh" overflow="hidden">
			<AnimatedBackground />
			<Box position="relative" zIndex={1} py={{ base: "8", md: "12" }} px={{ base: "6", md: "12" }}>
				<VStack maxW="6xl" mx="auto" gap={{ base: "8", md: "12" }} alignItems="stretch">
					{/* Header */}
					<VStack alignItems="flex-start" gap="6">
						<MotionBox
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.4 }}
						>
							<Link href="/">
								<HStack
									gap="2"
									px="4"
									py="2"
									borderRadius="full"
									bg="rgba(255, 255, 255, 0.05)"
									border="1px solid"
									borderColor="rgba(255, 255, 255, 0.1)"
									transition="all 0.3s ease"
									cursor="pointer"
									_hover={{
										bg: "rgba(139, 92, 246, 0.1)",
										borderColor: "rgba(139, 92, 246, 0.3)",
									}}
								>
									<FiArrowLeft color="white" size={16} />
									<Text color="white" fontSize="sm" fontWeight="medium">
										Back to Home
									</Text>
								</HStack>
							</Link>
						</MotionBox>

						<VStack alignItems="flex-start" gap="2">
							<MotionBox
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.1 }}
							>
								<Text
									fontSize="sm"
									color="#8B5CF6"
									fontWeight="semibold"
									letterSpacing="wider"
									textTransform="uppercase"
								>
									Portfolio
								</Text>
							</MotionBox>
							<MotionBox
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								<Text
									fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
									fontWeight="bold"
									color="white"
								>
									All Projects
								</Text>
							</MotionBox>
							<MotionBox
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.3 }}
							>
								<Text fontSize={{ base: "md", md: "lg" }} color="gray.400" maxW="lg">
									A comprehensive collection of web applications and interfaces I have built.
								</Text>
							</MotionBox>
						</VStack>
					</VStack>

					{/* Projects grid */}
					<MotionBox
						as={Grid}
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
						gap="6"
					>
						{projects.map((project, index) => {
							const Icon = iconMap[project.icon as keyof typeof iconMap];
							return (
								<MotionBox
									key={index}
									variants={itemVariants}
									whileHover={{ y: -8, scale: 1.02 }}
									transition={{ duration: 0.3 }}
								>
									<Link href={project.href} target="_blank" rel="noopener noreferrer">
										<Box
											position="relative"
											p="6"
											borderRadius="2xl"
											bg="rgba(23, 23, 26, 0.6)"
											backdropFilter="blur(20px)"
											border="1px solid"
											borderColor="rgba(255, 255, 255, 0.06)"
											overflow="hidden"
											cursor="pointer"
											transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
											role="group"
											h="full"
											minH="220px"
											display="flex"
											flexDirection="column"
											_before={{
												content: '""',
												position: "absolute",
												inset: "-1px",
												borderRadius: "2xl",
												padding: "1px",
												background: `linear-gradient(135deg, ${project.color}60, transparent 50%, ${project.color}30)`,
												WebkitMask:
													"linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
												WebkitMaskComposite: "xor",
												maskComposite: "exclude",
												opacity: 0,
												transition: "opacity 0.4s ease",
											}}
											_hover={{
												borderColor: project.color,
												boxShadow: `0 20px 60px rgba(0, 0, 0, 0.4), 0 0 60px ${project.color}20`,
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
												bg={`radial-gradient(circle at center, ${project.color}08 0%, transparent 50%)`}
												opacity={0}
												transition="opacity 0.4s ease"
												_groupHover={{ opacity: 1 }}
												pointerEvents="none"
											/>

											{/* Icon and arrow */}
											<HStack justifyContent="space-between" mb="4">
												<Box
													p="3"
													borderRadius="xl"
													bg={project.bgColor}
													transition="all 0.3s ease"
													_groupHover={{ transform: "rotate(-10deg) scale(1.1)" }}
												>
													<Icon size={24} color={project.color} />
												</Box>
												<Box
													p="2"
													borderRadius="lg"
													bg="rgba(255, 255, 255, 0.05)"
													opacity={0}
													transform="translateX(-10px)"
													transition="all 0.3s ease"
													_groupHover={{ opacity: 1, transform: "translateX(0)" }}
												>
													<FiArrowUpRight size={18} color="white" />
												</Box>
											</HStack>

											{/* Content */}
											<VStack alignItems="flex-start" gap="2" flex="1">
												<Text
													fontSize="lg"
													fontWeight="semibold"
													color="white"
													transition="color 0.3s ease"
													_groupHover={{ color: project.color }}
												>
													{project.title}
												</Text>
												<Text fontSize="sm" color="gray.400" lineHeight="relaxed">
													{project.description}
												</Text>
											</VStack>

											{/* Tag */}
											<HStack
												mt="4"
												pt="4"
												borderTop="1px solid"
												borderColor="rgba(255, 255, 255, 0.05)"
											>
												<Box
													px="3"
													py="1"
													borderRadius="full"
													bg={`${project.color}15`}
													border="1px solid"
													borderColor={`${project.color}30`}
												>
													<Text fontSize="xs" fontWeight="medium" color={project.color}>
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
				</VStack>
			</Box>
		</Box>
	);
}

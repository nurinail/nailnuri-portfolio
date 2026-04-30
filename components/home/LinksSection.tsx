"use client";

import { Box, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { GrGithub } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { code, contact, social } from "@/components/utils/utils";
import type { LinksType } from "@/components/utils/utils";

const MotionBox = motion(Box);

const iconMap: Record<string, React.ElementType> = {
	github: GrGithub,
	instagram: FaInstagram,
	linkedin: FaLinkedinIn,
	facebook: FaFacebook,
	youtube: FaYoutube,
	discord: FaDiscord,
	email: MdEmail,
};

const allLinks = [
	{ category: "Code", items: code.filter(l => l.title !== "Web Projects") },
	{ category: "Connect", items: contact.filter(l => !l.toaster) },
	{ category: "Social", items: social },
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.06 },
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 30, scale: 0.95 },
	visible: { 
		opacity: 1, 
		y: 0, 
		scale: 1,
		transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } 
	},
};

function TiltLinkCard({ link }: { link: LinksType }) {
	const Icon = iconMap[link.icon] ?? GrGithub;
	const [isHovered, setIsHovered] = useState(false);
	
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
		stiffness: 300,
		damping: 25,
	});
	const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
		stiffness: 300,
		damping: 25,
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
			variants={itemVariants}
			style={{ perspective: "800px" }}
		>
			<Link href={link.href ?? "#"} target="_blank" rel="noopener noreferrer">
				<MotionBox
					style={{
						rotateX,
						rotateY,
						transformStyle: "preserve-3d",
					}}
					onMouseMove={handleMouseMove}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={handleMouseLeave}
					whileTap={{ scale: 0.97 }}
				>
					<Box
						position="relative"
						p={{ base: "4", md: "5" }}
						borderRadius="xl"
						bg="rgba(15, 15, 20, 0.6)"
						backdropFilter="blur(16px)"
						border="1px solid"
						borderColor={isHovered ? `${link.color}50` : "rgba(255, 255, 255, 0.06)"}
						cursor="pointer"
						transition="all 0.35s cubic-bezier(0.4, 0, 0.2, 1)"
						role="group"
						overflow="hidden"
						boxShadow={
							isHovered
								? `0 20px 40px -15px rgba(0, 0, 0, 0.4), 0 0 40px ${link.color}15`
								: "0 8px 30px -10px rgba(0, 0, 0, 0.3)"
						}
					>
						{/* Gradient border on hover */}
						<Box
							position="absolute"
							inset="-1px"
							borderRadius="xl"
							padding="1px"
							background={`linear-gradient(135deg, ${link.color}50, transparent 50%, ${link.color}25)`}
							WebkitMask="linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)"
							WebkitMaskComposite="xor"
							maskComposite="exclude"
							opacity={isHovered ? 1 : 0}
							transition="opacity 0.35s ease"
							pointerEvents="none"
						/>

						{/* Spotlight effect */}
						<Box
							position="absolute"
							inset="0"
							bg={`radial-gradient(circle at 50% 50%, ${link.color}10, transparent 60%)`}
							opacity={isHovered ? 1 : 0}
							transition="opacity 0.35s ease"
							pointerEvents="none"
						/>
						
						<HStack position="relative" justifyContent="space-between" style={{ transform: "translateZ(10px)" }}>
							<HStack gap="3">
								<MotionBox
									p="2.5"
									borderRadius="lg"
									bg={`${link.color}15`}
									border="1px solid"
									borderColor={`${link.color}25`}
									boxShadow={isHovered ? `0 0 25px ${link.color}20` : "none"}
									whileHover={{ rotate: -8, scale: 1.1 }}
									transition={{ duration: 0.3 }}
								>
									<Icon size={20} color={link.color} />
								</MotionBox>
								<VStack alignItems="flex-start" gap="0">
									<Text
										fontSize="sm"
										fontWeight="bold"
										color="white"
										transition="all 0.3s ease"
										_groupHover={{ color: link.color }}
									>
										{link.title}
									</Text>
									<Text fontSize="xs" color="gray.500">
										{link.name}
									</Text>
								</VStack>
							</HStack>
							<MotionBox
								opacity={isHovered ? 1 : 0}
								x={isHovered ? 0 : -8}
								transition={{ duration: 0.3 }}
								p="1.5"
								borderRadius="md"
								bg="rgba(255, 255, 255, 0.05)"
							>
								<Text fontSize="md" color={link.color}>
									&rarr;
								</Text>
							</MotionBox>
						</HStack>
					</Box>
				</MotionBox>
			</Link>
		</MotionBox>
	);
}

export function LinksSection() {
	return (
		<Box
			as="section"
			py={{ base: "16", md: "24" }}
			px={{ base: "4", md: "8", lg: "12" }}
			position="relative"
		>
			{/* Depth line */}
			<Box
				position="absolute"
				top="0"
				left="50%"
				transform="translateX(-50%)"
				w="60%"
				h="1px"
				bg="linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.5), transparent)"
				boxShadow="0 0 30px rgba(34, 211, 238, 0.3)"
			/>

			{/* Ambient orbs */}
			<Box
				position="absolute"
				top="30%"
				left="5%"
				w="300px"
				h="300px"
				borderRadius="full"
				bg="radial-gradient(circle, rgba(34, 211, 238, 0.05) 0%, transparent 60%)"
				filter="blur(50px)"
				pointerEvents="none"
			/>
			<Box
				position="absolute"
				bottom="20%"
				right="10%"
				w="250px"
				h="250px"
				borderRadius="full"
				bg="radial-gradient(circle, rgba(139, 92, 246, 0.04) 0%, transparent 60%)"
				filter="blur(50px)"
				pointerEvents="none"
			/>

			<VStack maxW="4xl" mx="auto" gap={{ base: "10", md: "14" }} position="relative">
				{/* Section header with perspective */}
				<VStack gap={{ base: "3", md: "4" }} textAlign="center" style={{ perspective: "800px" }}>
					<MotionBox
						initial={{ opacity: 0, y: 20, rotateX: -20 }}
						whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<Text
							fontSize="xs"
							color="#22D3EE"
							fontWeight="bold"
							letterSpacing="widest"
							textTransform="uppercase"
							textShadow="0 0 20px rgba(34, 211, 238, 0.5)"
						>
							Get In Touch
						</Text>
					</MotionBox>
					<MotionBox
						initial={{ opacity: 0, y: 30, rotateX: -15 }}
						whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						<Text
							fontSize={{ base: "3xl", md: "5xl" }}
							fontWeight="bold"
							bgGradient="linear(135deg, #fff 0%, #22D3EE 100%)"
							bgClip="text"
							filter="drop-shadow(0 0 30px rgba(34, 211, 238, 0.3))"
						>
							{"Let's Connect"}
						</Text>
					</MotionBox>
					<MotionBox
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<Text fontSize={{ base: "sm", md: "md" }} color="gray.400" maxW="md">
							Open to collaborations and new opportunities. Feel free to reach out.
						</Text>
					</MotionBox>
				</VStack>

				{/* Links by category */}
				<VStack w="full" gap={{ base: "8", md: "10" }}>
					{allLinks.map((section) => (
						<VStack key={section.category} w="full" gap={{ base: "3", md: "4" }} alignItems="flex-start">
							<MotionBox
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4 }}
							>
								<Text
									fontSize="xs"
									fontWeight="bold"
									color="gray.500"
									letterSpacing="widest"
									textTransform="uppercase"
									pl="1"
								>
									{section.category}
								</Text>
							</MotionBox>
							<MotionBox
								as={Grid}
								variants={containerVariants}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, margin: "-50px" }}
								gridTemplateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }}
								gap={{ base: "3", md: "4" }}
								w="full"
							>
								{section.items.map((link, index) => (
									<TiltLinkCard key={index} link={link} />
								))}
							</MotionBox>
						</VStack>
					))}
				</VStack>
			</VStack>
		</Box>
	);
}

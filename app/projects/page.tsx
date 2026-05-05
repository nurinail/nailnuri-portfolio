"use client";
import { HStack, Link, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import {
	FiAlertCircle,
	FiCalendar,
	FiCloud,
	FiHelpCircle,
	FiLayers,
} from "react-icons/fi";
import { IoCarSport } from "react-icons/io5";
import { projects } from "@/components/utils/utils";

const iconMap = {
	system: FiLayers,
	quiz: FiHelpCircle,
	weather: FiCloud,
	report: FiAlertCircle,
	age: FiCalendar,
	rent: IoCarSport,
};
//dssm
export default function Projects() {
	return (
		<VStack
			alignItems="flex-start"
			gap="6"
			pt={10}
			maxW="sm"
			mx="auto"
			w="full"
		>
			<HStack>
				<Link _focus={{ outline: "none" }} as={NextLink} href="..">
					<FaArrowLeftLong size="24" color="white" />
				</Link>
				<Text color="gray.100" fontSize="display-xs" fontWeight="bold">
					Projects
				</Text>
			</HStack>
			<VStack w="full">
				{projects.map((project, index) => {
					const Icon = iconMap[project.icon as keyof typeof iconMap];
					return (
						<Link
							as={NextLink}
							key={index as number}
							w="full"
							bg="rgba(23, 23, 26, 0.7)"
							backdropFilter="blur(12px)"
							target="_blank"
							textDecoration="none"
							transition="all 0.35s cubic-bezier(0.4, 0, 0.2, 1)"
							_hover={{
								transform: "scale(1.03) translateY(-4px)",
								boxShadow: `0 12px 40px rgba(0, 0, 0, 0.4), 0 0 50px ${project.color}20`,
								borderColor: project.color,
								_before: { opacity: 1 },
							}}
							_focus={{ outline: "none" }}
							border="1px solid"
							borderColor="rgba(255, 255, 255, 0.06)"
							href={project.href}
							p="5"
							justifyContent="space-between"
							borderRadius="2xl"
							gap="4"
							position="relative"
							boxShadow="0 4px 24px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.04)"
							_before={{
								content: '""',
								position: "absolute",
								inset: "-1px",
								borderRadius: "2xl",
								padding: "1px",
								background: `linear-gradient(135deg, ${project.color}50, transparent 40%, ${project.color}30)`,
								WebkitMask:
									"linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
								WebkitMaskComposite: "xor",
								maskComposite: "exclude",
								opacity: 0,
								transition: "opacity 0.35s ease",
							}}
						>
							<VStack alignItems="flex-start" gap="1">
								<Text lineHeight="1" color="gray.100" fontSize="text-sm">
									{project.title}
								</Text>
								<Text lineHeight="1" color="#AFABB6" fontSize="text-xs">
									{project.description}
								</Text>
							</VStack>
							<HStack px="4" py="2" bg={project.bgColor} borderRadius="full">
								<Icon size="20" color={project.color} />
								<Text
									color={project.color}
									fontSize="text-xs"
									fontWeight="bold"
								>
									{project.name}
								</Text>
							</HStack>
						</Link>
					);
				})}
			</VStack>
		</VStack>
	);
}

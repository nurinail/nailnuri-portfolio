"use client";
import { HStack, Link, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { FiAlertCircle, FiCloud, FiHelpCircle, FiLayers } from "react-icons/fi";
import { IoCarSport } from "react-icons/io5";
import { projects } from "@/components/utils/utils";

const iconMap = {
	system: FiLayers,
	quiz: FiHelpCircle,
	weather: FiCloud,
	report: FiAlertCircle,
	rent: IoCarSport,
};

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
			<Text color="gray.100" fontSize="display-xs" fontWeight="bold">
				Projects
			</Text>
			<VStack w="full">
				{projects.map((project, index) => {
					const Icon = iconMap[project.icon as keyof typeof iconMap];
					return (
						<Link
							as={NextLink}
							key={index as number}
							w="full"
							bg="#17171A"
							target="_blank"
							textDecoration="none"
							transition="all 0.3s ease-in-out"
							_hover={{ transform: "scale(1.02)" }}
							_focus={{ outline: "none" }}
							border="1px solid #252529"
							href={project.href}
							p="4"
							justifyContent="space-between"
							borderRadius="2xl"
							gap="4"
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

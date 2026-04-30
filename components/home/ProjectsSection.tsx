"use client";

import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
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
import { TiltCard3D } from "@/components/3d/TiltCard";

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
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { 
      duration: 0.7, 
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const ambientX = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <Box
      ref={sectionRef}
      as="section"
      id="projects"
      py={{ base: "16", md: "24", lg: "32" }}
      px={{ base: "4", md: "8", lg: "12" }}
      position="relative"
      overflow="hidden"
    >
      {/* Perspective depth line */}
      <Box
        position="absolute"
        top="0"
        left="50%"
        transform="translateX(-50%)"
        w="80%"
        h="1px"
        bg="linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.6), transparent)"
        boxShadow="0 0 40px rgba(139, 92, 246, 0.4)"
      />

      {/* Ambient glow orbs with parallax */}
      <MotionBox
        position="absolute"
        top="15%"
        left="5%"
        w="450px"
        h="450px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 60%)"
        filter="blur(60px)"
        pointerEvents="none"
        style={{ x: ambientX }}
      />
      <MotionBox
        position="absolute"
        bottom="10%"
        right="5%"
        w="400px"
        h="400px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(34, 211, 238, 0.06) 0%, transparent 60%)"
        filter="blur(60px)"
        pointerEvents="none"
        style={{ x: useTransform(ambientX, (x) => -x) }}
      />

      <VStack maxW="6xl" mx="auto" gap={{ base: "12", md: "16" }} position="relative">
        {/* Section header with parallax */}
        <MotionBox style={{ y: headerY, opacity: headerOpacity }}>
          <VStack gap={{ base: "3", md: "4" }} textAlign="center">
            <MotionBox
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Text
                fontSize="xs"
                color="#8B5CF6"
                fontWeight="bold"
                letterSpacing="widest"
                textTransform="uppercase"
                textShadow="0 0 30px rgba(139, 92, 246, 0.6)"
              >
                Featured Work
              </Text>
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Text
                fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                bgGradient="linear(135deg, #fff 0%, #A78BFA 100%)"
                bgClip="text"
                filter="drop-shadow(0 0 40px rgba(139, 92, 246, 0.4))"
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
        </MotionBox>

        {/* Projects grid with 3D tilt cards */}
        <MotionBox
          as={Box}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={{ base: "5", md: "6", lg: "7" }}
          w="full"
          style={{ perspective: "1500px" }}
        >
          {projects.map((project, index) => {
            const Icon = iconMap[project.icon as keyof typeof iconMap];
            return (
              <MotionBox key={index} variants={itemVariants}>
                <Link href={project.href} target="_blank" rel="noopener noreferrer">
                  <TiltCard3D glowColor={project.color}>
                    {/* Icon and arrow */}
                    <HStack justifyContent="space-between" mb={{ base: "3", md: "4" }}>
                      <MotionBox
                        p={{ base: "2.5", md: "3" }}
                        borderRadius="xl"
                        bg={project.bgColor}
                        border="1px solid"
                        borderColor={`${project.color}40`}
                        boxShadow={`0 0 25px ${project.color}20`}
                        whileHover={{ rotate: -12, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon size={22} color={project.color} />
                      </MotionBox>
                      <MotionBox
                        p="2"
                        borderRadius="lg"
                        bg="rgba(255, 255, 255, 0.08)"
                        opacity={0}
                        transform="translateX(-10px) translateZ(20px)"
                        _groupHover={{ opacity: 1, transform: "translateX(0) translateZ(20px)" }}
                        transition="all 0.3s ease"
                      >
                        <FiArrowUpRight size={18} color="white" />
                      </MotionBox>
                    </HStack>

                    {/* Content */}
                    <VStack alignItems="flex-start" gap="2" flex="1">
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
                    <HStack
                      mt={{ base: "3", md: "4" }}
                      pt={{ base: "3", md: "4" }}
                      borderTop="1px solid"
                      borderColor="rgba(255, 255, 255, 0.06)"
                    >
                      <Box
                        px="3"
                        py="1"
                        borderRadius="full"
                        bg={`${project.color}18`}
                        border="1px solid"
                        borderColor={`${project.color}35`}
                        boxShadow={`0 0 20px ${project.color}15`}
                      >
                        <Text fontSize="xs" fontWeight="semibold" color={project.color}>
                          {project.name.toUpperCase()}
                        </Text>
                      </Box>
                    </HStack>
                  </TiltCard3D>
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
              borderColor="rgba(139, 92, 246, 0.4)"
              bg="rgba(139, 92, 246, 0.08)"
              cursor="pointer"
              boxShadow="0 0 40px rgba(139, 92, 246, 0.15)"
              whileHover={{
                scale: 1.03,
                borderColor: "#8B5CF6",
                boxShadow: "0 0 50px rgba(139, 92, 246, 0.3)",
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

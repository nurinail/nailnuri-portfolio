"use client";

import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";
import { toaster, Toaster } from "../ui/toaster";

const MotionBox = motion(Box);
const MotionText = motion(Text);

// Dynamically import 3D scene to avoid SSR issues
const HeroScene3D = dynamic(
  () => import("../3d/Scene3D").then((mod) => mod.HeroScene3D),
  { ssr: false }
);

export function HeroSection() {
  return (
    <Box
      as="section"
      position="relative"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      px={{ base: "4", md: "8", lg: "12" }}
    >
      <Toaster />

      {/* 3D Scene Background */}
      <HeroScene3D />

      {/* Gradient overlay for better text readability */}
      <Box
        position="absolute"
        inset="0"
        bg="radial-gradient(ellipse at center, transparent 0%, rgba(5, 5, 8, 0.4) 50%, rgba(5, 5, 8, 0.8) 100%)"
        pointerEvents="none"
        zIndex={2}
      />

      {/* Main content */}
      <MotionBox
        position="relative"
        zIndex={10}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <VStack gap={{ base: "5", md: "7" }} textAlign="center" maxW="4xl">
          {/* Status badge with glow */}
          <MotionBox
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <HStack
              px="4"
              py="2"
              borderRadius="full"
              bg="rgba(139, 92, 246, 0.1)"
              border="1px solid rgba(139, 92, 246, 0.3)"
              backdropFilter="blur(12px)"
              boxShadow="0 0 40px rgba(139, 92, 246, 0.2)"
            >
              <MotionBox
                w="2"
                h="2"
                borderRadius="full"
                bg="#22C55E"
                boxShadow="0 0 12px rgba(34, 197, 94, 0.8)"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <Text color="gray.300" fontSize="xs" fontWeight="medium" letterSpacing="wide">
                Available for projects
              </Text>
            </HStack>
          </MotionBox>

          {/* Main headline with neon glow */}
          <VStack gap={{ base: "1", md: "2" }}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <MotionText
                fontSize={{ base: "sm", md: "md" }}
                color="gray.400"
                fontWeight="medium"
                letterSpacing="widest"
                textTransform="uppercase"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(139, 92, 246, 0)",
                    "0 0 20px rgba(139, 92, 246, 0.5)",
                    "0 0 10px rgba(139, 92, 246, 0)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Frontend Developer
              </MotionText>
            </MotionBox>
            <MotionText
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              fontSize={{ base: "4xl", sm: "5xl", md: "7xl", lg: "8xl" }}
              fontWeight="bold"
              lineHeight="1"
              position="relative"
            >
              <Box
                as="span"
                position="relative"
                display="inline-block"
                bgGradient="linear(135deg, #fff 0%, #A78BFA 40%, #8B5CF6 60%, #22D3EE 100%)"
                bgClip="text"
                filter="drop-shadow(0 0 60px rgba(139, 92, 246, 0.5))"
              >
                Nail Nuri
              </Box>
            </MotionText>
          </VStack>

          {/* Subtitle */}
          <MotionText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            fontSize={{ base: "sm", md: "lg" }}
            color="gray.400"
            maxW="lg"
            lineHeight="1.7"
            px={{ base: "2", md: "0" }}
          >
            Crafting immersive digital experiences with{" "}
            <Box as="span" color="#A78BFA" fontWeight="semibold">
              React
            </Box>{" "}
            and{" "}
            <Box as="span" color="#22D3EE" fontWeight="semibold">
              Next.js
            </Box>
            . Specializing in pixel-perfect interfaces that blend performance with elegance.
          </MotionText>

          {/* CTA Buttons with 3D hover effect */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <HStack gap={{ base: "2", md: "3" }} flexWrap="wrap" justifyContent="center">
              <Link href="#projects">
                <MotionBox
                  as="button"
                  px={{ base: "5", md: "7" }}
                  py={{ base: "3", md: "3.5" }}
                  borderRadius="xl"
                  bg="linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)"
                  color="white"
                  fontWeight="semibold"
                  fontSize={{ base: "sm", md: "md" }}
                  display="flex"
                  alignItems="center"
                  gap="2"
                  position="relative"
                  overflow="hidden"
                  boxShadow="0 8px 30px rgba(139, 92, 246, 0.5), inset 0 1px 0 rgba(255,255,255,0.15)"
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                    boxShadow: "0 15px 40px rgba(139, 92, 246, 0.6), inset 0 1px 0 rgba(255,255,255,0.2)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  _before={{
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    bg: "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 50%)",
                    pointerEvents: "none",
                  }}
                >
                  View Projects
                  <FiArrowRight size={16} />
                </MotionBox>
              </Link>

              <MotionBox
                as="button"
                onClick={() => {
                  toaster.create({
                    title: "Want to see my CV?",
                    description: "Message me and I'll send it to you!",
                    duration: 3000,
                    type: "info",
                  });
                }}
                px={{ base: "5", md: "7" }}
                py={{ base: "3", md: "3.5" }}
                borderRadius="xl"
                bg="rgba(255, 255, 255, 0.05)"
                border="1px solid rgba(255, 255, 255, 0.15)"
                color="white"
                fontWeight="semibold"
                fontSize={{ base: "sm", md: "md" }}
                display="flex"
                alignItems="center"
                gap="2"
                backdropFilter="blur(12px)"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  borderColor: "rgba(139, 92, 246, 0.5)",
                  boxShadow: "0 15px 40px rgba(139, 92, 246, 0.2)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <FiDownload size={16} />
                Resume
              </MotionBox>

              <Link href="mailto:nurinail2003@gmail.com">
                <MotionBox
                  as="button"
                  px={{ base: "5", md: "7" }}
                  py={{ base: "3", md: "3.5" }}
                  borderRadius="xl"
                  bg="rgba(255, 255, 255, 0.05)"
                  border="1px solid rgba(255, 255, 255, 0.15)"
                  color="white"
                  fontWeight="semibold"
                  fontSize={{ base: "sm", md: "md" }}
                  display="flex"
                  alignItems="center"
                  gap="2"
                  backdropFilter="blur(12px)"
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                    borderColor: "rgba(34, 211, 238, 0.5)",
                    boxShadow: "0 15px 40px rgba(34, 211, 238, 0.2)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMail size={16} />
                  Contact
                </MotionBox>
              </Link>
            </HStack>
          </MotionBox>
        </VStack>
      </MotionBox>

      {/* Scroll indicator */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        position="absolute"
        bottom={{ base: "6", md: "10" }}
        left="50%"
        transform="translateX(-50%)"
        zIndex={10}
      >
        <MotionBox
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <VStack gap="2">
            <Text fontSize="2xs" color="gray.500" letterSpacing="widest" textTransform="uppercase">
              Scroll
            </Text>
            <Box
              w="5"
              h="9"
              borderRadius="full"
              border="2px solid"
              borderColor="rgba(139, 92, 246, 0.5)"
              display="flex"
              alignItems="flex-start"
              justifyContent="center"
              pt="2"
              boxShadow="0 0 20px rgba(139, 92, 246, 0.3)"
            >
              <MotionBox
                w="1.5"
                h="2.5"
                borderRadius="full"
                bg="#8B5CF6"
                boxShadow="0 0 15px rgba(139, 92, 246, 0.8)"
                animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </Box>
          </VStack>
        </MotionBox>
      </MotionBox>
    </Box>
  );
}

"use client";

import { ReactNode } from "react";
import Tilt from "react-parallax-tilt";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface TiltCard3DProps {
  children: ReactNode;
  glowColor?: string;
  className?: string;
}

export function TiltCard3D({ children, glowColor = "#8B5CF6", className }: TiltCard3DProps) {
  return (
    <Tilt
      className={className}
      tiltMaxAngleX={12}
      tiltMaxAngleY={12}
      perspective={1000}
      scale={1.02}
      transitionSpeed={800}
      gyroscope={true}
      glareEnable={true}
      glareMaxOpacity={0.15}
      glareColor={glowColor}
      glarePosition="all"
      glareBorderRadius="16px"
    >
      <MotionBox
        position="relative"
        h="full"
        p={{ base: "5", md: "6" }}
        borderRadius="2xl"
        bg="rgba(15, 15, 20, 0.8)"
        backdropFilter="blur(20px)"
        border="1px solid"
        borderColor="rgba(255, 255, 255, 0.08)"
        overflow="hidden"
        cursor="pointer"
        role="group"
        transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
        boxShadow="0 10px 40px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.05)"
        _hover={{
          borderColor: `${glowColor}50`,
          boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 60px ${glowColor}20, inset 0 1px 0 rgba(255,255,255,0.08)`,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Inner glow on hover */}
        <Box
          position="absolute"
          inset="0"
          borderRadius="2xl"
          bg={`radial-gradient(circle at 50% 0%, ${glowColor}15 0%, transparent 60%)`}
          opacity={0}
          transition="opacity 0.4s ease"
          _groupHover={{ opacity: 1 }}
          pointerEvents="none"
        />
        
        {/* Gradient border effect */}
        <Box
          position="absolute"
          inset="-1px"
          borderRadius="2xl"
          padding="1px"
          background={`linear-gradient(135deg, ${glowColor}60, transparent 40%, ${glowColor}30)`}
          WebkitMask="linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)"
          WebkitMaskComposite="xor"
          maskComposite="exclude"
          opacity={0}
          transition="opacity 0.4s ease"
          _groupHover={{ opacity: 1 }}
          pointerEvents="none"
        />

        {/* 3D Transform for content */}
        <Box
          position="relative"
          zIndex={1}
          style={{
            transform: "translateZ(30px)",
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </Box>
      </MotionBox>
    </Tilt>
  );
}

// Simpler version for smaller cards
export function TiltCardSimple({ children, glowColor = "#8B5CF6" }: TiltCard3DProps) {
  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      perspective={800}
      scale={1.01}
      transitionSpeed={600}
      glareEnable={true}
      glareMaxOpacity={0.1}
      glareColor={glowColor}
      glarePosition="all"
      glareBorderRadius="12px"
    >
      <MotionBox
        position="relative"
        h="full"
        p={{ base: "3", md: "4" }}
        borderRadius="xl"
        bg="rgba(15, 15, 20, 0.7)"
        backdropFilter="blur(16px)"
        border="1px solid"
        borderColor="rgba(255, 255, 255, 0.06)"
        overflow="hidden"
        cursor="pointer"
        role="group"
        transition="all 0.3s ease"
        boxShadow="0 8px 30px -8px rgba(0, 0, 0, 0.4)"
        _hover={{
          borderColor: `${glowColor}40`,
          boxShadow: `0 15px 40px -10px rgba(0, 0, 0, 0.5), 0 0 40px ${glowColor}15`,
        }}
      >
        {/* Subtle inner glow */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          h="60%"
          bg={`linear-gradient(180deg, ${glowColor}08 0%, transparent 100%)`}
          opacity={0}
          transition="opacity 0.3s ease"
          _groupHover={{ opacity: 1 }}
          pointerEvents="none"
        />

        <Box position="relative" zIndex={1}>
          {children}
        </Box>
      </MotionBox>
    </Tilt>
  );
}

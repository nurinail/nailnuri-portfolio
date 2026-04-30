"use client";

import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const MotionBox = motion(Box);

// Dynamically import 3D background to avoid SSR issues
const BackgroundScene3D = dynamic(
  () => import("../3d/Scene3D").then((mod) => mod.BackgroundScene3D),
  { ssr: false }
);

// Neon accent lines
const neonLines = [
  { rotation: 45, top: "25%", left: "8%", width: "120px", delay: 0 },
  { rotation: -30, top: "65%", right: "12%", width: "100px", delay: 2 },
  { rotation: 15, bottom: "35%", left: "15%", width: "80px", delay: 4 },
  { rotation: -45, top: "45%", right: "20%", width: "60px", delay: 1 },
];

export function AnimatedBackground() {
  return (
    <Box
      position="fixed"
      inset="0"
      zIndex="0"
      pointerEvents="none"
      overflow="hidden"
    >
      {/* Deep space gradient base */}
      <Box
        position="absolute"
        inset="0"
        bg="linear-gradient(180deg, #050508 0%, #0a0a14 40%, #080810 70%, #050508 100%)"
      />

      {/* 3D Background Scene */}
      <BackgroundScene3D />

      {/* Subtle grid overlay */}
      <Box
        position="absolute"
        inset="0"
        backgroundImage="
          linear-gradient(rgba(139, 92, 246, 0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139, 92, 246, 0.02) 1px, transparent 1px)
        "
        backgroundSize="60px 60px"
        opacity={0.5}
      />

      {/* Animated gradient orbs */}
      <MotionBox
        position="absolute"
        top="-15%"
        left="-10%"
        w="50vw"
        h="50vw"
        maxW="700px"
        maxH="700px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.02) 40%, transparent 70%)"
        filter="blur(50px)"
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <MotionBox
        position="absolute"
        bottom="-20%"
        right="-15%"
        w="45vw"
        h="45vw"
        maxW="600px"
        maxH="600px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, rgba(34, 211, 238, 0.02) 40%, transparent 70%)"
        filter="blur(50px)"
        animate={{
          x: [0, -50, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Neon accent lines */}
      {neonLines.map((line, i) => (
        <MotionBox
          key={i}
          position="absolute"
          top={line.top}
          left={line.left}
          right={line.right}
          bottom={line.bottom}
          w={line.width}
          h="1px"
          bg="linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.35), transparent)"
          boxShadow="0 0 12px rgba(139, 92, 246, 0.25)"
          style={{ rotate: `${line.rotation}deg` }}
          animate={{
            opacity: [0, 0.7, 0],
            scaleX: [0, 1, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: line.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Corner accent glows */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="350px"
        h="350px"
        bg="radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.06) 0%, transparent 50%)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="0"
        right="0"
        w="350px"
        h="350px"
        bg="radial-gradient(circle at 100% 100%, rgba(34, 211, 238, 0.05) 0%, transparent 50%)"
        pointerEvents="none"
      />

      {/* Strong radial vignette */}
      <Box
        position="absolute"
        inset="0"
        bg="radial-gradient(ellipse at center, transparent 0%, rgba(5, 5, 8, 0.3) 40%, #050508 90%)"
        pointerEvents="none"
      />
    </Box>
  );
}

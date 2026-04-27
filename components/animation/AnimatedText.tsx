"use client";

import { motion } from "framer-motion";

export function AnimatedText() {
	return (
		<motion.h1
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			style={{
				fontSize: "30px",
				fontWeight: 600,
				textAlign: "center",
			}}
		>
			<motion.span
				animate={{
					backgroundPosition: ["0% 50%", "200% 50%"],
				}}
				transition={{
					duration: 10,
					ease: "linear",
					repeat: Infinity,
				}}
				style={{
					display: "inline-block",
					background: `
						linear-gradient(
							120deg,
							#A78BFA,
							#8B5CF6,
							#22D3EE,
							#A78BFA,
							#8B5CF6,
							#22D3EE,
							#A78BFA
						)
					`,
					backgroundSize: "200% 100%",
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
					lineHeight: 1,
					textShadow: "0 0 25px rgba(139,92,246,0.15)",
				}}
			>
				I'am a frontend developer specializing in React and Next.js.
			</motion.span>
		</motion.h1>
	);
}

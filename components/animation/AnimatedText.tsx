"use client";

import { motion } from "framer-motion";

export function AnimatedText() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			style={{
				position: "relative",
				textAlign: "center",
			}}
		>
			{/* Glow backdrop */}
			<motion.div
				animate={{
					opacity: [0.4, 0.7, 0.4],
				}}
				transition={{
					duration: 3,
					ease: "easeInOut",
					repeat: Infinity,
				}}
				style={{
					position: "absolute",
					inset: "-20px",
					background: "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
					filter: "blur(20px)",
					zIndex: -1,
				}}
			/>
			<motion.h1
				style={{
					fontSize: "30px",
					fontWeight: 600,
					margin: 0,
				}}
			>
				<motion.span
					animate={{
						backgroundPosition: ["0% 50%", "200% 50%"],
					}}
					transition={{
						duration: 8,
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
						lineHeight: 1.3,
						filter: "drop-shadow(0 0 30px rgba(139, 92, 246, 0.3))",
					}}
				>
					I&apos;am a frontend developer specializing in React and Next.js.
				</motion.span>
			</motion.h1>
		</motion.div>
	);
}

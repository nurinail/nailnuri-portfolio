import { AnimatedBackground } from "@/components/home/AnimatedBackground";
import { Footer } from "@/components/home/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { LinksSection } from "@/components/home/LinksSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { Box } from "@chakra-ui/react";

export default function Home() {
	return (
		<Box position="relative" minH="100vh" overflow="hidden">
			<AnimatedBackground />
			<Box position="relative" zIndex={1}>
				<HeroSection />
				<ProjectsSection />
				<LinksSection />
				<Footer />
			</Box>
		</Box>
	);
}

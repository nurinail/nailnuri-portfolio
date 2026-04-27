import { Text, VStack } from "@chakra-ui/react";
import { AnimatedText } from "@/components/animation/AnimatedText";
import { FloatingShapes } from "@/components/background/FloatingShapes";
import { CodeLinkItem } from "@/components/common/CodeLinkItem";
import { TopUI } from "@/components/TopUI";
import { code, contact, social } from "@/components/utils/utils";

export default function Home() {
	return (
		<>
			<FloatingShapes />
			<VStack
				zIndex="2"
				maxW="sm"
				mx="auto"
				pt="10xl"
				alignItems="center"
				bg="#0d1219"
				h="100dvh"
			>
				<TopUI />
				<AnimatedText />
				<CodeLinkItem item={code} title="CODE" />
				<CodeLinkItem title="CONTACT" item={contact} />
				<CodeLinkItem title="SOCIAL" item={social} />
				<Text w="full" py="20" color="#A0A0C0" textAlign="center">
					© 2026 Nail Nuri. All rights reserved.
				</Text>
			</VStack>
		</>
	);
}

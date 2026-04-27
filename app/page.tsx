import { Text, VStack } from "@chakra-ui/react";
import { AnimatedText } from "@/components/animation/AnimatedText";
import { CodeLinkItem } from "@/components/common/CodeLinkItem";
import { TopUI } from "@/components/TopUI";
import { code, contact, social } from "@/components/utils/utils";

export default function Home() {
	return (
		<VStack
			maxW="sm"
			mx="auto"
			pt="9xl"
			alignItems="center"
			bg="transparent"
			h="100dvh"
		>
			<TopUI />
			<AnimatedText />
			<CodeLinkItem item={code} title="CODE" />
			<CodeLinkItem title="CONTACT" item={contact} />
			<CodeLinkItem title="SOCIAL" item={social} />
			<Text w="full" py="20" color="#A0A0C0" textAlign="center">
				© 2023 Nail Nuri. All rights reserved.
			</Text>
		</VStack>
	);
}

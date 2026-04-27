import { VStack } from "@chakra-ui/react";
import { TopUI } from "@/components/TopUI";

export default function Home() {
	return (
		<VStack pt="9xl" alignItems="center" bg="transparent" h="100dvh">
			<TopUI />
		</VStack>
	);
}

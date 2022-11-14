import { Badge, Box, Button, useColorMode } from "@chakra-ui/react"
import User from "../../domain/User"

export default function MemberCard({ user: { username } }: { user: User }) {
	const { colorMode } = useColorMode()
	return <Button
		bg={colorMode === "light" ? "gray.100" : "gray.600"}
		h={100}
	>
		<Box overflow="hidden" m={0}>{username} <Badge>ADHERENT</Badge></Box>
	</Button>
}

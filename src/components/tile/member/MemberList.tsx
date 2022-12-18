import {Heading, SimpleGrid, StackDivider, VStack} from "@chakra-ui/react"
import User from "../../../domain/User"
import MemberCard from "./MemberCard"
import Tile from "../Tile"

export default function MemberList({users}: {users: User[]}) {
	return <Tile>
		<VStack w="100%" align="stretch" divider={<StackDivider borderColor="gray.200" />}>
			<Heading>Membres</Heading>
			<SimpleGrid gap={4} columns={2} marginBlock={4}>
				{users.map((user: User) => <MemberCard key={user.id} user={user} />)}
			</SimpleGrid>
		</VStack>
	</Tile>
}

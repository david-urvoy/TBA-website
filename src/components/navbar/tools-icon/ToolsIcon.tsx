import { Flex, MenuButton } from '@chakra-ui/react'
import { useContext } from "react"
import { ConnectedUserContext } from '../../../context/ConnectedUserContext'
import UserIcon from '../../UserIcon'

export default function ToolsIcon() {
	const { connectedUser } = useContext(ConnectedUserContext)
	return <Flex align="center" justify="space-between">
		{!!connectedUser && <Flex marginRight={6}>Bienvenue, {connectedUser.username}</Flex>}
		<MenuButton>
			<UserIcon />
		</MenuButton>
	</Flex>
}

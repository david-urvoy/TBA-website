import {Image} from "@chakra-ui/react"
import {User} from "discord.js"
import {useContext} from "react"
import {ConnectedUserContext} from "../context/connected-user-context"

const UserIcon = () => {
	const {connectedUser} = useContext(ConnectedUserContext)
	return <Image
		src={!!connectedUser ? `https://cdn.discordapp.com/avatars/${connectedUser.id}/${connectedUser.avatar}.png` : "/brain-academy-logo.ico"}
		alt="TBA-logo" rounded="full" h={10} w={10} />
}

export default UserIcon
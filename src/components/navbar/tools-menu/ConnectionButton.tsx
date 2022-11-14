import { LockIcon, UnlockIcon } from "@chakra-ui/icons"
import { MenuItem, useToast, UseToastOptions } from "@chakra-ui/react"
import axios from "axios"
import router from "next/router"
import { useContext, useEffect } from "react"
import { ConnectedUserContext } from "../../../context/ConnectedUserContext"
import User from "../../../domain/User"
import { login, logout } from "../../../oauth/Auth"

const tokenUrl = 'https://discord.com/api/users/@me'

export default function ConnectionButton() {

	const { connectedUser, setConnectedUser } = useContext(ConnectedUserContext)
	const toast = useToast()
	const notify = (
		{
			status = "success",
			duration = 5000,
			isClosable = true,
			position = "bottom-right",
			...other
		}: UseToastOptions) => toast({ status, duration, isClosable, position, ...other })

	useEffect(() => {
		(async () => {
		const fragment = new URLSearchParams(window.location.hash.slice(1))
		const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')]

		if (!!accessToken) {
			try {
				const me = (await axios.get<User>(tokenUrl, { headers: { authorization: `${tokenType} ${accessToken}` } })).data
				setConnectedUser(me)
				notify({ title: "Connexion réussie !" })
			} catch (_) {
				notify({ title: "Connexion échouée...: ", status: "error" })
			}
		}
	})()
}, [])

	const handleLogin = () => login(router)

	const handleLogout = () => logout(router, () => setConnectedUser(null))
		.then(() => notify({ title: "Vous êtes maintenant déconnecté." }))
		.catch(() => notify({ title: "Erreur lors de la déconnexion...", status: "error" }))

	return !connectedUser ?
		<MenuItem onClick={handleLogin} icon={<UnlockIcon w={6} h={6} />}>Connexion</MenuItem>
		:
		<MenuItem onClick={handleLogout} icon={<LockIcon w={6} h={6} />}>Déconnexion</MenuItem >
}

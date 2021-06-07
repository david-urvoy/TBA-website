import {NextRouter} from 'next/dist/next-server/lib/router/router';

const codeUrl = 'https://discord.com/api/oauth2/authorize?client_id=818238353345478676&redirect_uri=http%3A%2F%2Fbrain-academy.fr%3A3000&response_type=token&scope=identify'

export function login(router: NextRouter) {
	router.push(codeUrl)
}

export function logout(router: NextRouter, callback?: () => void) {
	router.push('/')
	if (!!callback) callback()
}

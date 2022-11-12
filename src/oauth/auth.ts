import { NextRouter } from 'next/router'

export function login(router: NextRouter) {
	return router.push(process.env.REDIRECT_URL)
}

export function logout(router: NextRouter, ...callback: (() => void)[]) {
	const disconnectionPromise = router.push('/')
	if (!!callback) callback.forEach(callback => callback())
	return disconnectionPromise
}

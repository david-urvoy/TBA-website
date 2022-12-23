import {ThemeTypings} from '@chakra-ui/react'
import {FaDiscord, FaFacebook, FaInstagram, FaMeetup, FaShoppingBasket, FaTwitter} from 'react-icons/fa'
import {GrGroup} from 'react-icons/gr'
import ButtonLink from './ButtonLink'

function SocialLink({uri, height = '100px', width = '100px', icon, color, borderRadius = '100%'}
	: React.PropsWithChildren<{uri: string, height?: string, width?: string, icon: JSX.Element, iconSize?: string, color: ThemeTypings["colorSchemes"], borderRadius?: string}>) {
	return <ButtonLink href={uri} borderRadius={borderRadius} h={height} w={width} colorScheme={color}>{icon}</ButtonLink>
}

export function Discord({size = '50px'}: {size?: string}) {
	return <SocialLink uri='https://discord.gg/SetVh89mQ8' color='purple' icon={<FaDiscord size={size} />} />
}
export function Facebook({size = '50px'}: {size?: string}) {
	return <SocialLink uri='https://www.facebook.com/brainacademy.lyon' color='facebook' icon={<FaFacebook size={size} />} />
}
export function Meetup({size = '50px'}: {size?: string}) {
	return <SocialLink uri='https://meetu.ps/c/4NVN1/L9z3h/d' color='red' icon={<FaMeetup size={size} />} />
}
export function Instagram({size = '50px'}: {size?: string}) {
	return <SocialLink uri='http://www.instagram.com/brain.academy.lyon/' color='pink' icon={<FaInstagram size={size} />} />
}
export function Twitter({size = '50px'}: {size?: string}) {
	return <SocialLink uri='https://www.twitter.com/TBALyon' color='twitter' icon={<FaTwitter size={size} />} />
}
export function Asso({size = '50px'}: {size?: string}) {
	return <SocialLink uri='https://www.helloasso.com/associations/the-brain-academy/adhesions/2023' color='teal' icon={<GrGroup size={size} />} />
}
export function Boutique({size = '50px'}: {size?: string}) {
	return <SocialLink uri='https://www.helloasso.com/associations/the-brain-academy/boutiques/vetements-tba-2' color='orange' icon={<FaShoppingBasket size={size} />} />
}

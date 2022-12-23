import {StackDivider, VStack} from '@chakra-ui/react'
import Head from 'next/head'
import PageSlice from '../src/components/PageSlice'
import PartnersPage from '../src/components/partner/PartnersPage'
import SocialMediaPage from '../src/components/social/SocialMediaPage'

export default function Home() {
	return <>
		<Head>
			<title>Brain Academy</title>
			<meta name='description' content='Brain Academy' />
			<link rel='icon' href='/brain-academy-logo.ico' />
		</Head>

		<VStack w='100%' className='home' align='stretch' spacing={0} divider={<StackDivider />}>
			<PageSlice bgColorCaption='#4C0099' bgColorPhoto='#CC99FF' title='La TBA' caption='Venez découvrir la Brain Academy' />
			<PageSlice bgColorCaption='#CC0000' bgColorPhoto='#FF9999' title='BOTC' caption='Venez découvrir BOTC' captionSide='RIGHT' />
			<PageSlice bgColorCaption='#FF8000' bgColorPhoto='#FFCC99' title='Jeux de société' caption='Le pôle Jeux de société' />
			<PageSlice bgColorCaption='#003300' bgColorPhoto='#99FF99' title='Sorties et Sport' caption='Pôle sorties et sport' captionSide='RIGHT' />
			<PageSlice bgColorCaption='#000099' bgColorPhoto='#66B2FF' title='Escape Game' caption='Pôle Escape Game' />
			<SocialMediaPage />
			<PartnersPage />
		</VStack >
	</>
}

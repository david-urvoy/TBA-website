import {Box, Center, Flex, StackDivider, VStack} from '@chakra-ui/react'
import Head from 'next/head'
import {useContext} from 'react'
import PageSlice from '../src/components/PageSlice'
import PartnersPage from '../src/components/partner/PartnersPage'
import SocialMediaPage from '../src/components/social/SocialMediaPage'
import {WindowHeightContext} from '../src/context/PageHeightContext'

export default function Home({scrollTop, scrollHeight}: {scrollTop: number, scrollHeight: number}) {

	const {windowHeight} = useContext(WindowHeightContext)

	return <>
		<Head>
			<title>Brain Academy</title>
			<meta name='description' content='Brain Academy' />
			<link rel='icon' href='/brain-academy-logo.ico' />
		</Head>

		<VStack w='100%' className='home' align='stretch' spacing={0} divider={<StackDivider bgColor='purple' />}>
			<PageSlice colorTheme={{bgColorCaption1: '#ff00a0', bgColorCaption2: '#120458'}} bgColorPhoto='#CC99FF' title='La TBA' caption='Venez découvrir la Brain Academy' />
			<PageSlice colorTheme={{bgColorCaption1: '#ff00a0', bgColorCaption2: '#120458'}} bgColorPhoto='#FF9999' title='BOTC' caption='Venez découvrir BOTC' captionSide='RIGHT' />
			<PageSlice colorTheme={{bgColorCaption1: '#ff00a0', bgColorCaption2: '#120458'}} bgColorPhoto='#FFCC99' title='Jeux de société' caption='Le pôle Jeux de société' />
			<PageSlice colorTheme={{bgColorCaption1: '#ff00a0', bgColorCaption2: '#120458'}} bgColorPhoto='#99FF99' title='Sorties et Sport' caption='Pôle sorties et sport' captionSide='RIGHT' />
			<PageSlice colorTheme={{bgColorCaption1: '#ff00a0', bgColorCaption2: '#120458'}} bgColorPhoto='#66B2FF' title='Escape Game' caption='Pôle Escape Game' />
			<Flex direction='column' h={windowHeight} justify='end'>
				<Center bottom='30%'>
					<label
						css={{
							fontFamily: 'fantasy',
							fontWeight: 'bold',
							fontSize: scrollTop / 50 + 'px',
							color: 'red'
						}} >
						Rejoins nous !
					</label>
				</Center>
			</Flex>
			<SocialMediaPage />
			<PartnersPage />
		</VStack >
	</>
}

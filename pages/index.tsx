import {Center, Flex, Grid, GridItem, Text} from '@chakra-ui/react'
import Head from 'next/head'
import {Asso, Boutique, Discord, Facebook, Instagram, Meetup, Twitter} from '../src/components/buttons/SocialButton'
import {pageHeight} from '../src/components/navbar/Navbar'
import PageSlice from '../src/components/PageSlice'

export default function Home() {
	return <>
		<Head>
			<title>Brain Academy</title>
			<meta name='description' content='Brain Academy' />
			<link rel='icon' href='/brain-academy-logo.ico' />
		</Head>

		<Flex direction='column' w='100%' overflowY='scroll' className='home'>
			<PageSlice bgColorCaption='#4C0099' bgColorPhoto='#CC99FF' title='La TBA' caption='Venez découvrir la Brain Academy' />
			<PageSlice bgColorCaption='#CC0000' bgColorPhoto='#FF9999' title='BOTC' caption='Venez découvrir BOTC' captionSide='RIGHT' />
			<PageSlice bgColorCaption='#FF8000' bgColorPhoto='#FFCC99' title='Jeux de société' caption='Le pôle Jeux de société' />
			<PageSlice bgColorCaption='#003300' bgColorPhoto='#99FF99' title='Sorties et Sport' caption='Pôle sorties et sport' captionSide='RIGHT' />
			<PageSlice bgColorCaption='#000099' bgColorPhoto='#66B2FF' title='Escape Game' caption='Pôle Escape Game' />
			<Flex minH={pageHeight} direction='column' justify='space-evenly'>
				<Text w='100%' fontSize='6xl' textAlign='center'>Rejoins nous !</Text>
				<Grid w='100%' minH='400px' gridTemplate='"a b c" "d e f" "g g g"' justifyContent='space-evenly'>
					<GridItem marginBottom='30px'><Center height='40px' fontWeight='bold'>Inscription</Center><Meetup /></GridItem>
					<GridItem marginBottom='30px'><Center height='40px' fontWeight='bold'>Adhésion</Center><Asso /></GridItem>
					<GridItem marginBottom='30px'><Center height='40px' fontWeight='bold'>La boutique</Center><Boutique /></GridItem>
					<GridItem><Discord /></GridItem>
					<GridItem><Facebook /></GridItem>
					<GridItem><Instagram /></GridItem>
					<GridItem><Twitter /></GridItem>
				</Grid>
			</Flex>
		</Flex >
	</>
}

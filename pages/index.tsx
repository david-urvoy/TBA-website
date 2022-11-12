import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import plaquetteRectoImg from '../public/images/plaquette-tba-recto.png'
import plaquetteVersoImg from '../public/images/plaquette-tba-verso.png'

export default function Home() {
	return <>
		<Head>
			<title>Brain Academy</title>
			<meta name='description' content='Brain Academy' />
			<link rel='icon' href='/brain-academy-logo.ico' />
		</Head>

		{/* <div className={styles.container}>
		</div> */}

		<Flex alignItems='center' justifyContent='center' direction='column' >
			<Image alt='TBA-recto' src={plaquetteRectoImg} quality={100} style={{ paddingBlock: '50px' }} />
			<Image alt='TBA-verso' src={plaquetteVersoImg} quality={100} />
		</Flex>
	</>
}

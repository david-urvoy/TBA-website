import {Box, Flex, Text} from '@chakra-ui/react'
import {useContext} from 'react'
import {WindowHeightContext} from '../context/PageHeightContext'

export default function PageSlice({
	colorTheme: {bgColorCaption1: bg1, bgColorCaption2: bg2}
	, title
	, caption
	, captionSide = 'LEFT'
	, bgColorPhoto
}: {colorTheme: {bgColorCaption1: string, bgColorCaption2: string}, title: string, caption: string, captionSide?: 'LEFT' | 'RIGHT', bgColorPhoto: string}) {

	const {windowHeight} = useContext(WindowHeightContext)
	const SliceImage = <Box
		w='100%' textAlign='center'
		bg='url(/images/blood-on-the-clocktower-banner.png)' bgSize='cover'
		boxShadow='0 0 300px 100px white inset'
	/>

	return <Flex minH={windowHeight} bg={bgColorPhoto}>
		{captionSide === 'RIGHT' && SliceImage}
		<Flex background={`linear-gradient(225deg, ${bg1}, ${bg2} 70%)`}
			// borderRadius={captionSide === 'LEFT' ? '0 200px 200px 0' : '200px 0 0 200px'}
			direction='column'
			align='center'
			justify='center'
			w='30%'
		>
			<Text fontWeight='bold'>{title}</Text>
			<Text textAlign='justify' paddingInline='10px'>{LoremIpsum}</Text>
		</Flex>
		{captionSide === 'LEFT' && SliceImage}
	</Flex>
}

const LoremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

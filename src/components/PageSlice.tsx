import {Box, Flex, Text} from '@chakra-ui/react'
import {WindowHeight} from './core/navbar/Navbar'

export default function PageSlice({
	colorTheme: {bgColorCaption1: bg1, bgColorCaption2: bg2}
	, title
	, caption
	, captionSide = 'LEFT'
	, bgColorPhoto
}: {colorTheme: {bgColorCaption1: string, bgColorCaption2: string}, title: string, caption: string, captionSide?: 'LEFT' | 'RIGHT', bgColorPhoto: string}) {

	const SliceImage = <Box
		w='100%' textAlign='center'
		bg='url(/images/blood-on-the-clocktower-banner.png)' bgSize='contain'
		boxShadow='0 0 300px 100px white inset'
	/>

	return <Flex minH={WindowHeight} bg={bgColorPhoto}>
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

const LoremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit[...]'

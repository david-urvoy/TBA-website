import {Box, Flex, Text} from '@chakra-ui/react'
import {useContext} from 'react'
import {WindowHeightContext} from '../context/PageHeightContext'

export default function PageSlice({colorTheme: {bgColorCaption1: bg1, bgColorCaption2: bg2}, title, caption, captionSide = 'LEFT', bgColorPhoto}
	: {colorTheme: {bgColorCaption1: string, bgColorCaption2: string}, title: string, caption: string, captionSide?: 'LEFT' | 'RIGHT', bgColorPhoto: string}) {

	const {windowHeight} = useContext(WindowHeightContext)

	return <Flex minH={windowHeight} bgColor={bgColorPhoto}>
		<>
			{captionSide === 'RIGHT' &&
				<Box bgColor={bgColorPhoto} w='100%' textAlign='center'>
					Photo
				</Box>}
			<Flex background={`linear-gradient(225deg, ${bg1}, ${bg2} 70%)`}
				borderRadius={captionSide === 'LEFT' ? '0 200px 200px 0' : '200px 0 0 200px'}
				direction='column'
				align='center'
				justify='center'
				w='30%'
			>
				<Text fontWeight='bold'>{title}</Text>
				<Text>{caption}</Text>
			</Flex>
			{captionSide === 'LEFT' &&
				<Box bgColor={bgColorPhoto} w='100%' textAlign='center'>
					Photo
				</Box>
			}
		</>
	</Flex>
}

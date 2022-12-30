import {Box, Flex, Text} from '@chakra-ui/react'

export default function PageSlice({
	colorTheme: {bgColorCaption1: bg1, bgColorCaption2: bg2}, title, caption, bgColorPhoto
}: {colorTheme: {bgColorCaption1: string, bgColorCaption2: string}, title: string, caption: string, bgColorPhoto: string}) {

	const SliceImage = <Box
		w='100%' textAlign='center'
		bg='url(/images/blood-on-the-clocktower-banner.png)' bgSize='contain'
		boxShadow='0 0 300px 100px white inset'
	/>

	return <Box
		h='100vh'
		background={`linear-gradient(225deg, ${bg1}, ${bg2} 70%)`}
	>
		<Flex
			bgColor='darkblue'
			h='calc(100vh - 40px)'
			// boxShadow='0 0 300px 100px white inset'
			borderRadius='20px'
			direction='column'
			align='center'
			justify='center'
			margin='20px'
		>
			<Text fontWeight='bold'>{title}</Text>
			<Text textAlign='justify' paddingInline='10px'>{LoremIpsum}</Text>
		</Flex>
	</Box>
}

const LoremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit[...]'

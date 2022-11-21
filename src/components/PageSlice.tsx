import { Box, Flex, Text } from '@chakra-ui/react'
import { pageHeight } from './navbar/Navbar'

export default function PageSlice({ bgColorCaption, title, caption, captionSide = 'LEFT', bgColorPhoto }: { bgColorCaption: string, title: string, caption: string, captionSide?: 'LEFT' | 'RIGHT', bgColorPhoto: string }) {
    return <Flex minH={pageHeight} bgColor={bgColorPhoto}>
        {captionSide === 'LEFT' ?
            <>
                <Flex bgColor={bgColorCaption}
                    borderRadius='0 200px 200px 0'
                    direction='column'
                    align='center'
                    justify='center'
                    w='30%'
                >
                    <Text fontWeight='bold'>{title}</Text>
                    <Text>{caption}</Text>
                </Flex>
                <Box bgColor={bgColorPhoto} w='100%' textAlign='center'>
                    Photo
                </Box>
            </>
            :
            <>
                <Box bgColor={bgColorPhoto} w='100%' textAlign='center'>
                    Photo
                </Box>
                <Flex bgColor={bgColorCaption}
                    borderRadius='200px 0 0 200px'
                    direction='column'
                    align='center'
                    justify='center'
                    w='30%'
                >
                    <Text fontWeight='bold'>{title}</Text>
                    <Text>{caption}</Text>
                </Flex>
            </>
        }
    </Flex>
}
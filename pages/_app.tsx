import {HamburgerIcon} from '@chakra-ui/icons'
import {Box, ChakraProvider, Flex, keyframes} from '@chakra-ui/react'
import {SyntheticEvent, useEffect, useState} from 'react'
import Sidebar from '../src/components/core/sidebar/Sidebar'
import {ConnectedUserContext} from '../src/context/ConnectedUserContext'
import '../styles/globals.css'

export default function Website({Component, pageProps}) {

	const [isSidebarOpen, setSidebarOpen] = useState(false)
	const [connectedUser, setConnectedUser] = useState(undefined)
	const [scrollTop, setScrollTop] = useState(0)
	const [scrollHeight, setScrollHeight] = useState(0)

	useEffect(() => setScrollHeight(document.documentElement.scrollHeight), [])
	useEffect(() => window.addEventListener('scroll', () => setScrollTop(window.scrollY)))

	const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)
	const closeSidebar = () => setSidebarOpen(false)

	return <ChakraProvider>
		<ConnectedUserContext.Provider value={{connectedUser, setConnectedUser}}>
			<Flex direction="column" onScroll={({currentTarget: {scrollTop}}: SyntheticEvent<HTMLElement, Event>) => setScrollTop(scrollTop)}>
				<Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
				<Box>
					<Component {...pageProps} scrollTop={scrollTop} scrollHeight={scrollHeight} />
				</Box>
			</Flex>
			<Flex pos='fixed' justify='end' bgColor='purple' align='end' w={20} h={20} borderRadius={20} zIndex={10} padding={2} top={-10} left={-10}>
				<HamburgerIcon w={8} h={8} style={{cursor: "pointer"}} onClick={toggleSidebar} />
			</Flex>
			<Box
				pos='fixed' h='100%' top={0} zIndex={-10} w='100%'
				bg='url("/images/TBA.png")' bgPos='center' bgRepeat='no-repeat' bgSize='max(40vh, 40vw)'
				animation={`${PulseAnimation} 3s linear infinite`}
			/>
		</ConnectedUserContext.Provider>
	</ChakraProvider>
}

const PulseAnimation = keyframes`
	0% {
		transform: scale(0.9);
	}
	80% {
		transform: scale(0.9);
	}
	85% {
		transform: scale(1);
	}
	90% {
		transform: scale(0.9);
	}
	95% {
		transform: scale(0.95);
	}
	100% {
		transform: scale(0.9);
	}
`

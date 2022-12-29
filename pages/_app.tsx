import {Box, ChakraProvider, Flex, keyframes} from '@chakra-ui/react'
import {SyntheticEvent, useEffect, useRef, useState} from 'react'
import Navbar from '../src/components/core/navbar/Navbar'
import Sidebar from '../src/components/core/sidebar/Sidebar'
import {ConnectedUserContext} from '../src/context/ConnectedUserContext'
import '../styles/globals.css'

export default function Website({Component, pageProps}) {

	const [isSidebarOpen, setSidebarOpen] = useState(false)
	const [connectedUser, setConnectedUser] = useState(undefined)
	const [scrollTop, setScrollTop] = useState(0)
	const [scrollHeight, setScrollHeight] = useState(0)

	const mainComponentRef = useRef(null)

	useEffect(() => setScrollHeight(mainComponentRef.current.scrollHeight), [mainComponentRef])

	const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)
	const closeSidebar = () => setSidebarOpen(false)

	return <ChakraProvider>
		<ConnectedUserContext.Provider value={{connectedUser, setConnectedUser}}>
			<Flex direction="column" h='100%'>
				<Navbar toggleSidebar={toggleSidebar} />
				<Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
				<Box overflowY='auto' ref={mainComponentRef} onScroll={({currentTarget: {scrollTop}}: SyntheticEvent<HTMLElement, Event>) => setScrollTop(scrollTop)}>
					<Component {...pageProps} scrollTop={scrollTop} scrollHeight={scrollHeight} />
					<Box
						pos='absolute'
						h='100%'
						top={0}
						zIndex={-10}
						w='100%'
						overflowY='auto'
						bg='url("/images/TBA.png")' bgPos='center' bgRepeat='no-repeat' bgSize='max(40vh, 40vw)'
						animation={`${PulseAnimation} 3s linear infinite`}
					/>
				</Box>
			</Flex>
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

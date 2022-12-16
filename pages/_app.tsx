import {ChakraProvider, Flex} from '@chakra-ui/react'
import {useState} from 'react'
import Navbar from '../src/components/navbar/Navbar'
import Sidebar from '../src/components/sidebar/Sidebar'
import {ConnectedUserContext} from '../src/context/ConnectedUserContext'
import '../styles/globals.css'

export default function Website({Component, pageProps}) {

	const [isSidebarOpen, setSidebarOpen] = useState(false)
	const [connectedUser, setConnectedUser] = useState(undefined)

	const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)
	const closeSidebar = () => setSidebarOpen(false)

	return <ChakraProvider>
		<ConnectedUserContext.Provider value={{connectedUser, setConnectedUser}}>
			<Flex direction="column" h='100%'>
				<Navbar toggleSidebar={toggleSidebar} />
				<Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
				<Component {...pageProps} />
			</Flex>
		</ConnectedUserContext.Provider>
	</ChakraProvider>
}

import {HamburgerIcon} from '@chakra-ui/icons'
import {Flex, Spacer} from '@chakra-ui/react'
import {useContext, useEffect} from 'react'
import {WindowHeightContext} from '../../../context/PageHeightContext'
import ToolsMenu from './tools-menu/ToolsMenu'

export default function Navbar(props: {toggleSidebar: () => void}) {

	const {setWindowHeight} = useContext(WindowHeightContext)
	useEffect(() => setWindowHeight(window.innerHeight - 60))

	return (
		<Flex
			justify="space-between"
			align="center"
			padding="10px 20px 10px 20px"
			borderBottom="solid 1px"
			className='navbar'
		>
			<HamburgerIcon w={8} h={8}
				style={{cursor: "pointer"}} onClick={props.toggleSidebar} />
			<Spacer />
			<ToolsMenu />
		</Flex>
	)
}

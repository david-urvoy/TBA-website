import { HamburgerIcon } from '@chakra-ui/icons'
import { Flex, Spacer } from '@chakra-ui/react'
import ToolsMenu from './tools-menu/ToolsMenu'

export default function Navbar(props: { toggleSidebar: () => void }) {

	return (
		<Flex
			justify="space-between"
			align="center"
			padding="10px 20px 10px 20px"
			borderBottom="solid 1px"
			className='navbar'
		>
			<HamburgerIcon w={8} h={8}
				style={{ cursor: "pointer" }} onClick={props.toggleSidebar} />
			<Spacer />
			<ToolsMenu />
		</Flex>
	)
}

export const pageHeight = 'calc(100vh - 60px)'

import {Menu, MenuList} from '@chakra-ui/react'
import React from "react"
import ToolsIcon from "../tools-icon/ToolsIcon"
import ConnectionButton from './ConnectionButton'

export default function ToolsMenu() {
	return (
		<Menu>
			<ToolsIcon />
			<MenuList>
				<ConnectionButton />
			</MenuList>
		</Menu>
	)
}

import {Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex, Stack, Switch, useColorMode} from "@chakra-ui/react"
import React from "react"
import theme from "../../../styles/theme"
import navigationItems from "../../navigation-items"
import UserIcon from "../user-icon"
import SidebarItem from "./sidebar-item/sidebar-item"

export default function Sidebar(props) {
	const {colorMode, toggleColorMode} = useColorMode()
	return (
		<>
			<Drawer placement="left" onClose={props.closeSidebar} isOpen={props.isOpen || false}>
				<DrawerOverlay />
				<DrawerContent padding={5}>
					<DrawerBody>
						<Stack>
							{navigationItems.map(item => <SidebarItem key={item.title} item={item} closeSidebar={props.closeSidebar} />)}
						</Stack>
					</DrawerBody>
					<Flex
						bg={colorMode === "light" ? "gray.200" : "gray.600"}
						padding={4}
						align="center"
						justify="space-between"
						rounded="lg"
					>
						<Switch size={theme.media} onChange={toggleColorMode} />
						<UserIcon />
					</Flex>
				</DrawerContent>
			</Drawer>
			{props.children}
		</>
	)
}

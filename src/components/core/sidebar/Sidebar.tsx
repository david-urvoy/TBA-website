import {Drawer, DrawerBody, DrawerContent, DrawerOverlay, Grid, GridItem, Stack, Switch, useColorMode} from "@chakra-ui/react"
import {useContext} from "react"
import theme from "../../../../styles/theme"
import {ConnectedUserContext} from "../../../context/ConnectedUserContext"
import navigationItems from "../../../NavigationItems"
import SidebarCard from "./sidebar-card/SidebarCard"
import SidebarItem from "./sidebar-item/SidebarItem"

export default function Sidebar(props) {
	const {colorMode, toggleColorMode} = useColorMode()
	const {connectedUser} = useContext(ConnectedUserContext)
	return <>
		<Drawer placement="left" onClose={props.closeSidebar} isOpen={props.isOpen || false}>
			<DrawerOverlay />
			<DrawerContent padding={5}>
				<DrawerBody>
					<Stack>
						{navigationItems(connectedUser).map(item => <SidebarItem key={item.title} item={item} closeSidebar={props.closeSidebar} />)}
					</Stack>
				</DrawerBody>
				<Grid
					bg={colorMode === "light" ? "gray.200" : "gray.600"}
					padding={2}
					alignItems="center"
					rounded="lg" templateColumns="repeat(3, 1fr)">
					<GridItem justifySelf="center"><Switch size={theme.media} onChange={toggleColorMode} /></GridItem>
					<GridItem colSpan={2}><SidebarCard /></GridItem>
				</Grid>
			</DrawerContent>
		</Drawer>
		{props.children}
	</>
}

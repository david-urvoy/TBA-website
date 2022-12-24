import {Center, Flex, Grid, GridItem} from "@chakra-ui/react"
import {useContext} from "react"
import {WindowHeightContext} from "../../context/PageHeightContext"
import {Asso, Boutique, Discord, Facebook, Instagram, Meetup, Twitter} from "../core/link/SocialLink"

export default function SocialMediaPage() {

	const {windowHeight} = useContext(WindowHeightContext)

	return <Flex minH={windowHeight} direction='column' justify='space-evenly' bg='linear-gradient(180deg, purple, rgb(27, 32, 43) 70%)'>
		<Grid w='100%' minH='400px' gridTemplate='"a b c" "d e f" "g g g"' justifyContent='space-evenly'>
			<GridItem marginBottom='30px'><Center height='40px' fontWeight='bold'>Inscription</Center><Meetup /></GridItem>
			<GridItem marginBottom='30px'><Center height='40px' fontWeight='bold'>Adhésion</Center><Asso /></GridItem>
			<GridItem marginBottom='30px'><Center height='40px' fontWeight='bold'>La boutique</Center><Boutique /></GridItem>
			<GridItem><Discord /></GridItem>
			<GridItem><Facebook /></GridItem>
			<GridItem><Instagram /></GridItem>
			<GridItem><Twitter /></GridItem>
		</Grid>
	</Flex>
}

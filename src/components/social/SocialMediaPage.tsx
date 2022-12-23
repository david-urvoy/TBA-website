import {Center, Flex, Grid, GridItem, Text} from "@chakra-ui/react"
import {Asso, Boutique, Discord, Facebook, Instagram, Meetup, Twitter} from "../core/link/SocialLink"
import {pageHeight} from "../core/navbar/Navbar"

export default function SocialMediaPage() {
	return <Flex minH={pageHeight} direction='column' justify='space-evenly'>
		<Text w='100%' fontSize='6xl' textAlign='center'>Rejoins nous !</Text>
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

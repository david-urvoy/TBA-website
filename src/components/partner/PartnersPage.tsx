import {Box, Heading, SimpleGrid} from '@chakra-ui/react'
import {pageHeight} from '../core/navbar/Navbar'
import PartnerCard from './PartnerCard'

export default function PartnersPage() {
	return <Box marginInline='50px' minH={pageHeight}>
		<Heading marginY='20px'>Nos Partenaires :</Heading>
		<SimpleGrid templateColumns='repeat(auto-fit, 600px)' justifyContent='space-evenly' spacing='3%'>
			<PartnerCard
				name='Game Spirit'
				colorTheme='lightblue'
				backgroundTheme='darkslateblue'
				description='La passion des jeux'
				address='23 Quai Jean Moulin, 69002 Lyon'
				iconUrl='https://www2.gamespirit.fr/img/1608989485.svg'
				websiteUrl='https://www2.gamespirit.fr/'
				iframeUrl='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.3521673718355!2d4.835725015942841!3d45.76413207910571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea4d2c6bc43f%3A0x2b38cd6ccdb96627!2sGameSpirit!5e0!3m2!1sfr!2sfr!4v1671377208268!5m2!1sfr!2sfr'
			/>
			<PartnerCard
				name='Reboot Bar Gaming'
				colorTheme='orange'
				backgroundTheme='darkred'
				description='Bar Gaming et Jeux à Lyon'
				address="59 All. d'Italie, 69007 Lyon"
				iconUrl='https://www.rebootlyon.fr/wp-content/uploads/2021/06/Logo_header.png'
				websiteUrl='https://www.rebootlyon.fr/'
				iframeUrl='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11140.246527413246!2d4.8284167!3d45.7298588!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5fd1e08cba4bd6f!2sReboot%20Bar%20Gaming!5e0!3m2!1sfr!2sfr!4v1671376771698!5m2!1sfr!2sfr'
			/>
			<PartnerCard
				name='Repère(s)'
				colorTheme='orange'
				backgroundTheme='darkslategrey'
				description='Découvrir Lyon autrement'
				address='2 Rue Camille Jordan, 69001 Lyon'
				iconUrl='https://static.wixstatic.com/media/9df12a_1044e87962a6463b990e511a1313a252~mv2.png/v1/fill/w_530,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9df12a_1044e87962a6463b990e511a1313a252~mv2.png'
				websiteUrl='https://www.reperes-lyon.fr/'
				iframeUrl='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44529.97971032466!2d4.76231105820312!3d45.768710500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eafe7bd3cde7%3A0xbc6e582dc223efe0!2sLe%20Repaire!5e0!3m2!1sfr!2sfr!4v1671377313250!5m2!1sfr!2sfr'
			/>
		</SimpleGrid>
	</Box>
}

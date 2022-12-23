import {Card, CardBody, CardHeader, Center, Divider, Flex, Heading, Image, Link, StackDivider, VStack} from '@chakra-ui/react'
import * as CSS from 'csstype'
import NextLink from 'next/link'
import PartnerCardLabel from './PartnerCardLabel'

export default function PartnerCard({name, address, colorTheme = '', backgroundTheme = '', description = '', iconUrl, websiteUrl = '', iframeUrl}
	: {name: string, address: string, colorTheme?: CSS.Property.Color, backgroundTheme?: CSS.Property.Color, description?: string, iconUrl: string, websiteUrl?: string, iframeUrl: string}) {
	return <NextLink href={websiteUrl}>
		<Card backgroundColor={backgroundTheme || null}>
			<CardHeader>
				<Center>
					<Image src={iconUrl} loading='lazy' h='60px' pos='absolute' style={{left: '15px'}} />
					<Heading color={colorTheme}>
						{name}
					</Heading>
				</Center>
			</CardHeader>
			<Divider />
			<CardBody>
				<VStack direction='column' align='stretch' h='100%' divider={<StackDivider />} alignItems='space-evenly' spacing='20px'>
					<VStack h='100%' justify='end'>
						{!!description &&
							<Center fontSize='30px'>{description}</Center>
						}
						<PartnerCardLabel name='Adresse'>{address}</PartnerCardLabel>
						{!!websiteUrl &&
							<PartnerCardLabel name='Site web'><Link href={websiteUrl}>{websiteUrl}</Link></PartnerCardLabel>
						}
					</VStack>
					<Flex alignItems='end'>
						<iframe src={iframeUrl} width='100%' height='350px' style={{border: '0'}} loading='lazy'></iframe>
					</Flex>
				</VStack>
			</CardBody>
		</Card>
	</NextLink>
}

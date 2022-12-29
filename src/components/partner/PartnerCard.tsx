import {Box, Card, CardBody, CardHeader, Center, Divider, Flex, Heading, Image, Link, StackDivider, VStack} from '@chakra-ui/react'
import * as CSS from 'csstype'
import {useEffect, useRef, useState} from 'react'
import PartnerCardLabel from './PartnerCardLabel'

export default function PartnerCard({name, address, colorTheme = '', backgroundTheme = '', description = '', iconUrl, websiteUrl = '', iframeUrl}
	: {name: string, address: string, colorTheme?: CSS.Property.Color, backgroundTheme?: CSS.Property.Color, description?: string, iconUrl: string, websiteUrl?: string, iframeUrl: string}) {

	const logoRef = useRef(null)
	const [logoWidth, setLogoWidth] = useState(0)
	useEffect(() => setLogoWidth(logoRef.current['clientWidth']))

	return <Card backgroundColor={backgroundTheme || null} margin='20px'>
		<CardHeader>
			<Flex justify='space-around' wrap='wrap'>
				<Image src={iconUrl} loading='lazy' h='60px' ref={logoRef} style={{left: '15px'}} />
				<Heading color={colorTheme}>
					{name}
				</Heading>
				<Box w={logoWidth} />
			</Flex>
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
						<PartnerCardLabel name='Site web'><Link href={websiteUrl} isExternal={true}>{websiteUrl}</Link></PartnerCardLabel>
					}
				</VStack>
				<Flex alignItems='end'>
					<iframe src={iframeUrl} css={{
						border: '0'
						, width: '100%'
						, height: '350px'
					}} loading='lazy'></iframe>
				</Flex>
			</VStack>
		</CardBody>
	</Card>
}

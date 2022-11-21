import { Button, LinkBox, LinkOverlay } from "@chakra-ui/react"
import React from "react"

export default function ButtonLink({ href, children, ...other }: React.PropsWithChildren<{ href: string } & any>) {
	return <LinkBox>
		<LinkOverlay href={href}>
			<Button w="100%" {...other}>
				{children}
			</Button>
		</LinkOverlay>
	</LinkBox>
}

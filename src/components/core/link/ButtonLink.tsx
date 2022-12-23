import {Button} from "@chakra-ui/react"
import Link from "next/link"
import React from "react"

export default function ButtonLink({href, children, ...other}: {href: string} & React.ComponentProps<typeof Button>) {
	return <Link href={href} >
		<Button w="100%" {...other}>
			{children}
		</Button>
	</Link>
}

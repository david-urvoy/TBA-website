export default function PartnerCardLabel({name, children}: React.PropsWithChildren<{name: string}>) {
	return <span style={{
		width: '100%',
		marginBlock: '5px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	}}>
		<label style={{fontSize: '20px', fontWeight: 'bold'}}>{name} : </label>
		{children}
	</span>
}

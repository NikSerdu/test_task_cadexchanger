'use client'
import Button from '@/shared/ui/Button/Button'
import Container from '@/shared/ui/Container/Container'
import { Flex } from 'antd'
import Link from 'next/link'
import { FC } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
	position: sticky;
	top: 0;
	background: white;
	padding: 10px 0;
	border-bottom: 1px solid #e6e6e6;
`

const Logo = styled(Link)`
	color: black;
	font-size: 2em;
	font-weight: bold;
	@media (max-width: 425px) {
		font-size: 1.5em;
	}
`

const Header: FC = () => {
	return (
		<StyledHeader>
			<Container>
				<Flex justify='space-between' align='center'>
					<Logo href={'/'}>Some Company</Logo>
					<Link href={'/contact-us'}>
						<Button>Contact us</Button>
					</Link>
				</Flex>
			</Container>
		</StyledHeader>
	)
}

export default Header

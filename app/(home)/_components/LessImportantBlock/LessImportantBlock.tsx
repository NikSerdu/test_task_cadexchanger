'use client'
import Button from '@/shared/ui/Button/Button'
import Container from '@/shared/ui/Container/Container'
import Title from 'antd/es/typography/Title'
import Link from 'next/link'
import { FC } from 'react'
import styled from 'styled-components'

const StyledBlock = styled.div`
	background: #f5f5f5;
	text-align: center;
	padding: 60px 0;
`

const LessImportantBlock: FC = () => {
	return (
		<StyledBlock>
			<Container>
				<Title>Less important title</Title>
				<Link href={'/contact-us'}>
					<Button>Contact us</Button>
				</Link>
			</Container>
		</StyledBlock>
	)
}

export default LessImportantBlock

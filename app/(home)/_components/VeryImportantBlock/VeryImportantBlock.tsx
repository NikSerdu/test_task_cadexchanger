'use client'
import Button from '@/shared/ui/Button/Button'
import Container from '@/shared/ui/Container/Container'
import { Col, Row } from 'antd'
import Title from 'antd/es/typography/Title'
import Link from 'next/link'
import { FC } from 'react'
import styled from 'styled-components'
import Card from './Card/Card'

const StyledVeryImportantBlock = styled.div`
	padding: 60px 0;
`
const StyledTitle = styled(Title)`
	text-align: center;
`

const StyledBlock = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 30px;
`

const VeryImportantBlock: FC = () => {
	return (
		<StyledVeryImportantBlock>
			<Container>
				<StyledTitle level={2}>Also very important title</StyledTitle>
				<Row gutter={[0, 120]}>
					{new Array(6).fill(0).map((_, index) => (
						<Col key={index} xs={24} sm={12} md={8}>
							<Card
								title='Title'
								description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quidem.'
							/>
						</Col>
					))}
				</Row>
				<StyledBlock>
					<Link href={'/contact-us'}>
						<Button>Contact us</Button>
					</Link>
				</StyledBlock>
			</Container>
		</StyledVeryImportantBlock>
	)
}

export default VeryImportantBlock

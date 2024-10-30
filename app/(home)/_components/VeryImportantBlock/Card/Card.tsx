import Title from 'antd/es/typography/Title'
import { FC } from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
	max-width: 300px;
	margin: 0 auto;
	text-align: center;
	p {
		color: grey;
	}
`
interface IProps {
	title: string
	description: string
}

const Card: FC<IProps> = ({ title, description }) => {
	return (
		<StyledCard>
			<Title level={3}>{title}</Title>
			<p>{description}</p>
		</StyledCard>
	)
}

export default Card

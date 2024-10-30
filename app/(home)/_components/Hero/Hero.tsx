'use client'
import Container from '@/shared/ui/Container/Container'
import { Flex } from 'antd'
import Title from 'antd/es/typography/Title'
import styled from 'styled-components'

const StyledHero = styled.div`
	background: #f5f5f5;
	padding: 30px 0 60px;
`

const Content = styled.div`
	width: 40%;
	h1 {
		font-size: 4em;
	}
	p {
		font-size: 1.3em;
	}
	@media (max-width: 768px) {
		width: 100%;
		text-align: center;
		h1 {
			font-size: 3em;
		}
	}
`
const StyledFlex = styled(Flex)`
	@media (max-width: 768px) {
		flex-direction: column;
	}
`

const VideoContainer = styled.div`
	width: 50%;
	iframe {
		width: 100%;
		height: 315px;
	}
	@media (max-width: 768px) {
		margin-top: 20px;
		width: 100%;
	}
`

export default function Hero() {
	return (
		<StyledHero>
			<Container>
				<StyledFlex justify='space-between'>
					<Content>
						<Title>Most important title on the page</Title>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
							cumque corrupti inventore nesciunt hic ullam ab, eveniet harum
							earum aliquam odit accusamus incidunt rem repellendus magni, est
							suscipit cupiditate quod?
						</p>
					</Content>
					<VideoContainer>
						<iframe
							width='1423'
							height='506'
							src='https://www.youtube.com/embed/dQw4w9WgXcQ'
							title='Rick Astley - Never Gonna Give You Up (Official Music Video)'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						></iframe>
					</VideoContainer>
				</StyledFlex>
			</Container>
		</StyledHero>
	)
}

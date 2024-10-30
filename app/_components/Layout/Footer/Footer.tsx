import { FC } from 'react'
import styled from 'styled-components'

export const StyledFooter = styled.div`
	text-align: center;
	font-size: 2em;
	font-weight: bold;
	padding: 10px 0;
	position: sticky;
	bottom: 0;
	background: white;
	border-top: 1px solid #e6e6e6;
	@media (max-width: 425px) {
		font-size: 1.5em;
	}
`

export const currentYear = new Date().getFullYear()

const Footer: FC = () => {
	return (
		<StyledFooter>
			<p>Some Company {currentYear}</p>
		</StyledFooter>
	)
}

export default Footer

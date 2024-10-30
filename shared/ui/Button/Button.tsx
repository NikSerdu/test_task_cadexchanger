'use client'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
	color: black;
	font-size: 1.3em;
	background: black;
	border-radius: 10px;
	padding: 8px 40px;
	color: white;
	cursor: pointer;
	@media (max-width: 425px) {
		font-size: 1em;
		padding: 8px 30px;
	}
`

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<PropsWithChildren<IProps>> = ({ children, ...rest }) => {
	return <StyledButton {...rest}>{children}</StyledButton>
}

export default Button

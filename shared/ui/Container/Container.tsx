import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'
const StyledContainer = styled.div`
	max-width: 1280px;
	margin: 0 auto;
	padding: 0 10px;
`
const Container: FC<PropsWithChildren<{ className?: string }>> = ({
	children,
	className,
}) => {
	return <StyledContainer className={className}>{children}</StyledContainer>
}

export default Container

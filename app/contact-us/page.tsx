import Container from '@/shared/ui/Container/Container'
import { Metadata } from 'next'
import { FC } from 'react'
import styled from 'styled-components'
import ContactForm from './_components/ContactForm/ContactForm'

export const metadata: Metadata = {
	title: 'Contact page',
	description: 'It is a contact page of the test task',

	openGraph: {
		title: 'Contact page',
		description: 'It is a contact page of the test task',
		images: 'https://placehold.co/600x400',
	},
	twitter: {
		title: 'Contact page',
		description: 'It is a contact page of the test task',
		images: 'https://placehold.co/600x400',
	},
}

const StyledContainer = styled(Container)`
	text-align: center;
`

const ContactUs: FC = () => {
	return (
		<StyledContainer>
			<ContactForm />
		</StyledContainer>
	)
}

export default ContactUs

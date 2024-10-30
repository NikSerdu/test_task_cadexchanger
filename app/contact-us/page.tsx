import { Metadata } from 'next'
import { FC } from 'react'
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

const ContactUs: FC = () => {
	return <ContactForm />
}

export default ContactUs

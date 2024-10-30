import { Metadata } from 'next'
import Hero from './_components/Hero/Hero'
import LessImportantBlock from './_components/LessImportantBlock/LessImportantBlock'
import VeryImportantBlock from './_components/VeryImportantBlock/VeryImportantBlock'
export const metadata: Metadata = {
	title: 'Home page',
	description: 'It is a home page of the test task',
	openGraph: {
		title: 'Home page',
		description: 'It is a home page of the test task',
		images: 'https://placehold.co/600x400',
	},
	twitter: {
		title: 'Home page',
		description: 'It is a home page of the test task',
		images: 'https://placehold.co/600x400',
	},
}
export default function Home() {
	return (
		<>
			<Hero />
			<VeryImportantBlock />
			<LessImportantBlock />
		</>
	)
}

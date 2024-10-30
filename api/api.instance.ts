import axios from 'axios'

export const instance = axios.create({
	baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}/api`,
	headers: {
		'Content-Type': 'application/json',
	},
})

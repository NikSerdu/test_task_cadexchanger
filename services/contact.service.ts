import { instance } from '@/api/api.instance'
import { IContactData } from '@/app/contact-us/_components/ContactForm/contact.interface'

export const ContactService = {
	async sendContact(data: IContactData) {
		const response = await instance<{ message: string }>({
			url: `contact`,
			method: 'POST',
			data,
		})
		return response.data
	},
}

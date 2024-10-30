'use client'
import { ContactService } from '@/services/contact.service'
import Button from '@/shared/ui/Button/Button'
import Container from '@/shared/ui/Container/Container'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Form, Input } from 'antd'
import Title from 'antd/es/typography/Title'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import styled from 'styled-components'
import * as z from 'zod'
import { IContactData } from './contact.interface'

const schema = z.object({
	name: z.string().min(1, 'Name is required'),
	email: z.string().email('Invalid email'),
	message: z.string().min(1, 'Message is required'),
})

const StyledForm = styled.form`
	max-width: 400px;
	border: 1px solid black;
	border-radius: 10px;
	padding: 10px;
	margin: 0 auto;
`

const StyledButton = styled(Button)`
	width: 100%;
`

const StyledContainer = styled(Container)`
	text-align: center;
`

const { TextArea } = Input

const ContactForm: FC = () => {
	const { mutateAsync, isSuccess, data } = useMutation({
		mutationFn: (data: IContactData) => ContactService.sendContact(data),
	})
	const onSubmit = (data: IContactData) => {
		mutateAsync(data)
	}
	const { control, handleSubmit } = useForm<IContactData>({
		defaultValues: { name: '', email: '', message: '' },
		resolver: zodResolver(schema),
	})

	if (data && isSuccess) {
		return (
			<StyledContainer>
				<Title>{data.message}</Title>
			</StyledContainer>
		)
	}

	return (
		<StyledContainer>
			<Title>Only CTA on the page</Title>
			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name='name'
					control={control}
					render={({ field, fieldState }) => (
						<Form.Item
							label='Name'
							labelCol={{ span: 24 }}
							validateStatus={fieldState.error ? 'error' : ''}
							help={fieldState.error?.message}
							required
						>
							<Input {...field} />
						</Form.Item>
					)}
				/>
				<Controller
					name='email'
					control={control}
					render={({ field, fieldState }) => (
						<Form.Item
							label='Email'
							labelCol={{ span: 24 }}
							validateStatus={fieldState.error ? 'error' : ''}
							help={fieldState.error?.message}
							required
						>
							<Input {...field} />
						</Form.Item>
					)}
				/>
				<Controller
					name='message'
					control={control}
					render={({ field, fieldState }) => (
						<Form.Item
							label='Message'
							labelCol={{ span: 24 }}
							validateStatus={fieldState.error ? 'error' : ''}
							help={fieldState.error?.message}
							required
						>
							<TextArea {...field} />
						</Form.Item>
					)}
				/>

				<StyledButton type='submit'>Submit</StyledButton>
			</StyledForm>
		</StyledContainer>
	)
}

export default ContactForm

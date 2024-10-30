'use client'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Layout } from 'antd'
import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'
import Footer from './Footer/Footer'
import Header from './Header/Header'

const StyledLayout = styled(Layout)`
	background: white;
	min-height: 100vh;
	position: relative;
`
const queryClient = new QueryClient()
const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<AntdRegistry>
				<StyledLayout>
					<Header />
					<Layout.Content>{children}</Layout.Content>
					<Footer />
				</StyledLayout>
			</AntdRegistry>
		</QueryClientProvider>
	)
}

export default MainLayout

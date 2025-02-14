import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import React, {PropsWithChildren} from 'react'

const Layout: React.FC<PropsWithChildren<{}>> = ({children}) => {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	)
}

export default Layout

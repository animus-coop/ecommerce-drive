import Head from 'next/head';
import Footer from '../components/navigation/Footer';

type Props = {
	children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Head>
				<title>AlMargen | Del otro lado de tu mesa</title>
				<meta content="width=device-width, initial-scale=1.0" name="viewport" />
			</Head>
			<div className="page-wrapper">
			<div className="dev-container"></div>	
			<div className="develop">Develop Stage</div>
				{children}
				<Footer />
			</div>
		</>
	);
};

export default Layout;


import Head from 'next/head';
import Footer from '../components/design/Footer';
import Navbar from '../components/design/Navbar';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Head>
                <title>Next.js Project</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <Navbar />
            {/* <header>
                <h1>Next.js Project</h1>
            </header> */}

            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
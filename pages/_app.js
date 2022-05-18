import '../styles/globals.scss'
import Layout from "../components/Layout";
import mobile from "../public/mobile-phone.jpg"
import Image from "next/Image";
import Head from 'next/head'

function MyApp({Component, pageProps}) {
    return <Layout>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Koulen&family=Lato:ital,wght@1,300&family=Montserrat:ital,wght@1,300&display=swap"
                  rel="stylesheet"/>
        </Head>
        <main>
            <Component {...pageProps} />
        </main>
        <Image src={mobile}
               alt={"mobile-phone"}
               placeholder="blur"
        />
    </Layout>

}

export default MyApp

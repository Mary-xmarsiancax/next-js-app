import '../styles/globals.scss'
import Layout from "../components/Layout";
import mobile from "../public/mobile-phone.jpg"
import Image from "next/Image";

function MyApp({Component, pageProps}) {
    return <Layout>
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

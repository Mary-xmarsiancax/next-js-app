import Heading from "../../components/Heading";
import Head from 'next/head'

export const getStaticProps = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await response.json()

    if (!data) {
        return {
            notFound: true
        }
    }
    return {
        props: {contacts: data}
    }
}

const Contacts = ({contacts}) => {

    return <>
        <Head>
            <title>Contacts</title>
        </Head>
        <Heading text="Contacts list:"/>
        <ul>
            {contacts && contacts.map(({id, name, email}) => (
                    <li key={id}><strong>{name}</strong><span> {email}</span></li>
                )
            )}
        </ul>
    </>
}
export default Contacts
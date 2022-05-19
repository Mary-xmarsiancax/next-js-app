import Heading from "../../components/Heading";
import Head from 'next/head'
import Link from "next/link";
import {GetStaticProps} from "next"
import {ContactType} from "../../types";
import {FC} from "react"


type ContactsProps = {
    contacts: Array <ContactType>
}

export const getStaticProps: GetStaticProps = async () => {
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

const Contacts:FC<ContactsProps> = ({contacts}) => {

    return <>
        <Head>
            <title>Contacts</title>
        </Head>
        <Heading text="Contacts list:"/>
        <ul>
            {contacts && contacts.map(({id, name}) => (
                    <li key={id}>
                        <Link href={`/contacts/${id}`}>{name}</Link>
                    </li>
                )
            )}
        </ul>
    </>
}
export default Contacts
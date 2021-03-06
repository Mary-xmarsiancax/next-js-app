import Heading from "../components/Heading";
import {useRouter} from "next/router";
import {useEffect} from "react";
import Head from 'next/head'
import {FC} from "react"

const Error:FC = () => {
    const router = useRouter()
    useEffect(()=>{
        setTimeout(()=>{router.push('/')},
            3000)
    }, [router])

    return <>
        <Head>
            <title>Error</title>
        </Head>
        <Heading text="404"/>
        <Heading text="Something is going wrong..."/>
    </>
}
export default Error
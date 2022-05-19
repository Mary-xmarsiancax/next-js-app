import Heading from "../../components/Heading";
import Head from 'next/head'
import Link from "next/link";

export const getStaticProps = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await response.json()

    if (!data) {
        return {
            notFound: true
        }
    }
    return {
        props: {posts: data}
    }
}

const Index = ({posts}) => {
    return <>
        <Head>
            <title>Index</title>
        </Head>
        <Heading tag="h1" text="Posts list"/>
        <ul>
            {posts && posts.map(({id, title}) => (
                <li key={id}>
                    <Link href={`/posts/${id}`}>{title}</Link>
                </li>
            ))}
        </ul>

    </>
}
export default Index
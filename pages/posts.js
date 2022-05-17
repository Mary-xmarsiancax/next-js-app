import Heading from "../components/Heading";
import Head from 'next/head'


const Posts = () => {
    return <>
        <Head>
            <title>Posts</title>
        </Head>
        <Heading tag="h1" text="Posts list"/>
        <Heading tag = "p" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto esse
        laudantium minus?"/>
    </>
}
export default Posts
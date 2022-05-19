import Head from 'next/head'
import PostInfo from "../../components/PostInfo";

export const getStaticPaths = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await response.json()

    const paths = data.map(({ id }) => ({
        params: { id: id.toString() }
    }));
    return {
        paths,
        fallback: false,
    }
}

const Post = ({ post }) => (
    <>
        <Head>
            <title>Posts page</title>
        </Head>
        <PostInfo post={post} />
    </>
);

export default Post;
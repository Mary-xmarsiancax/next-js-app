import Heading from "../components/Heading";
import s from "../styles/Home.module.scss"
import Head from 'next/head'
import Socials from "../components/Socials";

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.API_HOST}socials`)
  const data = await response.json()

  if (!data) {
    return {
      notFound: true
    }
  }
  return {
    props: {socials: data}
  }
}

const Home = ({socials}) => {

  return <div className={s.wrapper}>
    <Head>
      <title>Home</title>
    </Head>
    <Heading text="Next-js-app"/>
    <Socials socials={socials}/>
  </div>
}
export default Home
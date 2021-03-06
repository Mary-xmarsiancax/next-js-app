import Heading from "../components/Heading";
import s from "../styles/Home.module.scss"
import Head from 'next/head'
import Socials from "../components/Socials";
import {SocialType} from "../types";
import {FC} from "react"

type HomeProps = {
  socials:Array<SocialType>
}

export const getStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/socials/`)
    const data = await response.json()

    if (!data) {
      return {
        notFound: true
      }
    }
    return {
      props: {socials: data}
    }
  } catch {
    return {
      props: {socials: null}
    }
  }
}

const Home:FC<HomeProps> = ({socials}) => {

  return <div>
    <div className={s.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="Next-js-app"/>
    </div>
    <Socials socials={socials}/>
  </div>

}
export default Home
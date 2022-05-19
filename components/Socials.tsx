import Head from 'next/head'
import s from "../styles/Social.module.scss"
import {SocialType} from "../types";
import {FC} from "react"

type SocialProps = {
    socials: Array<SocialType>
}

const Socials:FC<SocialProps> = ({socials}) => {
    if (!socials) {
        return null
    }
    return <>
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css" />
        </Head>
        <ul className={s.socials}>
            {socials && socials.map(({id, icon, path}) => (
                    <li key={id}>
                        <a href={path} target="_blank" rel="noopener noreferrer">
                            <i className={`fab fa-${icon}`} aria-hidden="true" />
                        </a>
                    </li>
                )
            )}
        </ul>

    </>
}
export default Socials
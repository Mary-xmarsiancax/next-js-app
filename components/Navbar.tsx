import s from "../styles/Navbar.module.scss"
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";
import logo from "../public/logo.png"
import {FC} from "react"

const navigation = [
    {id: 1, title: "Home", path: "/"},
    {id: 2, title: "Posts", path: "/posts"},
    {id: 3, title: "Contacts", path: "/contacts"},
]
const Navbar:FC = () => {
    const {pathname} = useRouter();
    return <div className={s.nav}>
        <nav className={s.nav}>
            <div>
                <Image src={logo} width={65} height={65} alt="logo"/>
            </div>
            <div className={s.links}>
                {navigation.map(({id, title, path}) =>
                    (<Link key={id} href={path}><a className={pathname === path ? s.active : null}>{title}</a></Link>))}
            </div>
        </nav>
    </div>
}
export default Navbar
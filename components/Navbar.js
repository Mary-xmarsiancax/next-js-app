import s from "../styles/Navbar.module.scss"
import Link from "next/link";
import {useRouter} from "next/router";

const navigation = [
    {id: 1, title: "Home", path: "/"},
    {id: 2, title: "Posts", path: "/posts"},
    {id: 3, title: "Contacts", path: "/contacts"},
]
const Navbar = () => {
    const {pathname} = useRouter();
    return <div className={s.nav}>
        <nav className={s.nav}>
            <div className={s.logo}>
                logo
            </div>
            <div className={s.links}>
                {navigation.map(({id, title, path}) =>
                    (<Link key={id} href={path}><a className={pathname === path ? s.active : null}>{title}</a></Link>))}
            </div>
        </nav>
    </div>
}
export default Navbar
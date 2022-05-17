import s from "../styles/Navbar.module.scss"
import Link from "next/link";

const Navbar = () => {
    return <div className={s.nav}>
       <nav className={s.nav}>
          <div className={s.logo}>
              logo
          </div>
           <div className={s.links}>
               <Link href={"/"}><a>Home</a></Link>
               <Link href={"/posts"}><a>Posts</a></Link>
               <Link href={"/contacts"}><a>Contacts</a></Link>
           </div>
       </nav>
    </div>
}
export default Navbar
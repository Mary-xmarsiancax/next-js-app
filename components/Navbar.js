import s from "../styles/Navbar.module.scss"

const Navbar = () => {
    return <div className={s.nav}>
       <nav className={s.nav}>
          <div className={s.logo}>
              logo
          </div>
           <div className={s.links}>
               <a>Home</a>
               <a>Posts</a>
               <a>Contacts</a>
           </div>
       </nav>
    </div>
}
export default Navbar
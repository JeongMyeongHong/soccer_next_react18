import Link from "next/link"
import style from "../common/styles/Nav.module.css"

export default function Nav(){
    return(
        <nav className={style.nav}>
            <ul>
                basic
                <li className={style.li}> <Link href='/'>Home</Link></li>
                <li className={style.li}> <Link href='/basic/bmi'>bmi</Link></li>
                <li className={style.li}> <Link href='/basic/calc'>calc</Link></li>
                <li className={style.li}> <Link href='/basic/counter'>counter</Link></li>
            </ul>
        </nav>
    )
}
import Head from "next/head";
import styles from "../styles/nav.module.css";
import Link from "next/link";

export default function navbar(){
    return(
        <nav className={styles.nav}>
          <span> <ul>
            <li>
                <Link href="/">HOME</Link>
            </li>
            <li>
                <Link href="/about">ABOUT</Link>
            </li>
           </ul>
           </span>
        </nav>
    );
}

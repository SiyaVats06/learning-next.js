import React from "react";
import styles from "../styles/Home.module.css";
import Nav from "./navbar";
import Header from "./Header"
function Layout({children}){
    return(
      <>
      <Nav />
        <div className={styles.container}>
          <main className={styles.main}>
          <Header />
          {children}</main>

        </div>
        </>
    );
}
export default Layout;
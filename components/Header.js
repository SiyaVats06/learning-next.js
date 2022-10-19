import Head from "next/head";
import headerStyle from "../styles/header.module.css"

export default function about(){
    return(
        <div>
           <h1 className={headerStyle.title}>WEBDEV tutorial</h1>
           <p className={headerStyle.description}>We keep you UPDATED</p>
        </div>
    );
}
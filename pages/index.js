import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import { ArticleList } from '../components/ArticleList';

export default function Home({articles}) {
  return (
    <div className={styles.container}>
    <Head>
      <title>next-app</title>
    </Head>
     <ArticleList articles={articles} />
    </div>
  )
  
}

export const getStaticProps= async ()=>{
  const res=await fetch ('http://jsonplaceholder.typicode.com/posts?_limit=6')
  const articles=await res.json()

  return{
    props:{
      articles
    }
  }
}
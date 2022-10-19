import articleStyles from "../styles/articles.module.css"
import Link from "next/link"
const ArticleItem=({article})=>{
    return(
     <Link href="/articles/[id]" as={'/articles/${article.id}'}>
        <a className={articleStyles.card}>
            <h3>{article.title} &rarr;</h3>
            <p>{article.body}</p>
        </a>
     </Link>
    )
}

export default ArticleItem;
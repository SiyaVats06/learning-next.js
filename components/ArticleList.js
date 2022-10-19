import articleStyles from  "../styles/articles.module.css"
import ArticleItem from "./ArticleItem";
export const ArticleList=({articles})=>{
   return(
      <div className={articleStyles.grid}>
               {articles.map((articles)=>(<ArticleItem article={articles} />))}
      </div>


   );



}
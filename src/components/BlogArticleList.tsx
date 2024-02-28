import BlogArticle from "./BlogArticle.tsx";
import'./BlogArticleList.css'
import '../types/BlogArticle';  /* import der TypeScript-Datei für die Datentypen. */

type BlogArticleListProps = {
    list: BlogArticle[];
}
export default function BlogArticleList(props: Readonly<BlogArticleListProps>): JSX.Element {
    return (
        <div className="blogArticleList">
            {props.list.map((article:BlogArticle) => {
                return <BlogArticle key={article.id} {...article}/>
            })}
        </div>
    );
}


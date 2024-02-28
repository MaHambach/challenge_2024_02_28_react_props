import './BlogArticle.css';
import '../types/BlogArticle';  /* import der TypeScript-Datei für die Datentypen. */

type BlogArticleProps = BlogArticle;
export default function BlogArticle(props: Readonly<BlogArticleProps>): JSX.Element {
    return (
        <article className="blogArticle-article">
            <h2 className="blogArticle-title">{props.title}</h2>
            <p className="blogArticle-date">Veröffentlicht
                am {props.date.getDate() + "." + (props.date.getMonth() + 1) + "." + props.date.getFullYear()}</p>
            <p className="blogArticle-content">{props.summary}</p>
            <details className="blogArticle-details">
                {props.text.map((point: string, index:number) => {
                    return <p key={index}>{point}</p>
                })}
            </details>
        </article>
    );
}


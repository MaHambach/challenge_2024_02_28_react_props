import './BlogHeader.css';


type BlogHeaderProps = {
    blogHeaderFunction: (title:string) => void;
}
export default function BlogHeader(props: Readonly<BlogHeaderProps>):JSX.Element {
    return (
        <header className="blogHeader">
            <h1>Beeeesss!!!!!</h1>
            <nav className="headerLinklist">
                <button className="headerButton" onClick={() => props.blogHeaderFunction("BlogMain")}>
                    Home
                </button>
                <button className="headerButton" onClick={() => props.blogHeaderFunction("Bienenarten")}>
                    Bienenarten
                </button>
                <button className="headerButton" onClick={() => props.blogHeaderFunction("Profile")}>
                    Profil
                </button>
            </nav>
        </header>
    );
}
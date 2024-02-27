import './BlogHeader.css';

import {setPage} from './Blog'
export default function BlogHeader():JSX.Element {
    return (
        <header className="blogHeader">
            <h1>Beeeesss!!!!!</h1>
            <nav className="headerLinklist">
                <button className="headerButton" onClick={() => setPage("Bienenarten")}>
                    Bienenarten
                </button>
                <button className="headerButton" onClick={() => setPage("Index")}>
                    Home
                </button>
                <button className="headerButton" >

                </button>

            </nav>
        </header>
    );
}
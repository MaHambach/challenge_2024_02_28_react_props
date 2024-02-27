import './Blog.css';

import BlogHeader from './BlogHeader.tsx';
import BlogMain from './BlogMain.tsx';
import Bienenarten from './Bienenarten.tsx';

let pageTitle:string = 'Bienenarten';

export default function blog():JSX.Element {
    return (
        <div className='blog '>
            <BlogHeader />
            {mainPage(pageTitle)}
        </div>
    );
}

function mainPage(title:string):JSX.Element{
    switch(title) {
        case "Index":
            return <BlogMain/>
        case "Bienenarten":
            return <Bienenarten/>
        case "contact":
        default:
            return <BlogMain/>
    }
}

export function setPage(title:string):void {
    pageTitle = title;
    console.log(pageTitle);
    blog();
}
import './Blog.css';
import BlogHeader from './BlogHeader.tsx';
import BlogMain from './BlogMain.tsx';
import Bienenarten from './Bienenarten.tsx';
import Profile from "./Profile.tsx";
import {useState} from "react";
/*
Step 1:
Modify your blog so that a blog entry component is dynamically populated with props and the blog entry component is
used multiple times.

Step 2:
Create a profile component (which should be at the same level as the blog component in App.tsx) that introduces you as
a developer. If you have already created a profile component in the last task (bonus task), you can further expand it
and improve it with the new knowledge."

*/

export default function blog():JSX.Element {
    const [page, setPage] = useState<string>("BlogMain");

    function handlePageChange(title:string):void {
        setPage(title);
    }

    return (
        <div className='blog '>
            <BlogHeader blogHeaderFunction={handlePageChange} />
            {mainPage(page)}
        </div>
    );
}

function mainPage(title:string):JSX.Element{
    switch(title) {
        case "BlogMain":
            console.log(title);
            return <BlogMain/>
        case "Bienenarten":
            console.log(title);
            return <Bienenarten/>
        case "Profile":
            console.log(title);
            return <Profile/>
        default:
            return <BlogMain/>
    }
}

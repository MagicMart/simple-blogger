// @flow

import React from "react";
import {Route, Link} from "react-router-dom";
import ReactMarkdown from "react-markdown";

import Nav from "./Nav";
import markdown from "./articles/markdown";

type Props = {
    props: Object,
    location: Object
};

function Home(props: Props) {
    const [post, setPost] = React.useState<?string>(null);

    React.useEffect(() => {
        const {pathname} = props.location;

        if (pathname === "/") {
            setPost(null);
        } else {
            const str = pathname.replace("/", "");
            const stuff = markdown.find(obj => obj.pathname === str);
            stuff && stuff.module.then(markdown => setPost(markdown));
        }
    }, [props.location.pathname]);

    return (
        <main>
            <Nav {...props} />
            {post === null ? (
                <>
                    <nav>
                        {markdown.map(obj => (
                            <Link
                                className="title"
                                to={`/${obj.pathname}`}
                                key={obj.title}
                            >
                                <div className="link">
                                    {" "}
                                    <small>
                                        <time className="date">{obj.date}</time>
                                    </small>{" "}
                                    {obj.title}
                                </div>
                            </Link>
                        ))}
                    </nav>
                    <footer>
                        <p>© 2019 Martin Tudor</p>
                    </footer>
                </>
            ) : (
                <article>
                    <ReactMarkdown
                        source={post}
                        escapeHtml={false}
                        className="markdown"
                    />
                </article>
            )}
        </main>
    );
}

export default Home;

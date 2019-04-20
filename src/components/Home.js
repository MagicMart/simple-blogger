import React from "react";
import { Route, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown/with-html";

import markdown from "./articles/markdown";

/**
 * @param {{ children: React.ReactNode; }} props
 */
function Article(props) {
    return <>{props.children}</>;
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null
        };
    }

    componentDidMount() {
        const { pathname } = this.props.location;
        if (pathname !== "/") {
            const str = pathname.replace("/", "");
            const stuff = markdown.find(obj => obj.pathname === str);
            stuff &&
                stuff.module.then(markdown =>
                    this.setState(() => ({
                        post: markdown
                    }))
                );
        }
    }

    /**
     * @param {{ location: { pathname: string; }; }} prevProp
     */
    componentDidUpdate(prevProp) {
        const { pathname } = this.props.location;
        if (prevProp.location.pathname === pathname) {
            return;
        }
        if (pathname === "/") {
            this.setState({ post: null });
        } else {
            const str = pathname.replace("/", "");
            const stuff = markdown.find(obj => obj.pathname === str);
            stuff &&
                stuff.module.then(markdown =>
                    this.setState(() => ({
                        post: markdown
                    }))
                );
        }
    }

    render() {
        return (
            <main>
                {this.state.post === null ? (
                    <ul>
                        {markdown.map(obj => (
                            <li key={obj.title}>
                                <Link className="title" to={`/${obj.pathname}`}>
                                    {obj.title}{" "}
                                    <small>
                                        <time className="date">{obj.date}</time>
                                    </small>
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <Article>
                        <article>
                            <ReactMarkdown
                                source={this.state.post}
                                escapeHtml={false}
                                className="markdown"
                            />
                        </article>
                    </Article>
                )}
                <Route path="/:id" component={Article} />
            </main>
        );
    }
}

export default Home;

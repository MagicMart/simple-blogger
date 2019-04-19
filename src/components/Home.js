import React from "react";
import { Route, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown/with-html";

const markdown = [
    {
        pathname: "hello-world",
        title: "Hello World",
        module: import("./articles/hello-world.md")
    },
    {
        pathname: "the-days-are-too-short",
        title: "The days are too short",
        module: import("./articles/the-days-are-too-short.md")
    },
    {
        pathname: "where-is-hell",
        title: "Where is hell?",
        module: import("./articles/where-is-hell.md")
    }
];

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
            const stuff = markdown.find(obj => obj.pathname === str).module;
            stuff &&
                stuff.then(markdown =>
                    this.setState(() => ({
                        post: markdown
                    }))
                );
        }
    }

    render() {
        return (
            <main className="main">
                {this.state.post === null ? (
                    markdown.map(obj => (
                        <p key={obj.title}>
                            <Link className="title" to={obj.pathname}>
                                {obj.title}
                            </Link>
                        </p>
                    ))
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

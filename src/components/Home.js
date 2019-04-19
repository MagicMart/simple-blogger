import React from "react";
import { Route, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown/with-html";

const markdown = {
    "hello-world": ["Hello World", import("./articles/article.md")],
    "The-days-are-long": [
        "These days are long",
        import("./articles/article.1.md")
    ],
    "Where-is-Hell": ["Where is Hell?", import("./articles/article.2.md")]
};
const keyArray = Array.from(Object.keys(markdown));
const articleTitles = keyArray.map(key => markdown[key][0]);

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
            const stuff = markdown[str][1];
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
                    articleTitles.map((title, i) => (
                        <p key={title}>
                            <Link className="title" to={keyArray[i]}>
                                {title}
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

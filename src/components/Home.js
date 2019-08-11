// @flow

import React from "react";
import {Route, Link} from "react-router-dom";
import ReactMarkdown from "react-markdown";

import Nav from "./Nav";
import markdown from "./articles/markdown";

/**
 * @param {{ children: React.ReactNode; }} props
 */
function Article(props) {
    return <>{props.children}</>;
}

type Props = {
    props: Object,
    location: Object
};

type State = {
    post: ?string
};

class Home extends React.Component<Props, State> {
    state = {
        post: null
    };
    componentDidMount() {
        const {pathname} = this.props.location;
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
    componentDidUpdate(prevProp: Object) {
        const {pathname} = this.props.location;
        if (prevProp.location.pathname === pathname) {
            return;
        }
        if (pathname === "/") {
            this.setState({post: null});
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
                <Nav {...this.props} />
                {this.state.post === null ? (
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
                                            <time className="date">
                                                {obj.date}
                                            </time>
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

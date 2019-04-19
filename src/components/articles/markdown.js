const markdown = [
    {
        pathname: "hello-world",
        title: "Hello World",
        module: import("./hello-world.md")
    },
    {
        pathname: "the-days-are-too-short",
        title: "The days are too short",
        module: import("./the-days-are-too-short.md")
    },
    {
        pathname: "where-is-hell",
        title: "Where is hell?",
        module: import("./where-is-hell.md")
    }
];

export default markdown;

const markdown = [
    {
        pathname: "a-day-out",
        title: "A Day Out",
        date: "2019-11-13",
        module: import("./a-day-out.md")
    },
    {
        pathname: "hello-world",
        title: "Hello World",
        date: "2019-04-14",
        module: import("./hello-world.md")
    },
    {
        pathname: "the-days-are-too-short",
        title: "The days are too short",
        date: "2019-04-13",
        module: import("./the-days-are-too-short.md")
    },
    {
        pathname: "where-is-hell",
        title: "Where is hell?",
        date: "2019-04-12",
        module: import("./where-is-hell.md")
    }
];

export default markdown;

# Simple Blogger

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To run in hot module reloading mode:

```sh
npm start
```

To create a production build:

```sh
npm run build
```

## How to use

-   Create a markdown file in the **articles** folder.
-   Write your blog (in markdown).
-   Add an object (see below, for details) to the markdown variable in markdown.js file.

The object for your new blog post should have 4 properties: pathname, title, date, and module like this:

```javascript
{
    pathname: "hello-world",
    title: "Hello World",
    date: "2019-04-14",
    module: import("./hello-world.md")
},
```

## Thanks

Created with the help of [createapp.dev - an online tool for creating webpack and parcel projects](https://createapp.dev/)

I found the above website useful - although I did change a few things.

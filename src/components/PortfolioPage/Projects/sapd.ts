const sapd = {
    text: [
        `This scraper manipulates the San Antonio Police Department’s web application to programmatically request records on more than 6 million calls for service since January 2011 and add them to a PostgreSQL database.`,
        `I started work on the project a few months into my time at the Express-News, but my overzealous object-oriented approach eventually led to memory leaks. I took a second pass with functional programming, resulting in faster, leaner and more easily tested code.`,
        `Use the "repo" command to see the code on GitHub.`
    ],
    links: [
        { text: 'portfolio', href: '../portfolio' },
        { text: 'repo', href: 'https://github.com/sa-express-news/sapd-crime-scraper' }

    ],
    commands: [
        { command: '../', url: '../portfolio' },
        { command: 'portfolio', url: '../portfolio' },
        { command: 'repo', url: 'https://github.com/sa-express-news/sapd-crime-scraper' },
    ]
};

export default sapd;
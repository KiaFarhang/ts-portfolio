const primaries = {
    text: [
        `My team built a page with live-updating graphics to show the results of Texas' March 2018 primary elections.`,
        `Other team members built the front end, which used handlebars to render the charts.`,
        `I wrote the back end server, which collected results from two APIs, pruned them and sent them to the front end via web socket connection.`
    ],
    links: [
        { text: 'portfolio', href: '../portfolio' },
        { text: 'view', href: 'https://www.expressnews.com/2018-primary-results/' },
        { text: 'repo', href: 'https://github.com/sa-express-news/2018-primaries-server' }

    ],
    commands: [
        { command: '../', url: '../portfolio' },
        { command: 'portfolio', url: '../portfolio' },
        { command: 'view', url: 'https://www.expressnews.com/2018-primary-results/' },
        { command: 'repo', url: 'https://github.com/sa-express-news/2018-primaries-server' },
    ]
};

export default primaries;
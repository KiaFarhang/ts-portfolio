const podcastWidget = {
    text: [
        `The Express-News recently started podcasting, with multiple shows per week.`,
        `We wanted to let users listen to any (or all) of them from the home page of the site.`,
        `I wrote an npm package to parse the RSS feeds of our podcasting platform, then created a podcast widget with Vue.`
    ],
    links: [
        { text: 'portfolio', href: '../portfolio' },
        { text: 'view', href: 'https://www.expressnews.com/' },
        { text: 'repo', href: 'https://github.com/sa-express-news/home-podcast-widget' }

    ],
    commands: [
        { command: '../', url: '../portfolio' },
        { command: 'portfolio', url: '../portfolio' },
        { command: 'view', url: 'https://www.expressnews.com/' },
        { command: 'repo', url: 'https://github.com/sa-express-news/home-podcast-widget' },
    ]
};

export default podcastWidget;
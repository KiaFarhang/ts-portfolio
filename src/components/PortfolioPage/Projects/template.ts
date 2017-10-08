const template = {
    text: [
        `When I joined the Express-News, we had to use an expensive third-party tool to dress up big stories on the web.`,
        `I used React and ArchieML, a markup language created at the New York Times, to build a longform template in house.`,
        `Use the "repo" command to read more on GitHub. Use "example" to see a story that uses the template.`
    ],
    links: [
        { text: 'portfolio', href: '../portfolio' },
        { text: 'repo', href: 'https://github.com/sa-express-news/longform-story-template' },
        { text: 'example', href: 'http://www.expressnews.com/40-days-of-mourning/' }

    ],
    commands: [
        { command: '../', url: '../portfolio' },
        { command: 'portfolio', url: '../portfolio' },
        { command: 'repo', url: 'https://github.com/sa-express-news/longform-story-template' },
        { command: 'example', url: 'http://www.expressnews.com/40-days-of-mourning/' }
    ]
};

export default template;
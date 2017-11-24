const spursNation = {
    text: [
        `Landing page to host the San Antonio Express-News’ content centered around the Spurs basketball team.`,
        `I worked with our team’s designer to translate her vision for the page into code.`,
        `The biggest challenge around this project involved working with our organization’s content management system. The page template we had to use did not allow for multi-column layouts, so I had to write a bit of TypeScript to create and populate those areas on page load.`,
        `Use the "view" command to open the page.`
    ],
    links: [
        { text: 'portfolio', href: '../portfolio' },
        { text: 'view', href: 'http://www.expressnews.com/spurs-nation/' }

    ],
    commands: [
        { command: '../', url: '../portfolio' },
        { command: 'portfolio', url: '../portfolio' },
        { command: 'view', url: 'http://www.expressnews.com/spurs-nation/' }
    ]
}

export default spursNation;
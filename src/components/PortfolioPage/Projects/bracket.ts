const bracket = {
    text: [
        `This React + Redux application lets users fill out brackets
         for the Texas high school football playoffs and follow along as the playoffs progress.`,
        `I set up a PostgreSQL database to hold user 
        brackets and a Node.js REST API to allow users to send their brackets after picking their winning teams. `,
        `Use the "view" command to open the page. 
        Use the "repo" command to see the front-end code on GitHub. Back-end code available on request.`
    ],
    links: [
        { text: 'portfolio', href: '../portfolio' },
        { text: 'view', href: 'https://expressnewsdata.com/brackets/uil-2017-bracket/' },
        { text: 'repo', href: 'https://github.com/sa-express-news/UIL-bracket-17' }

    ],
    commands: [
        { command: '../', url: '../portfolio' },
        { command: 'portfolio', url: '../portfolio' },
        { command: 'view', url: 'https://expressnewsdata.com/brackets/uil-2017-bracket/' },
        { command: 'repo', url: 'https://github.com/sa-express-news/UIL-bracket-17' },
    ]
};

export default bracket;
const oubliette = {
    text: [
        `In Oubliette, you're trapped in a dungeon with a very stupid dragon that wanders randomly from point to point.`,
        `Moving to the exit on every dungeon floor brings you deeper - until you finally escape.`,
        `Use the "repo" command to read more on GitHub.`
    ],
    links: [
        { text: 'portfolio', href: '../portfolio' },
        { text: 'repo', href: 'https://github.com/KiaFarhang/oubliette' }

    ],
    commands: [
        { command: '../', url: '../portfolio' },
        { command: 'portfolio', url: '../portfolio' },
        { command: 'repo', url: 'https://github.com/KiaFarhang/oubliette' }
    ]
};

export default oubliette;
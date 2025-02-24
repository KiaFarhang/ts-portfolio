const opensecrets = {
    text: [
        `This is a Go client for the OpenSecrets federal campaign finance REST API.`,
        `It handles firing HTTP requests and marshalling the  JSON response into structs users
        can work with.`,
        `I wrote it when I worked at DataStax because I wanted to move to their dev ops team.`, 
        `They worked a lot in Go and I had no experience with the language - so why not a project to learn?`,
        `I wrote the whole thing ignorant of Golang context, then had to rewrite all the public functions to take context as a first argument.`,
        `So, hey, I definitely learned.`,
        `Use the "repo" link/command to see the source code.`
    ],
    links: [
        { text: 'portfolio', href: '../portfolio' },
        { text: 'repo', href: 'https://github.com/KiaFarhang/opensecrets' }

    ],
    commands: [
        { command: '../', url: '../portfolio' },
        { command: 'portfolio', url: '../portfolio' },
        { command: 'repo', url: 'https://github.com/KiaFarhang/opensecrets' },
    ]
}

export default opensecrets;
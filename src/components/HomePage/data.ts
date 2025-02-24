const data = {
    text: [
        `Hi, I'm Kia Farhang, a software developer, musician and writer.`,
        `You can navigate this site using the links below - or, if you'd like, use the command line at the bottom of the screen.`,
        `Type the name of the page you'd like to visit. 
        E.g. to access the "portfolio" page, type "portfolio" and press enter.`,
        `"../" will take you back to the previous page.`,
        `"resume" will take you directly to my resume, which is hosted on GitHub.`,
        `(If you're familiar with a command line, the 'cd' to enter a page is optional. Tab completion is also supported.)`
     ],
    links: [
        { text: 'portfolio', href: 'portfolio' },
        { text: 'resume', href: 'https://github.com/KiaFarhang/ts-portfolio/blob/master/kia-farhang-resume.pdf'}
    ],
    commands: [
        { command: 'portfolio', url: 'portfolio' },
        { command: 'resume', url: 'https://github.com/KiaFarhang/ts-portfolio/blob/master/kia-farhang-resume.pdf'}
    ]
};

export default data;
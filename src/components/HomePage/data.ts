const data = {
    text: [
        `Hi, I'm Kia Farhang, a software developer in Austin, Texas currently working for USAA.`,
        `You can navigate this site using the links below - or, if you'd like, use the command line at the bottom of the screen.`,
        `Type the name of the page you'd like to visit. 
        To access the "about" page, type "about" and press enter.`,
        `"../" will take you up one level.`,
        `If you'd rather just see my resume, click the 'resume' link below.`
    ],
    links: [
        { text: 'about', href: 'about' },
        { text: 'portfolio', href: 'portfolio' },
        { text: 'resume', href: 'https://github.com/KiaFarhang/ts-portfolio/blob/master/kia-farhang-resume.pdf' }
    ],
    commands: [
        { command: 'about', url: 'about' },
        { command: 'portfolio', url: 'portfolio' },
        { command: 'resume', url: 'https://github.com/KiaFarhang/ts-portfolio/blob/master/kia-farhang-resume.pdf' }
    ]
};

export default data;
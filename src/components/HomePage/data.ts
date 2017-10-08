const data = {
    text: [
        `Hi, I'm Kia Farhang, a full-stack developer at the Express-News in San Antonio, Texas.`,
        `This website showcases my work and a little bit about myself.`,
        `You can navigate using the links below - or, if you'd like, use the command line at the bottom of the screen.`,
        `Type the name of the page you'd like to visit. 
        To access the "about" page, type "about" and press enter.`,
        `"../" will take you up one level.`
    ],
    links: [
        { text: 'about', href: 'about' },
        { text: 'portfolio', href: 'portfolio' }
    ],
    commands: [
        { command: 'about', url: 'about' },
        { command: 'portfolio', url: 'portfolio' }
    ]
};

export default data;
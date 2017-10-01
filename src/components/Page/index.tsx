import * as React from 'react';

import Text from '../Text';
import Link from '../Link';
import { CommandLineWithRouter } from '../CommandLine';

export interface Props {
    text: string[];
    commandMatches: {
        command: string,
        url: string
    }[];
    links?: {
        text: string,
        href: string
    }[];
}

const Page = ({ text, commandMatches, links }: Props) => {
    const textComponents = text.map((text, index) => { return <Text text={text} key={index} /> });
    let linkComponents;
    if (links) {
        linkComponents = links.map((link, index) => { return <Link text={link.text} href={link.href} key={index} /> });
    }

    if (linkComponents) {
        return (
            <div>
                {textComponents}
                {linkComponents}
                <CommandLineWithRouter matches={commandMatches} />
            </div>
        )
    }
    return (
        <div>
            {textComponents}
            <CommandLineWithRouter matches={commandMatches} />
        </div>
    )
}

export default Page;
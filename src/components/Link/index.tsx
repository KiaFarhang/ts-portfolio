import * as React from 'react';

export interface Props {
    text: string;
    href: string;
}

const Link = ({ text, href }: Props) => {
    return (
        <p><a href={href} title={text}>{text}</a></p>
    )
}

export default Link;
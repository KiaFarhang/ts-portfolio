import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export interface Props {
    text: string;
    href: string;
}

const Link = ({ text, href }: Props) => {
    return (
        <p><RouterLink to={href} title={text} />{text}</p>
    );
};

export default Link;
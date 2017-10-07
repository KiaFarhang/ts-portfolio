import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import './Link.css';

export interface Props {
    text: string;
    href: string;
}

const Link = ({ text, href }: Props) => {
    if (href.indexOf('http') > -1) {
        return (
            <p><a href={href} title={text} target="_blank">{text}</a></p>
        );
    } else {
        return (
            <p><RouterLink to={href} title={text}>{text}</RouterLink></p>
        );
    }

};

export default Link;
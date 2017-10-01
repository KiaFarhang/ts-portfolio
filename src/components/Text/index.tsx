import * as React from 'react';

export interface Props {
    text: string;
}

const Text = ({ text }: Props) => {
    return (
        <p>{text}</p>
    );
};

export default Text;
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { History } from 'history';

import './CommandLine.css';
import { useState } from 'react';

interface Props extends RouteComponentProps<any> {
    matches: {
        command: string,
        url: string
    }[];
    history: History;
}

const startsWithCD = (theString: string): boolean => {
    return theString.startsWith('cd ');
}

const generateFindFunction = (value: string) => {
    return function (object: { command: string, url: string }) {
        return object.command === value;
    };
}

const CommandLine = ({matches, history}: Props) => {
    const [value, setValue] = useState('');

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode === 9) {
            event.preventDefault();
            const currentCommand = startsWithCD(value) ? value.substr(3) : value;
            matches.forEach((match) => {
                if (match.command.startsWith(currentCommand.toLowerCase())) {
                    setValue(match.command);
                }
            });
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const submitValue = startsWithCD(value) ? value.substr(3).toLowerCase() : value.toLowerCase();

        const findFunction = generateFindFunction(submitValue);

        const potentialMatch = matches.find(findFunction);

        if (potentialMatch) {
            if (potentialMatch.url.indexOf('http') > -1) {
                window.open(potentialMatch.url);
                setValue('');
            } else {
                if (history) {
                    history.push(potentialMatch.url);
                }
            }
        }

    }

    return (
        <form className="command-line" onSubmit={handleSubmit}>
            <span>
                <input
                    type="text"
                    autoFocus={window.innerWidth > 1024}
                    value={value}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
            </span>
            <input type="submit" style={{ display: 'none' }} />
        </form>
    );
}

export const CommandLineWithRouter = withRouter(CommandLine);
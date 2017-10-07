import * as React from 'react';
import { withRouter } from 'react-router-dom';

import './CommandLine.css';

export interface Props {
    matches: {
        command: string,
        url: string
    }[];
    history?: any;
}

export interface State {
    value: string;
}

export class CommandLine extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = { value: '' };
    }

    handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({ value: event.currentTarget.value });
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const submitValue = this.state.value;

        const findFunction = this.generateFindFunction(submitValue);

        const potentialMatch = this.props.matches.find(findFunction);

        if (potentialMatch) {
            if (potentialMatch.url.indexOf('http') > -1) {
                window.open(potentialMatch.url);
                this.setState(({
                    value: ''
                }));
            } else {
                this.props.history.push(potentialMatch.url);
            }
        }

    }
    generateFindFunction = (value: string) => {
        return function (object: { command: string, url: string }) {
            return object.command === value;
        };
    }

    handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode === 9) {
            event.preventDefault();
            this.props.matches.forEach((match) => {
                if (match.command.startsWith(this.state.value)) {
                    this.setState(({
                        value: match.command
                    }));
                }
            });
        }
    }

    render() {
        return (
            <form className="command-line" onSubmit={this.handleSubmit}>
                <span><input
                    type="text"
                    autoFocus={true}
                    value={this.state.value}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                /></span>
                <input type="submit" style={{ display: 'none' }} />
            </form>
        );
    }
}

export const CommandLineWithRouter = withRouter(CommandLine);
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { History } from 'history';

import './CommandLine.css';

export interface Props {
    matches: {
        command: string,
        url: string
    }[];
    history?: History;
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

        const submitValue = this.startsWithCD(this.state.value) ? this.state.value.substr(3).toLowerCase() : this.state.value.toLowerCase();

        const findFunction = this.generateFindFunction(submitValue);

        const potentialMatch = this.props.matches.find(findFunction);

        if (potentialMatch) {
            if (potentialMatch.url.indexOf('http') > -1) {
                window.open(potentialMatch.url);
                this.setState(({
                    value: ''
                }));
            } else {
                if (this.props.history) {
                    this.props.history.push(potentialMatch.url);
                }
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
            const currentCommand = this.startsWithCD(this.state.value) ? this.state.value.substr(3) : this.state.value;
            console.log(currentCommand);
            this.props.matches.forEach((match) => {
                if (match.command.startsWith(currentCommand.toLowerCase())) {
                    this.setState(({
                        value: match.command
                    }));
                }
            });
        }
    }

    startsWithCD = (theString: string): boolean => {
        return theString.startsWith('cd ');
    }

    render() {
        return (
            <form className="command-line" onSubmit={this.handleSubmit}>
                <span><input
                    type="text"
                    autoFocus={window.innerWidth > 1024}
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
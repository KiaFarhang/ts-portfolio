import * as React from 'react';
import { withRouter } from 'react-router-dom';

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
            this.props.history.push(potentialMatch.url);
        }

    }
    generateFindFunction = (value: string) => {
        return function (object: { command: string, url: string }) {
            return object.command === value;
        };
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" className="test" value={this.state.value} onChange={this.handleChange} />
                <input type="submit" style={{ display: 'none' }} />
            </form>
        );
    }
}

export const CommandLineWithRouter = withRouter(CommandLine);
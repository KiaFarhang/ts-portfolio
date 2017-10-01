import * as React from 'react';

export interface Props {
    matches: {
        command: string,
        url: string
    }[]
}

export interface State {
    value: string
}

class CommandLine extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = { value: '' };
    }

    // handleChange(event: React.SyntheticEvent<HTMLInputElement>) {
    //     // this.setState({ value: event.target.value });
    // }

    handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const enterKeyCode = 13;
        const value = event.currentTarget.value;
        // const matchedCommand = this.props.matches.find(()=>)

        if (event.keyCode === enterKeyCode) {
        }
    }

    handleChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ value: event.currentTarget.value });
    }

    matchesCommand = (props: Props) => {
        return this.props.matches
    }

    // handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    // }

    render() {
        return (
            <form>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </form>
        );
    }
}

export default CommandLine;
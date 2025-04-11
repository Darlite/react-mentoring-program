import React from "react";

interface CounterProps {
    initialCount: number;
}

interface CounterState {
    count: number;
}

export default class Counter extends React.Component<CounterProps, CounterState> {
    constructor(props: CounterProps) {
        super(props);
        this.state = { count: props.initialCount }
    }

    increment = () => {
        this.setState((prevState) => ({count: prevState.count + 1}));
    }
    decrement = () => {
        this.setState((prevState) => ({count: prevState.count - 1}));
    }

    render() {
        return (React.createElement(
            "div",
            null,
            "Counter: " + this.state.count,
            React.createElement("button", {onClick: this.increment}, "+"),
            React.createElement("button", {onClick: this.decrement}, "-"),
        ))
    }
}

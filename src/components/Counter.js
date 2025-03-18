import React from "react";

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: props.initialCount || 0 }
    }

    increment = () => {
        this.setState((prevState) => ({count: prevState.count + 1}));
    }
    decrement = () => {
        this.setState((prevState) => ({count: prevState.count - 1}));
    }

    render() {
        return (React.createElement(
            "div", null, "Counter: " + this.state.count,
            React.createElement("button", {onClick: this.increment}, "+"),
            React.createElement("button", {onClick: this.decrement}, "-"),
        ))
    }
}
import React, { Component } from 'react';

class Counter extends Component {
    render() {
        const { onIncrement, onDecrement, onDelete, counter } = this.props;

        return (
            <div>
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>

                <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => onIncrement(counter)}
                >
                    +
                </button>
                <button
                    className={this.formatDecrement()}
                    onClick={() => onDecrement(counter)}
                >
                    -
                </button>
                <button
                    className="btn btn-danger btn-sm m-2"
                    onClick={() => onDelete(counter.id)}
                >
                    Delete
                </button>
            </div>
        );
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatDecrement() {
        const { value } = this.props.counter;
        return value === 0
            ? 'btn btn-secondary btn-sm disabled'
            : 'btn btn-secondary btn-sm';
    }
}

export default Counter;

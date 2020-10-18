import React, { Component } from 'react';

class Counter extends Component {
    render() {
        const { onIncrement, onDecrement, onDelete, counter } = this.props;

        return (
            <div className="containter">
                <div className="row">
                    <div className="col-1">
                        <span className={this.getBadgeClasses()}>
                            {this.formatCount()}
                        </span>
                    </div>
                    <div className="col">
                        <button
                            className="btn btn-secondary btn-sm"
                            onClick={() => onIncrement(counter)}
                        >
                            +
                        </button>
                        <button
                            disabled={counter.value === 0 ? 'disabled' : ''}
                            className="btn btn-secondary btn-sm m-2"
                            onClick={() => onDecrement(counter)}
                        >
                            -
                        </button>
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() => onDelete(counter.id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
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
}

export default Counter;

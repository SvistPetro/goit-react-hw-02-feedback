import { Component } from 'react';
import css from './Statistics.module.css';

class Statistics extends Component {

    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;
        const totalSum = total();
        const percent = positivePercentage(totalSum);

        return (
            <div className={css.thumb}>
                <span>Good: {good}</span>
                <span>Natural: {neutral}</span>
                <span>Bad: {bad}</span>
                <span>Total: {totalSum}</span>
                <span>Positive feedback: {percent}%</span>
            </div>
        )
    }
}

export { Statistics };
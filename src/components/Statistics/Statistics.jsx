import { Component } from 'react';
import css from './Statistics.module.css';

class Statistics extends Component {

    render() {
        const { good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage } = this.props;
        const total = countTotalFeedback();
        const percent = countPositiveFeedbackPercentage(total);

        return (
            <div className={css.thumb}>
                <span>Good: {good}</span>
                <span>Natural: {neutral}</span>
                <span>Bad: {bad}</span>
                <span>Total: {total}</span>
                <span>Positive feedback: {percent}%</span>
            </div>
        )
    }
}

export { Statistics };
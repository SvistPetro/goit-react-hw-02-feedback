import { Component } from 'react';


class Statistics extends Component {

    render() {
        const { good, neutral, bad, handleClickButton, countTotalFeedback, countPositiveFeedbackPercentage } = this.props;
        const total = countTotalFeedback();
        const percent = countPositiveFeedbackPercentage(total);

        return (
            <>
                <h1>Please leave feedback</h1>
                <button type="button" name="good" onClick={handleClickButton}>Good</button>
                <button type="button" name="neutral" onClick={handleClickButton}>Neutral</button>
                <button type="button" name="bad" onClick={handleClickButton}>Bad</button>
                <h2>Statistics</h2>
                <span>Good: {good}</span>
                <span>Natural: {neutral}</span>
                <span>Bad: {bad}</span>
                <span>Total: {total}</span>
                <span>Positive feedback: {percent}%</span>
            </>

        )
    }

}

export { Statistics };
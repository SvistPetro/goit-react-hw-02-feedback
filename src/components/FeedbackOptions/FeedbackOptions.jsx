import { Component } from 'react';
import css from './FeedbackOptions.module.css'

class FeedbackOptions extends Component {

    render() {
        const { onLeaveFeedback } = this.props;

        return (
            <div className={css.thumb}>
                <button type="button" className={css.button} name="good" onClick={onLeaveFeedback}>Good</button>
                <button type="button" className={css.button} name="neutral" onClick={onLeaveFeedback}>Neutral</button>
                <button type="button" className={css.button} name="bad" onClick={onLeaveFeedback}>Bad</button>
            </div>
        )
    }
}

export { FeedbackOptions };
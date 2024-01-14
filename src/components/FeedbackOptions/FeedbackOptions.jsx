import { Component } from 'react';
import css from './FeedbackOptions.module.css'

class FeedbackOptions extends Component {

    render() {
        const { handleClickButton } = this.props;

        return (
            <div className={css.thumb}>
                <button type="button" className={css.button} name="good" onClick={handleClickButton}>Good</button>
                <button type="button" className={css.button} name="neutral" onClick={handleClickButton}>Neutral</button>
                <button type="button" className={css.button} name="bad" onClick={handleClickButton}>Bad</button>
            </div>
        )
    }
}

export { FeedbackOptions };
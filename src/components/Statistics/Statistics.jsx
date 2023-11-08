// const { Component } = require("react");
import { Component } from 'react';


class Statistics extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

    render() {
        return (
            <>
                <h1>Please leave feedback</h1>
                <button type="button">Good</button>
                <button type="button">Natural</button>
                <button type="button">Bad</button>
                <h2>Statistics</h2>
                <span>Good:{this.state.good}</span>
                <span>Natural:{this.state.neutral}</span>
                <span>Bad:{this.state.bad}</span>
            </>

        )
    }

}

export default Statistics;
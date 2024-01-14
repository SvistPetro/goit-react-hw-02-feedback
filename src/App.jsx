import { Component } from 'react';
import { Statistics } from './components/Statistics/Statistics';

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleClickButton = (e) => {
    const key = e.target.name;
    this.setState((prevState) => {
      return {[key]: prevState[key] +1};
    });
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = (total) => {
    const { good } = this.state;
    return total === 0 ? 0 : Math.round((good * 100) / total);

  }
  render() {

    return (
      <div>
        <Statistics 
        good={this.state.good}
        neutral={this.state.neutral} 
        bad={this.state.bad} 
        handleClickButton={this.handleClickButton}
        countTotalFeedback={this.countTotalFeedback}
        countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
        />
      </div>
    );
  }
}

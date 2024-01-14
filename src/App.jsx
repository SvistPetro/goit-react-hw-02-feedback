import { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification'

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

    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions 
          handleClickButton={this.handleClickButton}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? 
            (<Notification message="There is no feedback"/>):
            (<Statistics 
            good={this.state.good}
            neutral={this.state.neutral} 
            bad={this.state.bad} 
            countTotalFeedback={this.countTotalFeedback}
            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
            />)
          }
        </Section>
      </>
    );
  }
}

import { BoxFeedbackOptions } from './App.styled';
// import PropTypes from 'prop-types'
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { useState} from 'react';


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  const leaveFeedback = (key) => {
    switch (key) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.ceil(
      (good / (good + bad + neutral)) * 100);
  };
  

  return (
    <BoxFeedbackOptions>
      <Section title="Please leave feedback" children>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={leaveFeedback}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics" children>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </BoxFeedbackOptions>
  );
};

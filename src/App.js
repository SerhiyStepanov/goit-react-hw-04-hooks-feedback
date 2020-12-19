import { useState } from "react";
import Section from "./Components/Section";
import FeedbackOptions from "./Components/FeedbackOptions";
// import Statistics from "./Components/Statistics";
// import Notification from "./Components/Notification";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increment = (idx) => {
    // console.log(idx);
    console.log(idx);
    switch (idx) {
      case "good":
        setGood((state) => state + 1);
        break;

      case "neutral":
        setNeutral((state) => state + 1);
        break;

      case "bad":
        setBad((state) => state + 1);
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={[good, neutral, bad]}
          onLeaveFeedback={increment}
        />
      </Section>

      {/* <Section title="Statistics">
        {this.countTotalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </Section> */}
    </div>
  );
}

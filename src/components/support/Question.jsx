import { useState } from 'react';

import classes from './Question.module.css';

const Question = ({ answer, id, title }) => {
  const [isAnswerOpen, setIsAnswerOpen] = useState(false);

  const handleAnswerCollapseClick = () => {
    setIsAnswerOpen(!isAnswerOpen);
  };

  return (
    <li
      key={id}
      className={classes.question}
      onClick={handleAnswerCollapseClick}
      aria-expanded={isAnswerOpen}>
      <h3 className={classes.h3}>{title}</h3>
      <p className={classes.answer}>{answer}</p>
    </li>
  );
};

export default Question;

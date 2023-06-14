import Question from './Question.jsx';

import { QUESTIONS } from '../../constants/constants.js';

import classes from './Faq.module.css';

const Faq = () => {
  return (
    <section className={classes.faq}>
      <h2 className={classes.h2}>Frequently asked questions</h2>
      <ul className={classes.list}>
        {QUESTIONS.map(({ answer, id, title }) => {
          return <Question key={id} answer={answer} title={title} />;
        })}
      </ul>
    </section>
  );
};

export default Faq;

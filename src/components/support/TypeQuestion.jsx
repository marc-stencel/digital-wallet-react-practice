import QuestionForm from './QuestionForm';

import classes from './TypeQuestion.module.css';

const TypeQuestion = () => {
  return (
    <section className={classes.search}>
      <div className={classes.card}>
        <h1 className={classes.h1}>Get instant answers</h1>
        <QuestionForm />
      </div>
    </section>
  );
};

export default TypeQuestion;

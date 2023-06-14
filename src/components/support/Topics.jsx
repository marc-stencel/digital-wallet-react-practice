import { TOPICS } from '../../constants/constants';

import classes from './Topics.module.css';

const Topics = () => {
  return (
    <section className={classes.topics}>
      <h2 className={classes.h2}>Browse popular topics</h2>
      <ul className={classes.list}>
        {TOPICS.map(({ id, topic }) => {
          return (
            <li key={id} className={classes.topic}>
              <h3 className={classes.h3}>{topic}</h3>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Topics;

import classes from './ItemTitle.module.css';

const ItemTitle = ({ children }) => {
  return <strong className={classes.title}>{children}</strong>;
};

export default ItemTitle;

import classes from './ItemData.module.css';

const ItemData = ({ children }) => {
  return <p className={classes.data}>{children}</p>;
};

export default ItemData;

import classes from './Checkbox.module.css';

const Checkbox = ({ id, label, name }) => {
  return (
    <>
      <input type="checkbox" id={id} name={name} className={classes.checkbox} />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

export default Checkbox;

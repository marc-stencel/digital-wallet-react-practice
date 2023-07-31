import classes from './Select.module.css';

const Select = ({ defaultVal, id, label, name, options }) => {
  return (
    <div className={classes['select-wrapper']}>
      <label className={classes.label} htmlFor={id}>
        {label}
      </label>
      <select
        className={classes.select}
        key={id}
        id={id}
        name={name}
        defaultValue={defaultVal}>
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;

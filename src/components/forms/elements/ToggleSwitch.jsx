import classes from './ToggleSwitch.module.css';

const ToggleSwitch = ({ checked, name, onToggleSwitch }) => {
  const handleToggle = (e) => {
    onToggleSwitch(e.target.checked);
  };

  return (
    <>
      <div className={classes['switch-wrapper']}>
        <label className={classes.switch}>
          <input
            type="checkbox"
            className={classes.checkbox}
            name={name}
            checked={checked}
            onChange={handleToggle}
          />
          <span className={classes.slider}></span>
        </label>
      </div>
    </>
  );
};

export default ToggleSwitch;

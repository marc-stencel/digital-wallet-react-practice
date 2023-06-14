import classes from './Country.module.css';

const Country = ({
  country: { abbr, id, label, name },
  img,
  onInputBlur,
  onInputChange,
  value,
}) => {
  const handleInputChange = (e) => {
    onInputChange(Number(e.target.value));
  };

  const handleInputBlur = (e) => {
    onInputBlur(Number(e.target.value));
  };

  const handleInputKeyDown = (e) =>
    ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

  return (
    <div className={classes.country}>
      <div className={classes.amount}>
        <label htmlFor={id}>
          {`${label} `}
          <strong>{name}</strong>
        </label>
        <input
          id={id}
          min="0"
          max="10000"
          pattern="[0-9]"
          type="number"
          value={value}
          onBlur={handleInputBlur}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
        />
      </div>
      <div className={classes.currency}>
        <div className={classes.flag}>
          <img src={img} alt="" className={classes.icon} />
        </div>
        <p className={classes.abbreviation}>{abbr}</p>
      </div>
    </div>
  );
};

export default Country;

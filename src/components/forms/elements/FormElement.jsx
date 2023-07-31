import classes from './FormElement.module.css';

const FormElement = ({ children, resize }) => {
  return (
    <div
      className={
        resize
          ? `${classes['form-element']} ${classes.resize}`
          : classes['form-element']
      }>
      {children}
    </div>
  );
};

export default FormElement;

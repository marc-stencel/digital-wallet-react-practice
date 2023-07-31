import { Form } from 'react-router-dom';

import useSuccessMessage from '../../../hooks/useSuccessMessage';

import Select from '../elements/Select';
import ButtonsWrapper from '../../buttons/ButtonsWrapper';
import Button from '../../buttons/Button';
import ToggleButton from '../../buttons/ToggleButton';
import FormMessage from '../elements/FormMessage';

const SelectForm = ({
  buttonName,
  className,
  defaultVal,
  id,
  label,
  name,
  options,
  onToggleForm,
}) => {
  const isShowMessage = useSuccessMessage(buttonName);

  return (
    <Form method="patch" action={'/dashboard'}>
      <Select
        defaultVal={defaultVal}
        id={id}
        label={label}
        name={name}
        options={options}
      />
      {isShowMessage ? <FormMessage message="Success!!" status={true} /> : null}
      <ButtonsWrapper>
        <Button className={className} name={buttonName} type="submit">
          Save
        </Button>
        <ToggleButton onToggleButton={onToggleForm}>Cancel</ToggleButton>
      </ButtonsWrapper>
    </Form>
  );
};

export default SelectForm;

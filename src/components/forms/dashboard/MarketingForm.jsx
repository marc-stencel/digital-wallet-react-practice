import { Form } from 'react-router-dom';

import useSuccessMessage from '../../../hooks/useSuccessMessage';

import MarketingOptions from '../elements/MarketingOptions';
import ButtonsWrapper from '../../buttons/ButtonsWrapper';
import Button from '../../buttons/Button';
import ToggleButton from '../../buttons/ToggleButton';
import FormMessage from '../elements/FormMessage';

const MarketingForm = ({ className, emailOffer, onToggleForm, smsOffer }) => {
  const isShowMessage = useSuccessMessage('marketing');

  return (
    <Form method="patch" action={'/dashboard'}>
      <MarketingOptions emailOffer={emailOffer} smsOffer={smsOffer} />
      {isShowMessage ? <FormMessage message="Success!!" status={true} /> : null}
      <ButtonsWrapper>
        <Button className={className} type="submit" name="marketing">
          Save
        </Button>
        <ToggleButton onToggleButton={onToggleForm}>Cancel</ToggleButton>
      </ButtonsWrapper>
    </Form>
  );
};

export default MarketingForm;
